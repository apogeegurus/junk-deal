<template>
    <b-container class="my-5">
        <h2 class="title jd-text-36 text-center jd-font-bold jd-text-dark text-capitalize">{{ blog.headline }}</h2>
        <p class="mb-0 jd-text-16 text-center">Author: <span class="text-uppercase">{{ blog.author }}</span></p>
        <b-img :src="blog.main_image_path" class="img-style my-4" height="380px"></b-img>

        <b-row>
            <b-col cols="12" lg="9" class="text-break">
                <p class="jd-text-22 jd-font-medium jd-text-light">{{ blog.sub_headline }}</p>
                <div v-html="blog.description"></div>
            </b-col>
            <b-col cols="12" lg="3" class="bl-1px">
                <p class="jd-text-22 jd-font-medium jd-text-light text-uppercase">Read More</p>
                <div v-for="(similar, key) in similars" :key="key" class="mb-5">
                    <h2 class="jd-text-18 jd-font-light">Author: <span class="text-uppercase">{{ similar.author }}</span></h2>
                    <router-link :to="{ name: 'blogShow', params: { slug: similar.slug }}" class="jd-text-light">
                        <h2 class="jd-text-18 jd-font-bold"><span class="text-uppercase">{{ similar.headline }}</span></h2>
                    </router-link>
                    <h2 class="jd-text-18 jd-font-regular"><span class="text-uppercase">{{ similar.sub_headline }}</span></h2>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import { RepositoryFactory } from "../../api/RepositoryFactory";

    export default {
        data() {
            return {
                blog: {},
                similars: []
            }
        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                RepositoryFactory.get('blog').show(this.$route.params.slug)
                    .then(({ data }) => {
                        this.blog = data.blog;
                        this.similars = data.similars;
                    });
            }
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
    .bl-1px{
        border-left: 2px solid #707070;
        @media screen and (max-width:992px){
            border-left: none;
            border-top: 2px solid #707070;
            margin-top: 15px;
            padding-top: 15px;
        }
    }
</style>