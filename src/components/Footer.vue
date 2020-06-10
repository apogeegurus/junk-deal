<template>
    <footer>
        <section id="what-we-do" class="p-4 footer--top">
            <b-container>
                <b-row>
                    <b-col sm="12" lg="4">
                        <h2 class="jd-text-22 jd-title text-white">GET IN TOUCH</h2>

                        <p class="jd-text-18 mb-0 mt-3">
                            <a :href="`tel:${SITE_DETAILS.phone_footer}`" class="d-block text-white">{{ SITE_DETAILS.phone_footer }}</a>
                            <a :href="`mailto:${SITE_DETAILS.email}`" class="d-block text-white">{{ SITE_DETAILS.email }}</a>
                        </p>
                        <p class="jd-text-18 text-white">
                            OFFICE HOURS
                            <span class="d-block">{{ SITE_DETAILS.office_hours }}</span>
                        </p>
                        <p class="jd-text-18 text-white pr-5">
                            HEADQUARTERS
                            <a href="#"  class="d-block text-white">{{ SITE_DETAILS.location }}</a>
                        </p>

                        <div class="social-icons d-flex justify-content-start pr-0 pr-lg-5 d-block d-lg-none">
                            <a v-b-tooltip.hover title="Facebook" href="" class="text-white mr-4" v-if="SITE_DETAILS.facebook" :href="SITE_DETAILS.facebook" target="_blank">
                                <b-img src="/img/social/fb.svg" width="60px"></b-img>
                            </a>
                            <a v-b-tooltip.hover title="Youtube" href="" class="text-white mr-4" v-if="SITE_DETAILS.youtube" :href="SITE_DETAILS.youtube" target="_blank">
                                <b-img src="/img/social/youtube.svg" width="60px"></b-img>
                            </a>
                            <a v-b-tooltip.hover title="Yelp" href="" class="text-white mr-4" v-if="SITE_DETAILS.yelp" :href="SITE_DETAILS.yelp" target="_blank">
                                <b-img src="/img/social/yelp.svg" width="60px"></b-img>
                            </a>
                            <a v-b-tooltip.hover title="BBB" href="" class="text-white mr-4" v-if="SITE_DETAILS.bbb" :href="SITE_DETAILS.bbb" target="_blank">
                                <b-img src="/img/social/bbb.svg" width="60px"></b-img>
                            </a>
                        </div>
                    </b-col>
                    <b-col cols="8" class="d-none d-lg-block">
                        <h2 class="jd-text-22 jd-title text-white d-block">What We Do:</h2>

                        <b-row>
                            <b-col class="mt-3">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            House cleanouts
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Junk Hauling services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Garbage Removal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Hot Tub Removal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Washer & Dryer removal
                                        </a>
                                    </li>
                                </ul>
                            </b-col>
                            <b-col class="mt-3">
                                <ul class="list-unstyled">
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Furniture Removal
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Construction Debris
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Foreclosure cleanout
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Estate cleanout services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-white py-1 d-block jd-text-18 d-flex align-content-center">
                                             <img src="/img/icons/arrow_left_white.svg"  alt="" width="18px" class="mr-2"/>
                                            Property cleanout services
                                        </a>
                                    </li>
                                </ul>
                            </b-col>
                        </b-row>

                        <div class="social-icons d-flex justify-content-start pr-0 pr-lg-5">
                            <a v-b-tooltip.hover title="Facebook" class="text-white mr-4" v-if="SITE_DETAILS.facebook" :href="SITE_DETAILS.facebook" target="_blank">
                                <b-img src="/img/social/fb.svg" width="60px"></b-img>
                            </a>
                            <a v-b-tooltip.hover title="Youtube" class="text-white mr-4" v-if="SITE_DETAILS.youtube" :href="SITE_DETAILS.youtube" target="_blank">
                                <b-img src="/img/social/youtube.svg" width="60px"></b-img>
                            </a>
                            <a v-b-tooltip.hover title="Yelp" class="text-white mr-4" v-if="SITE_DETAILS.yelp" :href="SITE_DETAILS.yelp" target="_blank">
                                <b-img src="/img/social/yelp.svg" width="60px"></b-img>
                            </a>
                            <a v-b-tooltip.hover title="BBB" class="text-white mr-4" v-if="SITE_DETAILS.bbb" :href="SITE_DETAILS.bbb" target="_blank">
                                <b-img src="/img/social/bbb.svg" width="60px"></b-img>
                            </a>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </section>
        <section class="footer--bottom p-4">
            <b-container>
                <b-row>
                    <b-col cols="4" class="pr-5 d-none d-lg-block">
                        <h2 class="jd-title jd-text-22">About Us</h2>

                        <section class="mt-3">
                            <p class="jd-text-18">
                                {{ SITE_DETAILS.about_footer }}

                                <a href="" class="mt-3 d-block text-white">{{ SITE_DETAILS.location }}</a>

                                <a :href="`mailto:${ SITE_DETAILS.email }`" class="mt-3 d-block text-white">{{ SITE_DETAILS.email }}</a>

                                <a href="tel:6509957500" class="mt-3 d-block text-white">{{ SITE_DETAILS.phone_footer }}</a>
                            </p>
                        </section>
                    </b-col>
                    <b-col lg="8" sm="12">
                        <b-row>
                            <b-col class="pr-5">
                                <h2 class="jd-title jd-text-22">Services</h2>
                                <router-link :to="{name: 'services', params: { slug: SERVICE.slug }}" class="jd-text-18 mb-0 d-block text-white" v-for="(SERVICE, key) in SERVICES" :key="key">{{ SERVICE.title }}</router-link>

                                <h2 class="jd-title mt-3 jd-text-22">Hours Of Operation</h2>
                                <p class="jd-text-18 mt-3">
                                    {{ SITE_DETAILS.office_hours_footer }}
                                </p>

                                <section class="mb-3 d-block d-lg-none">
                                    <b-img src="/img/footer/payments-mobile.svg" class="w-100"></b-img>
                                </section>

                                <section class="d-none d-lg-block">
                                    <h2 class="jd-title mt-3 jd-text-22">SERVICE LOCATIONS</h2>
                                    <section class="footer-areas mt-3">
                                        <router-link :to="{ name: 'location', params: { slug: item.slug }}" v-for="(item, key) in LOCATIONS" :key="key">{{ item.city }}</router-link>
                                    </section>
                                </section>
                            </b-col>
                            <b-col class="d-none d-lg-block">
                                <section class="mb-3">
                                    <b-img src="/img/footer/payments-desktop.svg"></b-img>
                                </section>

                                <h2 class="jd-title mt-3 jd-text-22 without-border" id="contact">Contact Us</h2>
                                <contact-form></contact-form>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </section>
    </footer>
</template>

<script>
    import { mapGetters } from 'vuex';
    import ContactForm from "./ContactForm";
    export default {
        components: { ContactForm },
        beforeCreate() {
            this.$store.dispatch("GET_LOCATION_NAMES");
            this.$store.dispatch("GET_SERVICES_NAMES");
        },
        computed: {
            ...mapGetters(['SITE_DETAILS', 'LOCATIONS', 'SERVICES'])
        }
    }
</script>

<style lang="scss">
    .social-icons a{
        transition: .3s ease;
        &:hover{
            opacity: 0.8;
        }
    }
</style>