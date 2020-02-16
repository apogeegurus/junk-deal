<template>
    <div>
        <slider :withoutHero="true" :images="sliderImages" v-if="sliderImages.length"></slider>

        <b-container class="p-0__mobile z-index-1000 position-relative mt-50px">
            <b-row>
                <b-col cols="12" lg="9" class="text-center text-lg-left">
                    <h1 class="jd-text-36 jd-text-dark jd-text-23__mobile text-left px-4 p-lg-0">{{ location.title }}</h1>
                    <h2 class="jd-text-dark jd-font-bold jd-text-36 jd-text-23__mobile text-left px-4 p-lg-0">{{ location.city }}</h2>
                    <h3 class="jd-font-medium jd-text-22 jd-text-18__mobile px-4 p-lg-0 my-4">{{ location.sub_title }}</h3>

                    <p class="jd-text-dark jd-text-18 px-4 p-lg-0" v-html="location.description"></p>

                    <specialize :align-left="true" :services="specialize" classes="mb-4 mb-lg-0"></specialize>
                </b-col>
                <b-col cols="3" class="jd-text-dark b-l-1 d-none d-lg-block">
                    <weather-section :location="location"></weather-section>
                </b-col>
            </b-row>
        </b-container>

        <section class="d-flex flex-column">
            <section class="order-lg-0 order-2 mt-4 mt-lg-0">
                <h2 class="jd-text-25 jd-font-bold jd-text-dark d-block d-lg-none text-center">Our Services Include but are Not Limited To:</h2>
                <services :services="SERVICES"></services>
            </section>

            <div class="map-container order-lg-0 order-0" @click="clickedMap = true" @mouseleave="clickedMap = false" :class="{ clicked : clickedMap }">
                <iframe width="100%" height="250" frameborder="0" style="margin-bottom:-6px"
                        :src="`https://www.google.com/maps/embed/v1/place?q=${location.lat},${location.lon}&key=AIzaSyB2kXXO6fWPG_-L5IQXn96fx8qUg-_3GLk`"
                        allowfullscreen></iframe>
            </div>

            <gallery class="mt-5 order-lg-0 order-1" :images="location.gallery"></gallery>

            <weather-section class="order-lg-0 order-4 d-block d-lg-none px-4 mt-0" :location="location"></weather-section>
            <testimonials class="mt-5 order-lg-0 order-5"></testimonials>

            <banner-right :only-image="true" :image="location.banner_first_path" class="order-lg-0 order-3 overflow-hidden"></banner-right>
            <b-container class="order-lg-0 order-6">
                <h2 class="jd-text-27 text-uppercase text-lg-center text-left jd-text-23__mobile">
                    <span class="jd-text-dark jd-font-bold">Facts about</span>
                    <br class="d-block d-lg-none">
                    <span class="jd-theme-color jd-font-bold"> {{ location.city }}</span> You probably didn’t know
                </h2>

                <b-row class="mt-5 mb-5">
                    <b-col cols="12" lg="4" class="jd-font-medium jd-text-18 jd-text-dark" v-html="location.facts_left"></b-col>
                    <b-col cols="12" lg="7" offset="0" offset-lg="1" class="jd-font-medium jd-text-18 jd-text-light d-none d-lg-block" v-html="location.facts_right"></b-col>
                </b-row>
            </b-container>
            <banner-left :only-image="true" :image="location.banner_second_path" class="mb-5 d-none d-lg-block"></banner-left>
        </section>
    </div>
</template>

<script>
    import Services from "./_partials/Home/Services";
    import Gallery from "../components/Gallery";
    import Testimonials from "./_partials/Home/Testimonials";
    import BannerRight from "./_partials/Home/BannerRight";
    import BannerLeft from "./_partials/Home/BannerLeft";
    import Slider from "./_partials/Home/Slider";
    import Specialize from "./_partials/Home/Specialize";
    import WeatherSection from "../components/weatherSection";
    import { RepositoryFactory } from "../api/RepositoryFactory"
    import { mapGetters } from "vuex";

    export default {
        components: {Slider, Testimonials, Services, Gallery, BannerRight, BannerLeft, Specialize, WeatherSection},
        data() {
            return {
                slug: this.$route.params.slug,
                location: {},
                specialize: [
                    [
                        { label: 'Furniture Removal' },
                        { label: 'Office Clean Outs' },
                        { label: 'Appliance Removal' },
                        { label: 'House Clean Outs' },
                        { label: 'Construction Debris' },
                        { label: 'Foreclosure Clean Outs' },
                        { label: 'Estate Clean Outs' },
                        { label: 'Property Clean Outs' },
                    ],
                    [
                        { label: 'Garbage Removal' },
                        { label: 'E-Waste Removal' },
                        { label: 'TV Disposal & Recycle' },
                        { label: 'Trash Removal' },
                        { label: 'Refrigerator Disposal' },
                        { label: 'Water Heater Removal' },
                        { label: 'Junk Hauling Services' },
                        { label: 'Junk Hauling Services' },
                    ]
                ],
                clickedMap: false
            }
        },
        beforeCreate() {
            this.$store.dispatch("GET_SERVICES_NAMES");
        },
        created() {
            RepositoryFactory.get('location').show(this.slug).then(( {data: { location }}) => {
                this.location = location;
                this.$root.$emit('hideLoader');
            });
        },
        computed: {
            ...mapGetters(['SERVICES']),
            sliderImages: function () {
                if(!this.location.slider || !this.location.slider.length)
                    return [];

                return this.location.slider.map(item => item.path);
            }
        },
    }
</script>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
    .p-0__mobile{
        padding: 0;
    }
}
.b-l-1{
    border-left: 2px solid #959595;
}
.map-container {
    width: 100%;
}
.map-container iframe{
    width: 100%;
    display: block;
    pointer-events: none;
    position: relative; /* IE needs a position other than static */
}
.map-container.clicked iframe{
    pointer-events: auto;
}
.mt-50px{
    margin-top: 50px;
}
</style>