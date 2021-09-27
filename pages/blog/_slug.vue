<template>
    <article>
        <h1>{{article.title}}</h1>
        <p>{{article.description}}</p>
        <span>creation: {{formatDate(article.createdAt)}}</span>
        <span>updated: {{formatDate(article.updatedAt)}}</span>

        <div class="mt-8 lg:flex lg:space-x-8">
            <div class="flex-1 prose max-w-none">
                <NuxtContent :document="article" />
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

<script lang="ts">
    import {Context} from "@nuxt/types"
    import {IContentDocument} from "@nuxt/content/types/content"

    export default {
        async asyncData({$content, params}: Context) {
            const articles = await $content("articles")
                .where({slug: {"$contains": params.slug}})
                .fetch() as IContentDocument[]
                // TODO: catch, maybe put this in a middleware ?

            console.log(articles[0].toc)

            return {article: articles[0]}
        },
        methods: {
            formatDate(date: string) {
                const options: Intl.DateTimeFormatOptions = {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
                return new Date(date).toLocaleDateString("en", options);
            }
        }
    }
</script>
