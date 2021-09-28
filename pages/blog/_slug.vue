<template>
    <article v-if="article">
        <div class="mt-16 lg:flex lg:space-x-8">
            <div class="flex-1 prose max-w-none">
                <span class="block text-center font-bold text-3xl text-gray-800">
                    {{article.title}}
                </span>

                <span class="block text-center text-gray-700 mt-2">
                    {{article.description}}
                </span>

                <div class="flex justify-end items-center text-xs text-gray-700 space-x-2 mt-16">
                    <AuthorLabel :slug="article.author" />
                    <span>on {{article.createdAt | date}} ({{article.updatedAt | date}})</span>
                </div>

                <NuxtContent :document="article" class="mt-8" />
            </div>

            <div class="lg:border-l-4 lg:border-gray-50 lg:px-8 w-96">
                <ul>
                    <li v-for="link of article.toc" :key="link.id" :class="{ 'ml-4': link.depth > 2, 'mt-2': [1, 2].indexOf(link.depth) > -1 }">
                        <NuxtLink :to="`#${link.id}`">{{link.text}}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </article>
</template>

<script>
import dFnsFormat from "date-fns/format"

export default {
    head() {
        if (!this.article) {
            return
        }

        return {title: this.article.description}
    },
    async asyncData({$content, params}) {
        const articles = await $content("articles")
            .where({slug: {"$contains": params.slug}})
            .fetch()
            .catch(() => /* TODO: */ undefined);

        if (articles) {
            return {article: Array.isArray(articles) ? articles[0] : articles}
        }

        return {article: undefined}
    },
    methods: {
        formatDate(date) {
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric"
            }
            return new Date(date).toLocaleDateString("en", options);
        }
    },
    filters: {
        date(value) {
            const parsed = Date.parse(value)
            return dFnsFormat(parsed, "dd/MM/yy")
        }
    }
}
</script>
