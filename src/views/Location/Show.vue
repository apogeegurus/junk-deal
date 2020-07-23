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
                <h2 class="jd-text-27 text-uppercase text-center text-left jd-text-23__mobile mb-5 jd-title-style mt-0 mt-lg-5">
                    <span class="jd-text-dark jd-font-bold">Places Around</span>
                    <span class="jd-theme-color jd-font-bold"> <br class="d-block d-lg-none">{{ location.city }}</span>
                    <span class="brake-mobile text--light"> You can find useful</span>
                </h2>
            </b-container>

            <b-container class="order-lg-0 order-3">
                <b-row>
                    <b-col v-for="(place, key) in chunkedPlaces()[0]" cols="12" lg="4" :key="`place-0-${key}`">
                        <section class="jd-text-18 jd-font-medium place-item">
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
                    <b-col v-for="(place, key) in chunkedPlaces()[1]" :key="`place-1-${key}`">
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

            <section class="order-lg-0 order-4 mb-4 mb-lg-0">
                <b-container>
                    <h3 class="text-uppercase jd-text--22 light-headline jd-font-medium bottom-line-def-color mt--4">
                        What to eat in <span class="jd-theme-color">{{ location.city }}</span></h3>

                    <b-row>
                        <b-col cols="12" lg="4" class="order-4 order-lg-0 my-3 my-lg-0">
                            <section class="d-flex flex-wrap">
                                <div v-for="(gallery, key) in galleryChunked()[0]" :key="`gallery-0-${key}`"
                                     @click="!gallery.hex_code ? index = gallery.galleryIndex : false"
                                     class="gallery-container">
                                    <div v-if="gallery.hex_code" class="gallery hex"
                                         :style="{'background-color': gallery.hex_code}"></div>
                                    <img :src="gallery.path" alt="" title="" v-else class="gallery img"/>
                                </div>
                            </section>
                        </b-col>

                        <b-col cols="12" lg="8" v-html="location.what_to_eat" class="text-box"></b-col>
                    </b-row>

                    <section class="d-none d-lg-block mb-5 mt-4">
                        <b-container class="position-relative">
                            <carousel :dots="false" :nav="false" :items="3" :navSpeed="300" v-if="yelpPlaces()[0].length">
                                <template slot="prev"><div class="prev-yelp"></div></template>
                                <template slot="next"><div class="next-yelp"></div></template>
                                <div v-for="(yelp_place, key) in yelpPlaces()[0]" class="yelp--item"
                                     :key="`yelp-0-${key}`">
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
                                </div>
                            </carousel>
                        </b-container>
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
                        <b-col cols="12" lg="8" v-html="location.where_to_go" class="text-box"></b-col>
                        <b-col cols="12" lg="4" class="order-4 order-lg-0 my-3 my-lg-0 mb-5 mb-lg-0">
                            <section class="d-flex flex-wrap">
                                <div v-for="(gallery, key) in galleryChunked()[1]" :key="`gallery-1-${key}`"
                                     @click="!gallery.hex_code ? index = gallery.galleryIndex : false"
                                     class="gallery-container">
                                    <div v-if="gallery.hex_code" class="gallery hex"
                                         :style="{'background-color': gallery.hex_code}"></div>
                                    <img :src="gallery.path" alt="" title="" v-else class="gallery img"/>
                                </div>
                            </section>
                        </b-col>
                    </b-row>

                    <section class="d-none d-lg-block mb-5 mt-4">
                        <b-container class="position-relative">
                            <carousel :dots="false" :nav="false" :items="3" :navSpeed="300" v-if="yelpPlaces()[1].length">
                                <template slot="prev"><div class="prev-yelp"></div></template>
                                <template slot="next"><div class="next-yelp"></div></template>
                                <div v-for="(yelp_place, key) in yelpPlaces()[0]" class="yelp--item"
                                     :key="`yelp-0-${key}`">
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
                                </div>
                            </carousel>
                        </b-container>
                    </section>
                </b-container>
            </section>
        </section>

        <gallery :images="filteredGallery" :index="index" @close="index = null">
            <template v-slot:next>
                <b-img src="/img/icons/arrow_right.svg"></b-img>
            </template>

            <template v-slot:close>
                <b-img src="/img/icons/GalleryClose.svg"></b-img>
            </template>

            <template v-slot:prev>
                <b-img src="/img/icons/arrow_left.svg"></b-img>
            </template>
        </gallery>
    </div>
</template>

<script>
    import Services from "./../_partials/Home/Services";
    import Testimonials from "./../_partials/Home/Testimonials";
    import BannerRight from "./../_partials/Home/BannerRight";
    import BannerLeft from "./../_partials/Home/BannerLeft";
    import Slider from "./../_partials/Home/Slider";
    import Specialize from "./../_partials/Home/Specialize";
    import WeatherSection from "./../../components/weatherSection";
    import {RepositoryFactory} from "../../api/RepositoryFactory"
    import {mapGetters} from "vuex";
    import VueGallery from "vue-gallery";
    import carousel from 'vue-owl-carousel'

    export default {
        components: {
            Slider,
            Testimonials,
            Services,
            BannerRight,
            BannerLeft,
            Specialize,
            WeatherSection,
            'gallery': VueGallery,
            carousel
        },
        data() {
            return {
                slug: this.$route.params.slug,
                location: {},
                specialize: [],
                clickedMap: false,
                index: null
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

            window.addEventListener("resize", () => {
                this.galleryHeight();
            })
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
                    places.slice(0, 5),
                    places.slice(5, 10)
                ]
            },
            galleryChunked() {
                if (!this.location.gallery || !this.location.gallery.length) return [[], []];

                let galleries = JSON.parse(JSON.stringify(this.location.gallery));
                let index = 0;
                galleries.map((gallery) => {
                    gallery['galleryIndex'] = index;
                    if(!gallery.hex_code) index++;
                })
                return [
                    galleries.slice(0, 9),
                    galleries.slice(9, 18)
                ]
            },
            galleryHeight() {
                let item = document.querySelector(".gallery");
                if (item !== null) {
                    let items = document.querySelectorAll(".gallery")

                    for (let i = 0; i < items.length; i++) {
                        items[i].style.height = `${item.clientWidth}px`
                    }
                }
            }
        },
        updated() {
            this.galleryHeight();
        },
        computed: {
            ...mapGetters(['SERVICES', "SPECIALIZES"]),
            sliderImages: function () {
                if (!this.location.slider || !this.location.slider.length)
                    return [];

                return this.location.slider.map(item => item.path);
            },
            filteredGallery: function () {
                if(!this.location.gallery) return [];
                return this.location.gallery.filter((item) => !item.hex_code).map((item) => item.path);
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

    .jd-title-style {
        font-size: 27px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.37;
        letter-spacing: normal;
        text-align: center;
        color: #a0a0a0;
    }

    .place-item {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        text-align: left;
        color: #4a4a4a;
        &:after {
            content: "";
            width: 100px;
            display: none;
            margin-top: 20px;
            margin-bottom: 20px;
            height: 5px;
            border-radius: 150px;
            background-color: rgb(239, 78, 35);
            @media screen and (max-width:991px){
                display: block;
            }
        }
    }

    .gallery-container {
        flex: 1;
        flex-basis: 33.333%;

        .gallery {
            height: 88px;
            width: 100%;

            &.img {
                object-fit: cover;
            }
        }
    }

</style>

<style scoped lang="scss">
    /deep/.owl-carousel .owl-stage-outer {
        overflow: hidden !important;
    }

    /deep/.owl-carousel .owl-stage {
        display: flex;
    }

    /deep/.owl-carousel .owl-item  > div  {
        width: auto;
        height: 100%;
    }

    /deep/.next-yelp {
        background: url("/img/icons/arrow_right.svg") no-repeat;
        width: 20px;
        height: 20px;
        position: absolute;
        right: -15px;
        top: 55%;
        cursor: pointer;
    }

    /deep/.prev-yelp {
        background: url("/img/icons/arrow_left.svg") no-repeat;
        width: 20px;
        height: 20px;
        position: absolute;
        left: -15px;
        top: 55%;
        cursor: pointer;
    }

    @media screen and (max-width: 992px) {
        .p-0__mobile {
            padding: 0;
        }
    }

    .opacity {
        color: #dedede;
    }

    .light-headline {
        font-size: 22px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
        color: #8e8e8e;
    }

    .text-box {
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        text-align: left;
        color: #4a4a4a;
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
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.35;
        letter-spacing: normal;
        text-align: center;
        color: #dedede;

        span:nth-child(1) {
            font-size: 27px;
            font-weight: bold;
            color: #4a4a4a;
        }

        span:nth-child(2) {
            font-size: 27px;
            font-weight: bold;
            color: #ef4e23;
        }

        span:nth-child(3) {
            font-size: 27px;
            font-weight: bold;
            color: #4a4a4a;
        }

        span:nth-child(4) {
            font-size: 27px;
            font-weight: bold;
            color: #ffffff;
        }

        span:nth-child(6) {
            color: #ffffff;
            opacity: 0.8;
        }
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


<style scoped lang="scss">
    /deep/.h-200px{
        height: 166px;
        object-fit: cover;
    }
    /deep/.blueimp-gallery{
        background: rgba(255,255,255,0.1);
        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            backdrop-filter: blur(27px);
            filter: blur(27px);
            background-image: -webkit-gradient(linear, left top, left bottom, from(#444549), to(rgba(255, 255, 255, 0.5)));
            @-moz-document url-prefix() {
                filter: blur(27px);
                background-image: -webkit-gradient(linear, left top, left bottom, from(#67686c), to(rgba(255, 255, 255, 0.5)));
            }
        }
    }

    /deep/#blueimp-gallery {
        a.close {
            display: block;
            padding: 0;
            background: #fff;
            border-radius: 50%;
            border: 1px solid #EF4E23;
            margin: 5px 0;
            opacity: 0.6;
            transition: 0.3s ease;
            text-align: center;
            &:hover{
                opacity: 1;
            }
            img {
                width: 40px;
                height: 40px;
                transform: scale(1.08) translateX(-0.1px);
            }
        }
        a.next, a.prev{
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            border-color: #EF4E23;
            background: #fff;
            img{
                width: 20px;
                height: 20px;
            }
        }
    }
</style>