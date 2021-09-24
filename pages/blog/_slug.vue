<template>
    <article>
        <h1>{{article.title}}</h1>
        <p>{{article.description}}</p>
        <span>creation: {{formatDate(article.createdAt)}}</span>
        <span>updated: {{formatDate(article.updatedAt)}}</span>
        <NuxtContent :document="article" />
        <ul>
            <li v-for="link of article.toc" :key="link.id">
                <NuxtLink :to="`#${link.id}`">{{link.text}}</NuxtLink>
            </li>
        </ul>
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
