<template>
    <b-container class="my-5">
        <h2 class="title jd-text-36 text-center jd-font-bold jd-text-dark">Our Blogs</h2>

        <section class="d-flex flex-column">
            <div v-for="(blog, key) in blogs" :key="key">
                <section class="d-flex justify-content-center my-2">
                    <BBadge variant="secondary" class="jd-text-18 jd-bg-def">{{ blog.created_at |  moment("MMMM Do YYYY") }}</BBadge>
                </section>
                <div  class="blog-section">
                    <h2 class="headline">{{ blog.headline }}</h2>
                    <h4 class="sub-headline">{{ blog.sub_headline }}</h4>
                    <p class="author jd-text-dark jd-font-light mt-2 mb-2">Author: <b class="text-uppercase"> {{ blog.author }}</b></p>
                    <b-img :src="blog.main_image_path"  class="img-style"></b-img>

                    <div v-html="blog.description" style="word-break: break-all;"></div>
                </div>
            </div>
        </section>
        <infinite-loading @infinite="getData">
            <div slot="no-more"><span  v-if="total > 20">No more items</span></div>
            <div slot="no-results">No items created</div>
        </infinite-loading>
    </b-container>
</template>

<script>
    import InfiniteLoading from "vue-infinite-loading";
    import { RepositoryFactory } from "../../api/RepositoryFactory";

    export default {
        components: {
            InfiniteLoading
        },
        data() {
            return {
                total: 0,
                page: 1,
                blogs: [],
            }
        },
        methods: {
            getData($state) {
                RepositoryFactory.get('blog').get({
                    params: {
                        page: this.page,
                    },
                }).then(({ data }) => {
                    this.total = data.blogs.total;
                    data = data.blogs.data;
                    if (data.length) {
                        this.page += 1;
                        this.blogs.push(...data);
                        $state.loaded();
                    } else {
                        $state.complete();
                    }
                });
            }
        },
        mounted() {
            this.$root.$emit('hideLoader');
        }
    }
</script>

<style scoped lang="scss">
.title {
    position: relative;
    &:after {
        content: "";
        height: 5px;
        border-radius: 150px;
        background-color: #ef4e23;
        margin-top: 20px;
        display: block;
        width: 300px;
        margin-left: auto;
        margin-right: auto;
        @media screen and (max-width: 300px) {
            width: 150px;
        }
    }
}
.jd-bg-def{
    background: #e8452a;
}
.img-style{
    width: 100%;
    object-fit: cover;
}
.blog-section{
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    margin: 20px 0;
    padding: 20px;
    .img-style{
        margin-bottom: 15px;
    }
    .author {
        margin-bottom: 0;
        font-size: 18px;
    }

    .headline {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
        color: #ef4e23;
    }

    .sub-headline {
        margin-bottom: 0;
        font-size: 18px;
    }
}
</style>