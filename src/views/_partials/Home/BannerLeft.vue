<template>
    <div class="position-relative">
        <div class="position-relative">
            <div class="banner-images" :style="{backgroundImage : `url(${image})`}" :class="{'mt-0' : onlyImage}">
                <div class="arrow"></div>
                <div class="arrow"></div>
            </div>
            <template v-if="!onlyImage">
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
            </template>
        </div>
        <template v-if="!onlyImage">
            <b-container class="fade--text__rotate text-center z-index-2 position-relative">
                <h2 class="jd-theme-color mb-0 jd-text-27 jd-font-bold text-uppercase"  data-aos="left-right"  data-aos-offset="200" data-aos-duration="1500">
                    Stress free, On time, On budget
                </h2>
            </b-container>
            <b-img src="/img/home/banner-triangle-left.svg" class="triangle small"  data-aos="right-left"  data-aos-offset="20" data-aos-duration="1000"></b-img>
            <b-img src="/img/home/banner-triangle-left-big.svg" class="triangle big"  data-aos="right-left"  data-aos-offset="20" data-aos-duration="1000"></b-img>
        </template>
    </div>
</template>

<script>
    export default {
        props: {
            image: String,
            onlyImage: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .bubble{
        position: absolute;
        background: rgba(192,192,192,0.6);
        border-radius: 1000px;

        @for $i from 2 through 10 {
            &:nth-child(#{$i}) {
                width: #{20 * (11 - $i)}px;
                height: #{20 * (11 - $i)}px;
                animation-delay: #{$i}s;
            }
        }

        &:nth-child(2){top: 50px;left: 50px;}
        &:nth-child(3){top: 180px;left: 350px;}
        &:nth-child(4){top: 100px;left: 650px;}
        &:nth-child(5){top: 170px;left: 950px;}
        &:nth-child(6){top: 160px;left: 1250px;}
        &:nth-child(7){top: 300px;left: 200px;}
        &:nth-child(8){top: 100px;left: 450px;}
        &:nth-child(9){top: 250px;left: 850px;}

        &:before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            backdrop-filter: blur(27px);
            border-radius: 1000px;
            animation: 4s bubbleEffect forwards;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            @-moz-document url-prefix() {
                filter: blur(27px);
                background-image: -webkit-gradient(linear, left top, left bottom, from(#444549), to(rgba(255, 255, 255, 0.5)));
            }
        }
        animation: 4s bubbleEffect forwards;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    @keyframes bubbleEffect {
        0%{
            opacity: 0;
            transform: scale(1);
        }
        25%{
            opacity: 0.5;
            transform: scale(1.1);
        }
        50%{
            opacity: 1;
            transform: scale(1.2);
        }
        75%{
            opacity: 0.5;
            transform: scale(1.3);
        }
        100%{
            opacity: 0;
            transform: scale(1.4);
        }
    }
    .banner-images {
        position: relative;
        height: 400px;
        background: url("/img/home/banners/banner-2.jpg") no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        width: 1720px;
        margin-right: auto;

        @media screen and (max-width:992px){
            background-attachment:scroll
        }

        .arrow{
            position: absolute;
            &:first-child{
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 0;
                border-top: 200px solid #fff;
                border-left: 1720px solid transparent;
                @media screen and (max-width: 1720px){
                    border-top: 100px solid #fff;
                }
            }

            &:last-child{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                width: 0;
                height: 0;
                border-bottom: 200px solid #fff;
                border-left: 1720px solid transparent;
                @media screen and (max-width: 1720px){
                    border-bottom: 100px solid #fff;
                }
            }
        }
    }
    .z-index-2{
        z-index: 10;
    }
    .triangle{
        position: relative;
        z-index: 5;
        width: 50vw;
        height: 200px;
        margin-left: auto;
        top: -60px;
        margin-bottom: -65px;
        @media screen and (min-width: 1720px){
            margin-bottom: -175px;
        }
        &.big{
            display: none;
        }
        &.small{
            display: block;
        }

        @media screen and (min-width: 1720px){
            z-index: 2;
            &.big{
                top: -180px;
                display: block;
            }
            &.small{
                display: none;
            }
        }
    }
    .pt-180{
        padding-top: 130px;
    }
    .fade--text__rotate {
        position: absolute;
        bottom: 30px;
        left: 0;
        right: 0;
        height: 40px;
        transform: rotate(-4deg);
        @media screen and (min-width: 1720px){
            top: -90px;
            transform: rotate(-7deg);
        }
    }
</style>