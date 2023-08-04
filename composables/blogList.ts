import IBlog from "utils/type";

export const useBlogsStore = defineStore('blogs', () => {



    const blogList = ref<IBlog[]>()
    const filteredList = ref<IBlog[]>()

    const itemsPerPage = 10

    const page = ref(1)

    const pagesList = ref<number[]>([])

    const pages = computed((): number => {
        if(blogList.value) {
            console.log(blogList.value.length)
           return  Math.ceil(blogList.value.length / itemsPerPage)
        } else {
            return 0
        }
    })

    function filteredBlogList() {
        const start = (page.value - 1) * itemsPerPage
        const end = page.value * itemsPerPage
        filteredList.value = blogList.value?.slice(start, end)
    }

    async function getBlogs() {
        try {
            const res = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
            const data = await res.json()
            blogList.value = data
            filteredBlogList()
        } catch (error) {
            console.log(error)
        }
    }

    watch(() => [pages.value], () => {
        pagesList.value = []
        if(pages) {
            for (let i = 1; i <= pages.value; i++) {
                pagesList.value.push(i);
              }
        }
    })

    watch(() => [page.value], () => {
        filteredBlogList()
    })


    return {blogList, getBlogs, page, pagesList, filteredList}
  })