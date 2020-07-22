<template>
    <div class="position-relative" style="z-index: 980;margin: 0 -7px;">
        <div class="text-center mb-20">
            <img :src="location.city_emblem_path" alt="" title="" class="emblem" width="122px" height="122px"/>
        </div>
        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color jd-text-light weather-text-color jd-font-medium">Weather in <br> {{ location.city }}</h2>
        <h3 class="jd-font-light d-flex justify-content-lg-between justify-content-start">
            <span style="font-size: 93px;font-weight: 200;" class="jd-font-ultra-light weather-text-style">{{ location.weather }}°</span>
            <b-img :src="`/img/weather/${location.weather_icon}.svg`" class="contain-img style-weather" v-if="location.weather_icon"></b-img>
        </h3>

        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color jd-text-light weather-text-color">{{ location.city }} Stats</h2>
        <ul class="d-flex flex-column list-info">
            <li class="d-flex justify-content-between">
                <p>Population</p>
                <p>{{ location.population }}</p>
            </li>
            <li class="d-flex justify-content-between">
                <p>Average Age</p>
                <p>{{ location.average_age }}</p>
            </li>
            <li class="d-flex justify-content-between">
                <p>Median Income</p>
                <p>{{ location.median_income }}</p>
            </li>
            <li class="d-flex justify-content-between">
                <p>Median Home Value</p>
                <p>${{ location.median_home_value }}</p>
            </li>
            <li class="align-self-end">
                <a :href="location.wiki_link" target="_blank">Learn More on Wikipedia</a>
            </li>
        </ul>
        <h3 class="jd-text-18 jd-text-dark jd-font-medium">Palo Alto City Hall</h3>
        <section class="jd-text-18">
            <section class="d-flex align-items-center">
                <b-img src="/img/icons/globus.png" class="contain-img mr-3"></b-img>
                <a :href="location.website" target="_blank" class="text-link">{{ location.website }}</a>
            </section>
            <section class="d-flex align-items-center mt-3">
                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                <a :href="`tel:${location.city_phone}`" target="_blank" class="jd-text-dark">{{ location.city_phone }}</a>
            </section>
            <section class="d-flex align-items-center mt-3">
                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                <a :href="`tel:${location.address}`" target="_blank" class="jd-text-dark">{{ location.address }}</a>
            </section>
        </section>

<!--        <section class="jd-text-18">-->
<!--            <section>-->
<!--                <p class="mb-0">City of {{ location.city }}</p>-->
<!--                <section>-->
<!--                    <b-img src="/img/icons/globus.png" class="contain-img mr-3"></b-img>-->
<!--                    <a :href="location.website" target="_blank" class="text-link">{{ location.website }}</a>-->
<!--                </section>-->
<!--            </section>-->

<!--            <section class="mt-4">-->
<!--                <p class="mb-0">City Hall</p>-->
<!--                <section>-->
<!--                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>-->
<!--                    <a :href="`tel:${location.city_phone}`" target="_blank" class="jd-text-dark">{{ location.city_phone }}</a>-->
<!--                </section>-->
<!--            </section>-->

<!--            <section class="mt-4">-->
<!--                <p class="mb-0">Police Department,</p>-->
<!--                <p class="mb-0">{{ location.police_address }}</p>-->
<!--                <section>-->
<!--                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>-->
<!--                    <a :href="`tel:${location.police_phone}`" target="_blank" class="jd-text-dark">{{ location.police_phone }}</a>-->
<!--                </section>-->

<!--                <section class="mt-2">-->
<!--&lt;!&ndash;                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>&ndash;&gt;-->
<!--                    <a :href="`mailto:${location.police_email}`" target="_blank" class="text-link">{{ location.police_email }}</a>-->
<!--                </section>-->
<!--            </section>-->
<!--        </section>-->

<!--        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color mt-4 jd-text-light">Places to donate:</h2>-->

<!--        <section class="jd-text-18">-->
<!--            <p class="mb-0">{{ location.donate_address }}</p>-->
<!--            <section>-->
<!--                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>-->
<!--                <a :href="`tel:${location.donate_phone}`" target="_blank" class="jd-text-dark">{{ location.donate_phone }}</a>-->
<!--            </section>-->
<!--        </section>-->
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
    .weather-text-color {
        color: #8e8e8e;
        font-size: 22px;
    }

    .list-info {
        list-style: none;
        padding: 0;
        margin-bottom: 11px;
        li {
            border-bottom:1px solid #4a4a4a;
            padding: 3px 0;
            &:last-child {
                border: none;
                a {
                    color: #0091ff;
                    font-size: 14px;
                }
            }
            p {
                font-size: 18px;
                color: #4a4a4a;
                margin: 0;
            }
        }
    }

    .mb-20 {
        margin-bottom: 20px;
    }

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
        margin-left: -8px;
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