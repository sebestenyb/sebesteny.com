<script setup lang="ts">
const { prev, next } = useContent()
</script>

<template>
    <div class="flex justify-between max-w-2xl px-4 py-4 mx-auto sm:px-8">
        <div class="text-gray-700 dark:text-gray-200">
            <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
            <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
        </div>
    </div>
</template>
