<template>
    <div v-if="author" class="flex gap-x-1 items-center">
        <span>{{author.icon}}</span>
        <NuxtLink :to="url" class="text-sm text-gray-700 no-underline">{{author.name}}</NuxtLink>
    </div>
</template>

<script>
export default {
    props: {
        slug: {
            type: String,
            required: false
        }
    },
    data: () => ({
        author: {}
    }),
    async fetch() {
        if (!this.slug) {
            return
        }

        const author = await this.$content("authors")
            .where({slug: this.slug})
            .fetch()
            .catch(() => /* TODO: */ undefined)

        if (author) {
            this.author = Array.isArray(author) ? author[0] : author
        }
    },
    computed: {
        url() {
            return `/author/${this.slug}`
        }
    }
}
</script>

<style scoped>
/* needed because prose will force underline */
.no-underline {
    text-decoration: none!important;
}
</style>
