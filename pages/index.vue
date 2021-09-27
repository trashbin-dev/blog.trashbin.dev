<template>
    <div>
        <span class="text-lg font-bold mb-4 block">Latest articles</span>
        <div v-for="article of articles" :key="article.slug" class="flex gap-x-4">
            <NuxtLink :to="`blog/${article.slug}`" class="flex-1">{{article.title}}</NuxtLink>
            <span>{{article.createdAt | date}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import {Context} from "@nuxt/types"
import {filenameToSlug} from "@/utils/blog"
import {IContentDocument} from "@nuxt/content/types/content"
import dFnsFormat from "date-fns/format"

export default {
    head() {
        return {
            title: "Добрый день !"
        }
    },
    async asyncData({ $content }: Context) {
        const articles = await $content("articles").fetch() as IContentDocument[];
        articles.map(article => article.slug = filenameToSlug(article.slug) ?? "")
        return {articles}
    },
    filters: {
        date(value: string): string {
            const parsed = Date.parse(value)
            return dFnsFormat(parsed, "dd/MM/yy")
        }
    }
}
</script>
