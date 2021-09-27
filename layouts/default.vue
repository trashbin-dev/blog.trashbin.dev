<template>
    <div class="flex flex-col min-h-screen py-8 font-sans">
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script lang="ts">
export default {
    head() {
        return {
            title: "🤦",
            titleTemplate: "TrashBin -> %s"
        }
    }
}
</script>
