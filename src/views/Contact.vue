<template>
    <div>
        <section class="text-center">
            <b-img src="/img/contact/banner.jpg" class="img-mobile"></b-img>
        </section>

        <section class="position-relative">
            <b-img src="/img/home/triangle-right.svg" class="triangle" data-aos="left-right"></b-img>

            <b-container class="my-5">
                <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile text-center">Contact Us</h1>
                <b-row class="mt-5">
                    <b-col md="12" lg="4" class="mb-lg-0 mb-5">
                        <div class="d-flex align-content-center align-items-center">
                            <b-img src="/img/contact/phone.png"></b-img>
                            <a href="tel:650-995-7500"
                               class="ml-3 jd-text-18 jd-font-bold jd-text-light">650-995-7500</a>
                        </div>

                        <div class="d-flex align-content-center align-items-center mt-2">
                            <b-img src="/img/contact/email.png"></b-img>
                            <a href="mailto:info@junkdeal.com" class="ml-3 jd-text-18 jd-font-bold jd-text-light">info@junkdeal.com</a>
                        </div>

                        <div class="d-flex align-content-center align-items-center mt-2">
                            <b-img src="/img/contact/location.png"></b-img>
                            <a href="tel:650-995-7500" class="ml-3 jd-text-18 jd-font-bold jd-text-light"> 3641 Haven
                                Ave., Suite C, Menlo Park, CA 94025</a>
                        </div>
                    </b-col>
                    <b-col md="12" lg="6" offset-md="0" offset-lg="2">
                        <contact-form></contact-form>
                    </b-col>
                </b-row>
            </b-container>

            <quote-form :shown.sync="openQuote" :hide-desktop="true"></quote-form>
            <iframe width="100%" height="650" frameborder="0" style="margin-bottom:-6px" src="https://www.google.com/maps/embed/v1/place?q=3641%20Haven%20Ave.%2C%20Suite%20C%2C%20Menlo%20Park%2C%20CA%2094025&key=AIzaSyB2kXXO6fWPG_-L5IQXn96fx8qUg-_3GLk" allowfullscreen></iframe>
        </section>
    </div>
</template>

<script>
    import ContactForm from "../components/ContactForm";
    import QuoteForm from "../components/QuoteForm";

    export default {
        components: {ContactForm, QuoteForm},
        data() {
            return {
                openQuote: false
            }
        },
        created() {
            this.$root.$on('openQuote',  () => {
                this.openQuote = true;
            })
        }
    }
</script>

<style scoped lang="scss">
    .triangle {
        position: absolute;
        left: 0;
        top: 13%;
        z-index: 0;
        width: 50%;
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