<template>
    <div class="container mx-auto p-8">
        <span class="text-lg font-bold mb-4 block">Latest articles</span>
        <div v-for="article of articles" :key="article.slug" class="flex gap-x-4">
            <NuxtLink :to="`blog/${filenameToSlug(article.slug)}`" class="flex-1">{{article.title}}</NuxtLink>
            <span>{{article.createdAt}}</span>
        </div>
    </div>
</template>

<script lang="ts">
import {Context} from "@nuxt/types"
import {filenameToSlug} from "@/utils/blog"

export default {
    head() {
        return {
            title: "Добрый день !",
        }
    },
    async asyncData({ $content }: Context) {
        const articles = await $content("articles").fetch();
        return {articles}
    },
    methods: {
        filenameToSlug,
    }
}
</script>
