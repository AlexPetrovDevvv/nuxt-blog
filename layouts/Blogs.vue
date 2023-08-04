<template>
    <div id="page">
        <div class="container">
        <Header/>
        <div id="content" class="site-content">
            <div id="primary" class="content-area ">
                <main id="main" class="site-main blog-main" role="main">
                    <div class="container">
                        <slot></slot>
                        <Sidebar/>
                    </div>
                </main>
            </div>
        </div>
        </div>
        <Footer/>
        <a href="#top" class="smoothup" title="Back to top"><span class="genericon genericon-collapse"></span></a>
    </div>
</template>

<script setup lang="ts">


</script>
