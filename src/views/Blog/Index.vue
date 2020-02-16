<template>
    <b-container class="my-5">
        <h2 class="title jd-text-36 text-center jd-font-bold jd-text-dark">Our Blogs</h2>

        <b-row>
            <b-col v-for="(blog, key) in blogs" :key="key" cols="12" md="6"  lg="4" class="blog-section mt-5">
                <router-link :to="{ name: 'blogShow', params: { slug: blog.slug }}">
                    <b-img :src="blog.main_image_path"  class="img-style"></b-img>
                </router-link>
                <p class="author jd-text-dark jd-font-light">Author: <i class="text-uppercase"> {{ blog.author }}</i></p>
                <router-link :to="{ name: 'blogShow', params: { slug: blog.slug }}">
                    <p class="jd-text-dark text-uppercase headline jd-font-medium">{{ blog.headline }}</p>
                </router-link>
                <p class="jd-text-dark sub-headline jd-font-regular">{{ blog.sub_headline }}</p>
            </b-col>
        </b-row>
        <infinite-loading @infinite="getData"></infinite-loading>
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
.img-style{
    width: 100%;
    object-fit: cover;
}
.blog-section{
    .img-style{
        margin-bottom: 15px;
    }
    .author {
        margin-bottom: 0;
        font-size: 18px;
    }

    .headline {
        margin-bottom: 0;
        font-size: 18px;
    }

    .sub-headline {
        margin-bottom: 0;
        font-size: 18px;
    }
}
</style>