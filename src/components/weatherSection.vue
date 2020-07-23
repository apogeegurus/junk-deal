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
            <li class="d-flex justify-content-between border-bottom-0">
                <p>Median Home Value</p>
                <p>${{ location.median_home_value }}</p>
            </li>
            <li class="align-self-end">
                <a :href="location.wiki_link" target="_blank">
                    Learn More on Wikipedia
                </a>
                <img src="/img/icons/arrow_right_blue.svg" alt="" title="" />
            </li>
        </ul>
        <h3 class="jd-text-18 jd-text-dark jd-font-medium jd-text--city">{{ location.city }} City Hall</h3>
        <section class="jd-text-18 text-styles">
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
        font-size: 22px;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
        color: #8e8e8e;
    }

    .text-styles {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        text-align: left;
        color: #4a4a4a;
    }

    .jd-text--city {
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: normal;
        text-align: left;
        color: #4a4a4a;
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
                display: flex;
                align-items: center;
                a {
                    font-size: 14px;
                    font-weight: normal;
                    font-stretch: normal;
                    font-style: normal;
                    line-height: 1.43;
                    letter-spacing: normal;
                    text-align: right;
                    color: #0091ff;
                }

                img {
                    width: 12px;
                    margin-left: 4px;
                }
            }
            p {
                font-size: 18px;
                font-weight: normal;
                font-stretch: normal;
                font-style: normal;
                line-height: 1.44;
                letter-spacing: normal;
                text-align: left;
                color: #4a4a4a;
                margin-bottom: 0;
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