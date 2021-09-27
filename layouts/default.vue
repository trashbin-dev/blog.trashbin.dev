<template>
    <div class="flex flex-col min-h-screen py-8 font-sans">
        <Header />

        <div class="mt-8 container mx-auto px-4">
            <Nuxt />
        </div>

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
