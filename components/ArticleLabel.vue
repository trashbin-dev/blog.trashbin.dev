<template>
    <div class="flex gap-x-4">
        <NuxtLink :to="url" class="flex-1">{{article.title}}</NuxtLink>
        <AuthorLabel v-if="!authorless" :slug="article.author" />
        <span>{{article.createdAt | date}}</span>
    </div>
</template>

<script>
import dFnsFormat from "date-fns/format"

export default {
    props: {
        article: {
            type: Object,
            required: true
        },
        authorless: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        url() {
            return `blog/${this.article.slug}`
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
