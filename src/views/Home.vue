<template>
    <div class="home-section">
        <slider :images="images" v-if="images.length" classes="home--slider"></slider>

        <b-container class="text-center mt-0 mt-lg-5">
            <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile">{{ HOME_PAGE.title }}</h1>
            <p class="jd-text-29 mt-3 jd-font-light jd-text-18__mobile text-uppercase jd-specialize-title"
               style="white-space: pre-wrap;">{{ HOME_PAGE.specialize_title }}</p>
        </b-container>

        <animation></animation>

        <!--Specialize Section Start-->
        <specialize :services="specialize" :classes="'mb-0 mb-lg-5'" :is-home="true"></specialize>
        <!--Specialize Section End-->

        <!--Banner Section Start-->
        <banner-right class="d-none d-lg-block" :image="HOME_PAGE.banner_first_path"></banner-right>
        <!--Banner Section End-->

        <!--Services Section Start-->
        <services :services="SERVICES" class="mt-1 mt-lg-2"></services>
        <!--Services Section End-->

        <!--Banner Section Start-->
        <banner-left class="d-none d-lg-block" :image="HOME_PAGE.banner_second_path"></banner-left>
        <!--Banner Section End-->

        <!--Works Section Start-->
<!--        <works></works>-->
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
    import {mapGetters} from 'vuex';

    export default {
        components: {Specialize, Slider, BannerRight, BannerLeft, Works, Testimonials, JdVideo, Services, Animation},
        beforeCreate() {
            this.$store.dispatch("GET_SERVICES_NAMES");
            this.$store.dispatch("GET_HOME_PAGE_INFO");
            this.$store.dispatch("GET_SPECIALIZE_DETAILS");
        },
        data() {
            return {
                specialize: []
            }
        },
        methods: {
            hideLoader() {
                if (this.SERVICES.length && this.SLIDERS.length && Object.keys(this.HOME_PAGE).length && this.SPECIALIZES.length) {
                    this.$root.$emit('hideLoader');
                }
            }
        },
        computed: {
            ...mapGetters(['SERVICES', "SLIDERS", "HOME_PAGE", "SPECIALIZES"]),
            images: function () {
                return this.SLIDERS.map(item => item.path);
            }
        },
        watch: {
            'SERVICES': function () {
                this.hideLoader()
            },
            'SLIDERS': function () {
                this.hideLoader()
            },
            'HOME_PAGE': function () {
                this.hideLoader()
            },
            'SPECIALIZES': function (newVal) {
                this.specialize = this.chunk(newVal, Math.ceil(newVal.length / 3));
                this.hideLoader()
            }
        }
    }
</script>

<style lang="scss">
    @media screen and (max-width: 992px) {
        .home--slider {
            height: 45vh !important;

            .trinagle-bottom {
                height: 50px !important;
            }
        }

        .mt-mobile-0 {
            margin-top: 10px !important;
        }
    }
</style>


<style scoped lang="scss">
    .jd-specialize-title {
        font-size: 29px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.03;
        letter-spacing: 1.74px;
        text-align: center;
        color: #959595;
    }
</style>