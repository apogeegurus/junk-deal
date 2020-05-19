<template>
    <div>
        <section class="text-center">
            <b-img src="/img/contact/banner.png" class="img-mobile"></b-img>
        </section>

        <section class="position-relative">
            <b-img src="/img/home/triangle-right.svg" class="triangle" data-aos="left-right"></b-img>

            <b-container class="my-5">
                <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile text-center">Contact Us</h1>
                <b-row class="mt-5">
                    <b-col md="12" lg="4" class="mb-lg-0 mb-5">
                        <div class="d-flex align-content-center align-items-center">
                            <b-img src="/img/contact/phone.png"></b-img>
                            <a :href="`tel:${SITE_DETAILS.phone}`"
                               class="ml-3 jd-text-18 jd-font-bold jd-text-light">{{ SITE_DETAILS.phone }}</a>
                        </div>

                        <div class="d-flex align-content-center align-items-center mt-2">
                            <b-img src="/img/contact/email.png"></b-img>
                            <a :href="`mailto:${SITE_DETAILS.email}`" class="ml-3 jd-text-18 jd-font-bold jd-text-light">{{ SITE_DETAILS.email }}</a>
                        </div>

                        <div class="d-flex align-content-center align-items-center mt-2">
                            <b-img src="/img/contact/location.png"></b-img>
                            <a href="tel:650-995-7500" class="ml-3 jd-text-18 jd-font-bold jd-text-light"> {{ SITE_DETAILS.location }}</a>
                        </div>
                    </b-col>
                    <b-col md="12" lg="6" offset-md="0" offset-lg="2">
                        <contact-form></contact-form>
                    </b-col>
                </b-row>
            </b-container>

            <quote-form :shown.sync="openQuote" :hide-desktop="true"></quote-form>
            <div class="map-container" @click="clickedMap = true" @mouseleave="clickedMap = false" :class="{ clicked : clickedMap }">
                <iframe width="100%" height="650" frameborder="0" style="margin-bottom:-6px"
                        :src="`https://www.google.com/maps/embed/v1/place?q=${SITE_DETAILS.location}&key=AIzaSyB2kXXO6fWPG_-L5IQXn96fx8qUg-_3GLk`"
                        allowfullscreen></iframe>
            </div>
        </section>
    </div>
</template>

<script>
    import ContactForm from "../components/ContactForm";
    import QuoteForm from "../components/QuoteForm";
    import { mapGetters } from "vuex";
    export default {
        components: {ContactForm, QuoteForm},
        data() {
            return {
                openQuote: false,
                clickedMap: false
            }
        },
        created() {
            this.$root.$on('openQuote',  () => {
                this.openQuote = true;
            })
        },
        computed: {
            ...mapGetters(['SITE_DETAILS'])
        },
        mounted() {
            this.$root.$emit('hideLoader');
        }
    }
</script>

<style scoped lang="scss">
    .img-mobile {
        width: 626px;
        object-fit: contain;
    }
    .triangle {
        position: absolute;
        left: 0;
        top: 13%;
        z-index: 0;
        width: 50%;
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

    @media screen and (max-width: 992px) {
        .img-mobile {
            width: 100%;
        }

        .triangle {
            width: 100%;
        }
    }
</style>