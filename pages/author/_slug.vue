<template>
    <div class="container mx-auto" v-if="author">
        <div class="flex gap-x-4 items-center p-5 rounded-full shadow-md">
            <span class="text-4xl p-5 rounded-full shadow-inner bg-gray-50">{{author.icon}}</span>
            <div class="flex flex-col justify-between">
                <span class="text-xl text-gray-700">{{author.name}}</span>
                <span class="text-sm text-gray-600">{{author.desc}}</span>
            </div>
        </div>

        <template v-if="articles">
            <span class="mt-8 block text-xl font-bold text-gray-800">Posts</span>
            <div class="flex flex-col mt-4">
                <ArticleLabel 
                    v-for="article of articles"
                    :key ="article.slug"
                    :article="article"
                    authorless
                />
            </div>
        </template>
    </div>
</template>

<script>
export default {
    async asyncData({$content, params}) {
        const author = await $content("authors")
            .where({slug: params.slug})
            .fetch()
            .catch((err) => /* TODO: */ undefined)

        if (!author) {
            return {author: undefined}
        }

        const articles = await $content("articles")
            .where({author: params.slug})
            .fetch()
            .catch(err => /* TODO: */ undefined)

        return {author: Array.isArray(author) ? author[0] : author, articles}
    }
}
</script>

