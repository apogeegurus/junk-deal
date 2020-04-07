<template>
    <div>
        <!--Slider Section Start-->
        <slider :without-hero="true" :images="images" v-if="images.length"></slider>
        <!--Slider Section End-->

        <b-container class="text-center mt-0 mt-lg-4">
            <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile">{{ service.title }}</h1>
            <h2 class="jd-text-22 jd-text-18__mobile jd-text-light jd-font-medium">{{ service.sub_title }}</h2>
            <p class="jd-text-18 mt-3 jd-font-medium jd-text-16__mobile mt-4" v-html="service.long_description"></p>
        </b-container>

        <!--Specialize Section Start-->
        <specialize :services="specialize" :classes="'mb-4 mb-lg-5'"></specialize>
        <!--Specialize Section End-->


        <!--Gallery Section Start-->
        <gallery :images="service.gallery"></gallery>
        <!--Gallery Section End-->

        <service-testimonials class="d-none d-lg-block"></service-testimonials>
        <testimonials class="d-block d-lg-none mt-5" silver-quote></testimonials>

        <!--Services Section Start-->
        <section class="position-relative mt-5 px-lg-100 overflow-hidden">
            <b-img src="/img/home/triangle-right.svg" class="triangle d-none d-lg-block" data-aos="left-right" data-aos-offset="100"></b-img>
            <section class="position-relative z-index-1">
                <b-container>
                    <h2 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile text-center">Our Additional Services Include but are <br> Not Limited To:</h2>
                </b-container>
                <services :services="FILTERED_SERVICES" class="mt-4"></services>
            </section>
            <b-img src="/img/home/triangle-left.svg" class="triangle--full__width traingle-bottom d-none d-lg-block" data-aos="right-left" data-aos-offset="100"></b-img>
        </section>
        <!--Services Section End-->

        <!--Video Section Start-->
        <jd-video :hide-triangle="true"></jd-video>
        <!--Video Section End-->
    </div>
</template>

<script>
    import Slider from "./_partials/Home/Slider";
    import Specialize from "./_partials/Home/Specialize";
    import JdVideo from "./_partials/Home/Video";
    import Gallery from "../components/Gallery";
    import Services from "./_partials/Home/Services";
    import ServiceTestimonials from "./_partials/Service/Testimonials"
    import Testimonials from "./_partials/Home/Testimonials"
    import { mapGetters } from "vuex";
    import { RepositoryFactory } from "../api/RepositoryFactory"

    export default {
        components: {Slider, Specialize, JdVideo, Gallery, Services, ServiceTestimonials, Testimonials},
        data() {
            return {
                slug: this.$route.params.slug,
                service: {},
                specialize: []
            }
        },
        beforeCreate() {
            this.$store.dispatch("GET_SERVICES_NAMES");
            this.$store.dispatch("GET_SLIDERS");
            this.$store.dispatch("GET_SPECIALIZE_DETAILS");
            this.$store.dispatch("GET_HOME_PAGE_INFO");
        },
        created() {
            RepositoryFactory.get('service').show(this.slug).then(( {data: { service }}) => {
                this.service = service;
                this.$root.$emit('hideLoader');
            });
        },
        computed: {
            ...mapGetters(['SERVICES', 'SLIDERS', 'SPECIALIZES']),
            FILTERED_SERVICES: function () {
                return this.SERVICES.filter(item => item.slug !== this.slug);
            },
            images: function () {
                return this.SLIDERS.map(item => item.path);
            }
        },
        watch: {
            'SPECIALIZES': function (newVal) {
                this.specialize = this.chunk(newVal, Math.ceil(newVal.length / 3));
            }
        }
    }
</script>

<style scoped lang="scss">
.triangle{
    position: absolute;
    left: 0;
    top:100px;
    z-index: 0;
    width: 100%;
    height: 400px;
}
.triangle--full__width {
    position: absolute;
    right: 0;
    bottom: 100px;
    z-index: 0;
    width: 100%;
    height: 400px;
}
.z-index-1{
    z-index: 1;
}

@media screen and (min-width: 992px){
    .px-lg-100{
        padding-top: 130px !important;
        padding-bottom: 130px !important;
    }
}
</style>