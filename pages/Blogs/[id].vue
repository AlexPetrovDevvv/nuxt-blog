<template>
    <div class="grid" >
        <div class="bloggrid" v-if="blogs.filteredList">
            <article v-for="blog, index in blogs.filteredList" :key="index">
                <header class="entry-header">
                    <h1 class="entry-title"><NuxtLink :to="`/blog/${blog.id}`" rel="bookmark">{{ blog.title }}</NuxtLink></h1>
                    <div class="entry-meta">
                        <span class="posted-on"><time class="entry-date published">{{ new Date(blog.createdAt).toLocaleDateString() }}</time></span>
                        <span class="comments-link"><a href="#">Leave a comment</a></span>
                    </div>
                    <div class="entry-thumbnail">
                    <img :src="blog.image" alt="">
                    </div>
                </header>
                <div class="entry-summary" >
                    <p>
                        {{ blog.preview }} <NuxtLink :to="`/blog/${blog.id}`" href="blog-single.html">Read more</NuxtLink>
                    </p>
                </div>
            </article>
        </div>
        <Pagination/>
    </div>
</template>

<script setup lang="ts">

const blogs = useBlogsStore()
const route = useRoute()
console.log(route.params.id)
blogs.page = +(route.params.id)

    onMounted(() => {
        blogs.getBlogs()
    })



definePageMeta({
    layout: 'blogs'
})

</script>

<style>
    .grid {
        width: 66.6%
    }

    .bloggrid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 400px;
        gap: 50px;
        width: 100%;
    }
    .entry-summary {
        margin: 0px 0;
    }

</style>