<template>
    <div class="position-relative" style="z-index: 980">
        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color jd-text-light">Weather in <br> {{ location.city }}</h2>
        <h3 class="jd-font-light d-flex justify-content-lg-between justify-content-start">
            <span style="font-size: 93px;font-weight: 200;" class="jd-font-ultra-light weather-text-style">{{ location.weather }}°</span>
            <b-img :src="`/img/weather/${location.weather_icon}.svg`" class="contain-img style-weather" v-if="location.weather_icon"></b-img>
        </h3>

        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color jd-text-light">Resources:</h2>
        <section class="jd-text-18">
            <section>
                <p class="mb-0">City of {{ location.city }}</p>
                <section>
                    <b-img src="/img/icons/globus.png" class="contain-img mr-3"></b-img>
                    <a :href="location.website" target="_blank" class="text-link">{{ location.website }}</a>
                </section>
            </section>

            <section class="mt-4">
                <p class="mb-0">City Hall</p>
                <section>
                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                    <a :href="`tel:${location.city_phone}`" target="_blank" class="jd-text-dark">{{ location.city_phone }}</a>
                </section>
            </section>

            <section class="mt-4">
                <p class="mb-0">Police Department,</p>
                <p class="mb-0">{{ location.police_address }}</p>
                <section>
                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                    <a :href="`tel:${location.police_phone}`" target="_blank" class="jd-text-dark">{{ location.police_phone }}</a>
                </section>

                <section class="mt-2">
                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                    <a :href="`mailto:${location.police_email}`" target="_blank" class="text-link">{{ location.police_email }}</a>
                </section>
            </section>
        </section>

        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color mt-4 jd-text-light">Places to donate:</h2>

        <section class="jd-text-18">
            <p class="mb-0">{{ location.donate_address }}</p>
            <section>
                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                <a :href="`tel:${location.donate_phone}`" target="_blank" class="jd-text-dark">{{ location.donate_phone }}</a>
            </section>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            location: {
                type: Object,
                default: function () {
                    return {}
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .style-weather{
        height: 90px;
        margin-left: 15px
    }
    .contain-img{
        object-fit: contain;
    }
    .text-link{
        color: #0091ff;
    }
    .z-index-1000{
        z-index: 989;
    }
    .bottom-line-def-color:after{
        border-radius: 0 150px 150px 0;
        margin-left: -15px;
        margin-top: 10px;
        @media screen and (max-width:992px){
            margin-left: 0;
            border-radius:150px;
        }
    }
    .weather-text-style {
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: left;
        color: #4a4a4a;
    }
</style>