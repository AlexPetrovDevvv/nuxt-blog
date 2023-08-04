<template>
    <nav class="pagination" v-if="blogs.pagesList.length > 0">
        <NuxtLink :to="`/blogs/${number}`" class="page-numbers" v-for="number, index in blogs.pagesList"
        :class="number === +(route.params.id) || number === 1 && route.params.id === undefined ? 'current' : '' " :key="index">{{number}}</NuxtLink>
        <NuxtLink :to="`/blogs/${+(route.params.id) + 1}`" class="next page-numbers" >Next »</NuxtLink>
    </nav>
</template>

<script setup lang="ts">


    const blogs = useBlogsStore()

    const route = useRoute()
</script>

<style >

.pagination {
    padding-top: 100px;
}

</style>