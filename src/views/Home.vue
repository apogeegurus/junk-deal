<template>
    <div class="home-section">
        <slider :images="images" v-if="images.length"></slider>

        <b-container class="text-center mt-0 mt-lg-5">
            <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile">{{ HOME_PAGE.title }}</h1>
            <p class="jd-text-29 mt-3 jd-font-light jd-text-18__mobile text-uppercase" style="white-space: pre-wrap;">{{ HOME_PAGE.specialize_title }}</p>
        </b-container>

        <animation></animation>

        <!--Specialize Section Start-->
        <specialize :services="specialize" :classes="'mb-0 mb-lg-5'" :align-left="true"></specialize>
        <!--Specialize Section End-->

        <!--Banner Section Start-->
        <banner-right class="d-none d-lg-block" image="/img/home/banners/banner-1.jpg"></banner-right>
        <!--Banner Section End-->

        <!--Services Section Start-->
        <services :services="SERVICES" class="mt-1 mt-lg-2"></services>
        <!--Services Section End-->

        <!--Banner Section Start-->
        <banner-left class="d-none d-lg-block" image="/img/home/banners/banner-2.jpg"></banner-left>
        <!--Banner Section End-->

        <!--Works Section Start-->
        <works></works>
        <!--Works Section End-->

        <!--Testimonials Section Start-->
        <testimonials></testimonials>
        <!--Testimonials Section End-->

        <!--Video Section Start-->
        <jd-video></jd-video>
        <!--Video Section End-->
    </div>
</template>

<script>
    import BannerRight from "./_partials/Home/BannerRight";
    import BannerLeft from "./_partials/Home/BannerLeft";
    import Works from "./_partials/Home/Works";
    import Testimonials from "./_partials/Home/Testimonials";
    import JdVideo from "./_partials/Home/Video";
    import Services from "./_partials/Home/Services";
    import Specialize from "./_partials/Home/Specialize";
    import Slider from "./_partials/Home/Slider";
    import Animation from "./_partials/Home/Animation";
    import { mapGetters } from 'vuex';

    export default {
        components: { Specialize, Slider, BannerRight, BannerLeft, Works, Testimonials, JdVideo, Services, Animation },
        beforeCreate() {
          this.$store.dispatch("GET_SERVICES_NAMES");
          this.$store.dispatch("GET_HOME_PAGE_INFO");
        },
        data() {
            return {
                specialize: [
                    [
                        { label: 'Furniture Removal' },
                        { label: 'Office Clean Outs' },
                        { label: 'Appliance Removal' },
                        { label: 'House Clean Outs' },
                        { label: 'Construction Debris' },
                    ],
                    [
                        { label: 'Foreclosure Clean Outs' },
                        { label: 'Estate Clean Outs' },
                        { label: 'Property Clean Outs' },
                        { label: 'Water Heater Removal' },
                        { label: 'Junk Hauling Services' },
                    ],
                    [
                        { label: 'Garbage Removal' },
                        { label: 'E-Waste Removal' },
                        { label: 'TV Disposal & Recycle' },
                        { label: 'Trash Removal' },
                        { label: 'Refrigerator Disposal' },
                    ]
                ]
            }
        },
        methods: {
            hideLoader() {
                if(this.SERVICES.length && this.SLIDERS.length && Object.keys(this.HOME_PAGE).length) {
                    this.$root.$emit('hideLoader');
                }
            }
        },
        computed: {
            ...mapGetters(['SERVICES', "SLIDERS", "HOME_PAGE"]),
            images: function () {
                return this.SLIDERS.map(item => item.path);
            }
        },
        watch: {
            'SERVICES': function() {
                this.hideLoader()
            },
            'SLIDERS': function() {
                this.hideLoader()
            },
            'HOME_PAGE': function () {
                this.hideLoader()
            }
        }
    }
</script>