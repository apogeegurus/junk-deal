<template>
    <div>
        <slider :withoutHero="true" :images="sliderImages" v-if="sliderImages.length"
                classes="slider--location"></slider>

        <b-container class="p-0__mobile z-index-1000 position-relative mt-mobile-0">
            <b-row>
                <b-col cols="12" lg="9" class="text-center text-lg-left">
                    <h1 class="jd-text-36 jd-text-dark jd-text-23__mobile text-left px-4 p-lg-0">{{ location.title
                        }}</h1>
                    <h2 class="jd-text-dark jd-font-bold jd-text-36 jd-text-23__mobile text-left px-4 p-lg-0">{{
                        location.city }}</h2>
                    <h3 class="jd-font-medium jd-text-22 jd-text-18__mobile px-4 p-lg-0 my-4">{{ location.sub_title
                        }}</h3>

                    <p class="jd-text-dark jd-text-18 px-4 p-lg-0" v-html="location.description"></p>

                    <specialize :align-left="true" :services="specialize" classes="mb-4 mb-lg-0"></specialize>
                </b-col>
                <b-col cols="3" class="jd-text-dark b-l-1 d-none d-lg-block">
                    <weather-section :location="location"></weather-section>
                </b-col>
            </b-row>
        </b-container>

        <section class="d-flex flex-column">
            <section class="order-lg-2 order-2 mt-4 mt-lg-0">
                <h2 class="jd-text-25 jd-font-bold jd-text-dark d-block d-lg-none text-center">Additional Services</h2>
                <services :services="SERVICES"></services>
            </section>

            <testimonials class="mt-5 order-lg-0 order-1"></testimonials>

            <div class="map-container order-lg-0 order-0" @click="clickedMap = true" @mouseleave="clickedMap = false"
                 :class="{ clicked : clickedMap }">
                <iframe width="100%" height="250" frameborder="0" style="margin-bottom:-6px"
                        :src="`https://www.google.com/maps/embed/v1/place?q=${location.lat},${location.lon}&key=AIzaSyB2kXXO6fWPG_-L5IQXn96fx8qUg-_3GLk`"
                        allowfullscreen></iframe>
            </div>

            <b-container class="order-lg-0 order-3">
                <h2 class="jd-text-27 text-uppercase text-lg-center text-left jd-text-23__mobile mt-5 mb-5">
                    <span class="jd-text-dark jd-font-bold">Places Around</span>
                    <span class="jd-theme-color jd-font-bold"> {{ location.city }}</span>
                    <span class="brake-mobile text--light"> You can find useful</span>
                </h2>
            </b-container>

            <b-container class="order-lg-0 order-3">
                <b-row>
                    <b-col v-for="place in chunkedPlaces()[0]" cols="12" lg="3">
                        <section class="jd-text-18 jd-font-medium mb-5 mb-lg-0">
                            <section class="d-flex align-items-center">
                                <b-img src="/img/icons/globus.png" class="contain-img mr-3"></b-img>
                                <a :href="place.url" target="_blank" class="text-link">{{ place.name }}</a>
                            </section>
                            <section class="d-flex align-items-center mt-3">
                                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                                <a :href="`tel:${place.address}`" target="_blank" class="jd-text-dark">{{ place.address
                                    }}</a>
                            </section>
                            <section class="d-flex align-items-center mt-3">
                                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                                <a :href="`tel:${place.phone}`" target="_blank" class="jd-text-dark">{{ place.phone
                                    }}</a>
                            </section>
                        </section>
                    </b-col>
                </b-row>
            </b-container>

            <weather-section class="order-lg-0 order--1 d-block d-lg-none px-4 mt-0"
                             :location="location"></weather-section>

            <banner-right :only-image="true" :image="location.banner_first_path"
                          class="order-lg-0 order-2 overflow-hidden"></banner-right>

            <b-container class="d-none d-lg-block">
                <b-row>
                    <b-col v-for="place in chunkedPlaces()[1]">
                        <section class="jd-text-18 jd-font-medium">
                            <section class="d-flex align-items-center">
                                <b-img src="/img/icons/globus.png" class="contain-img mr-3"></b-img>
                                <a :href="place.url" target="_blank" class="text-link">{{ place.name }}</a>
                            </section>
                            <section class="d-flex align-items-center mt-3">
                                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                                <a :href="`tel:${place.address}`" target="_blank" class="jd-text-dark">{{ place.address
                                    }}</a>
                            </section>
                            <section class="d-flex align-items-center mt-3">
                                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                                <a :href="`tel:${place.phone}`" target="_blank" class="jd-text-dark">{{ place.phone
                                    }}</a>
                            </section>
                        </section>
                    </b-col>
                </b-row>
            </b-container>

            <section class="order-lg-0 order-4">
                <div class="headline jd-text-27 text-center my-5 text-uppercase">
                    <b-container>
                        <span class="jd-text-dark jd-font-bold">We clean </span>
                        <span class="jd-theme-color jd-font-bold">YOUR PLACE </span>
                        <span class="jd-text-dark jd-font-bold">AND SAVE </span>
                        <span class="text-white jd-font-bold">YOUR TIME </span> <br>
                        <span class="text-white jd-font-regular jd-text-20 opacity">SO HERE IS A COUPLE OF WAYS how TO PUT THIS TIME IN THE GOOD USE</span>
                    </b-container>
                </div>
            </section>

            <section class="order-lg-0 order-4">
                <b-container>
                    <h3 class="text-uppercase jd-text--22 light-headline jd-font-medium bottom-line-def-color mt--4">
                        What to eat in <span class="jd-theme-color">{{ location.city }}</span></h3>

                    <b-row>
                        <b-col cols="12" lg="4">
                            <!--                            <div class="" v-for="gallery in location.gallery">-->
                            <!--                                <img src="/" alt="" title="" />-->
                            <!--                            </div>-->
                        </b-col>

                        <b-col cols="12" lg="8" v-html="location.what_to_eat" style="line-height: 26px"></b-col>
                    </b-row>

                    <section class="d-none d-lg-block mb-5 mt-4">
                        <b-row>
                            <b-col v-for="yelp_place in yelpPlaces()[0]" class="yelp--item" >
                                <a :href="yelp_place.url" target="_blank" class="jd-text-dark">
                                    <h2 class="jd-font-bold">
                                        {{ yelp_place.name }}
                                    </h2>
                                    <div>
                                        <div>
                                            <img :src="yelp_place.img" alt="" title=""/>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <p>{{ yelp_place.address }}</p>
                                            <div class="d-flex">
                                                <img :src="`/img/yelp/regular_${yelp_place.rating}.png`" alt="" title=""
                                                     style="object-fit: contain;height: 20px;"/>
                                                <img src="/img/yelp/logo.png" alt="" title=""
                                                     style="object-fit: contain;height: 20px;width: 50px"/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </b-col>
                        </b-row>
                    </section>
                </b-container>
            </section>


            <banner-left :only-image="true" :image="location.banner_second_path"
                         class="mb-5 d-none d-lg-block"></banner-left>

            <section class="order-lg-0 order-5">
                <b-container>
                    <h3 class="text-uppercase jd-text--22 light-headline jd-font-medium bottom-line-def-color mt--4">
                        Where to go in <span class="jd-theme-color">{{ location.city }}</span></h3>

                    <b-row>
                        <b-col cols="12" lg="8" v-html="location.what_to_eat" style="line-height: 26px"></b-col>
                        <b-col cols="12" lg="4">
                            <!--                            <div class="" v-for="gallery in location.gallery">-->
                            <!--                                <img src="/" alt="" title="" />-->
                            <!--                            </div>-->
                        </b-col>
                    </b-row>

                    <section class="d-none d-lg-block mb-5 mt-4">
                        <b-row>
                            <b-col v-for="yelp_place in yelpPlaces()[1]" class="yelp--item">
                                <a :href="yelp_place.url" target="_blank" class="jd-text-dark">
                                    <h2 class="jd-font-bold">
                                        {{ yelp_place.name }}
                                    </h2>
                                    <div>
                                        <div>
                                            <img :src="yelp_place.img" alt="" title=""/>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <p>{{ yelp_place.address }}</p>
                                            <div class="d-flex">
                                                <img :src="`/img/yelp/regular_${yelp_place.rating}.png`" alt="" title=""
                                                     style="object-fit: contain;height: 20px;"/>
                                                <img src="/img/yelp/logo.png" alt="" title=""
                                                     style="object-fit: contain;height: 20px;width: 50px"/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </b-col>
                        </b-row>
                    </section>
                </b-container>
            </section>
        </section>
    </div>
</template>

<script>
    import Services from "./../_partials/Home/Services";
    import Gallery from "./../../components/Gallery";
    import Testimonials from "./../_partials/Home/Testimonials";
    import BannerRight from "./../_partials/Home/BannerRight";
    import BannerLeft from "./../_partials/Home/BannerLeft";
    import Slider from "./../_partials/Home/Slider";
    import Specialize from "./../_partials/Home/Specialize";
    import WeatherSection from "./../../components/weatherSection";
    import {RepositoryFactory} from "../../api/RepositoryFactory"
    import {mapGetters} from "vuex";

    export default {
        components: {Slider, Testimonials, Services, Gallery, BannerRight, BannerLeft, Specialize, WeatherSection},
        data() {
            return {
                slug: this.$route.params.slug,
                location: {},
                specialize: [],
                clickedMap: false
            }
        },
        beforeCreate() {
            this.$store.dispatch("GET_SERVICES_NAMES");
            this.$store.dispatch("GET_SPECIALIZE_DETAILS");
            this.$store.dispatch("GET_HOME_PAGE_INFO");
        },
        created() {
            RepositoryFactory.get('location').show(this.slug).then(({data: {location}}) => {
                this.location = location;
                this.$root.$emit('hideLoader');
            });
        },
        methods: {
            chunkedPlaces: function () {
                if (!this.location.places || !this.location.places.length) return [[], []];

                const places = JSON.parse(JSON.stringify(this.location.places));
                return [
                    places.slice(0, 3),
                    places.slice(3, 6)
                ]
            },
            yelpPlaces() {
                if (!this.location.yelp_places || !this.location.yelp_places.length) return [[], []];

                const places = JSON.parse(JSON.stringify(this.location.yelp_places));
                return [
                    places.slice(0, 3),
                    places.slice(3, 6)
                ]
            }
        },
        computed: {
            ...mapGetters(['SERVICES', "SPECIALIZES"]),
            sliderImages: function () {
                if (!this.location.slider || !this.location.slider.length)
                    return [];

                return this.location.slider.map(item => item.path);
            }
        },
        watch: {
            'SPECIALIZES': function (newVal) {
                this.specialize = this.chunk(newVal, Math.ceil(newVal.length / 2));
            }
        }
    }
</script>

<style lang="scss">
    @media screen and (max-width: 992px) {
        .slider--location {

            height: 45vh !important;

            .trinagle-bottom {
                height: 50px !important;
            }
        }

        .mt-mobile-0 {
            margin-top: 10px !important;
        }

        .brake-mobile {
            display: block;
        }
    }


</style>

<style scoped lang="scss">
    @media screen and (max-width: 992px) {
        .p-0__mobile {
            padding: 0;
        }
    }

    .opacity {
        color: #dedede;
    }

    .light-headline {
        color: #8e8e8e;
    }


    .order--1 {
        order: -1;
    }

    .yelp--item {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        h2 {
            text-align: center;
            color: #4a4a4a;
            font-size: 18px;
        }

        div {
            display: flex;

            img {
                width: 100px;
                height: 80px;
                object-fit: cover;
                border-radius: 5px;
                margin-right: 20px;
            }
        }
    }

    .headline {
        background: #a0a0a0;
        padding: 20px 0;
        line-height: 32px;
        letter-spacing: 1.1px;
    }

    .b-l-1 {
        border-left: 2px solid #959595;
    }

    .map-container {
        width: 100%;
    }

    .map-container iframe {
        width: 100%;
        display: block;
        pointer-events: none;
        position: relative; /* IE needs a position other than static */
    }

    .map-container.clicked iframe {
        pointer-events: auto;
    }

    .mt-50px {
        margin-top: 50px;
    }

    .text--light {
        color: #a0a0a0;
        font-weight: 100;
    }

    .text-link {
        color: #0091ff;
    }
</style>