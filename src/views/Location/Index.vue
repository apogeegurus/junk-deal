<template>
    <b-container class="my-5">
        <h2 class="title jd-text-36 text-center jd-font-bold jd-text-dark">Locations</h2>

        <b-row>
            <b-col v-for="(location, key) in locations" :key="key" cols="12" md="6"  lg="4" class="blog-section mt-5">
                <router-link :to="{ name: 'location', params: { slug: location.slug }}">
                    <b-img :src="location.main_image_path" :alt="location.alt_main" class="img-style"></b-img>
                </router-link>
                <router-link :to="{ name: 'location', params: { slug: location.slug }}">
                    <p class="jd-text-dark text-uppercase headline jd-font-medium">{{ location.city }}</p>
                </router-link>
                <p class="jd-text-dark sub-headline jd-font-regular">{{ location.sub_title }}</p>
            </b-col>
        </b-row>
        <infinite-loading @infinite="getData">
            <div slot="no-more"><span  v-if="total > 20">No more items</span></div>
            <div slot="no-results">No items created</div>
        </infinite-loading>

        <div style="position: relative; z-index: 10">
            <quote-form :shown.sync="openQuote" :hide-desktop="true"></quote-form>
        </div>
    </b-container>
</template>

<script>
    import InfiniteLoading from "vue-infinite-loading";
    import { RepositoryFactory } from "../../api/RepositoryFactory";
    import QuoteForm from "../../components/QuoteForm";

    export default {
        components: {
            QuoteForm,
            InfiniteLoading
        },
        data() {
            return {
                openQuote: false,
                total: 0,
                page: 1,
                locations: [],
            }
        },
        created() {
            this.$root.$on('openQuote', () => {
                this.openQuote = !this.openQuote;
            })
        },
        methods: {
            getData($state) {
                RepositoryFactory.get('location').get({
                    params: {
                        page: this.page,
                    },
                }).then(({ data }) => {
                    this.total = data.locations.total;
                    data = data.locations.data;
                    if (data.length) {
                        this.page += 1;
                        this.locations.push(...data);
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
        height: 200px;
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