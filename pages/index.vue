<template>
    <div>
        <span class="text-lg font-bold mb-4 block">Latest articles</span>
        <ArticleLabel v-for="article of articles" :key="article.slug" :article="article" />
    </div>
</template>

<script>
function filenameToSlug(filename) {
    if (filename.charAt(6) != "_") {
        return undefined
    }

    return filename.substr(7)
}


export default {
    head() {
        return {
            title: "Добрый день !"
        }
    },
    async asyncData({ $content }) {
        const articles = await $content("articles").fetch();
        articles.map(article => article.slug = filenameToSlug(article.slug) ?? "")
        return {articles}
    }
}
</script>
