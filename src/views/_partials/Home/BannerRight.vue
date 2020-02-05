<template>
    <div class="position-relative">
        <template v-if="!onlyImage">
            <b-img src="/img/home/banner-triangle-right.svg" class="triangle small"  data-aos="left-right"  data-aos-offset="20" data-aos-duration="1000"></b-img>
            <b-img src="/img/home/banner-triangle-right-big.svg" class="triangle big"  data-aos="left-right"  data-aos-offset="20" data-aos-duration="1000"></b-img>
            <b-container class="fade--text__rotate text-center z-index-2 position-relative">
                <h2 class="jd-theme-color mb-0 jd-text-27 jd-font-bold text-uppercase"  data-aos="left-right"  data-aos-offset="200" data-aos-duration="1500">
                    Full Service Junk Removal – San Francisco Bay Area
                </h2>
            </b-container>
        </template>
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
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
                <span class="bubble"></span>
            </template>
        </div>
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

    &:nth-child(2){top: 50px;right: 50px;}
    &:nth-child(3){top: 180px;right: 350px;}
    &:nth-child(4){top: 100px;right: 650px;}
    &:nth-child(5){top: 170px;right: 950px;}
    &:nth-child(6){top: 160px;right: 1250px;}
    &:nth-child(7){top: 300px;right: 200px;}
    &:nth-child(8){top: 100px;right: 450px;}
    &:nth-child(9){top: 250px;right: 850px;}

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
        opacity: 0.9;
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
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    width: 1720px;
    margin-left: auto;
    margin-top: -65px;
    background-position: center;
    @media screen and (min-width: 1720px){
        margin-top: -175px;
    }

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
            border-right: 1720px solid transparent;
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
            border-right: 1720px solid transparent;
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
    &.big{
        display: none;
    }
    &.small{
        display: block;
    }

    @media screen and (min-width: 1720px){
        z-index: 2;
        &.big{
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
    top: -20px;
    left: 0;
    right: 0;
    height: 40px;
    transform: rotate(-4deg);
    @media screen and (min-width: 1720px){
        top: -80px;
        transform: rotate(-7deg);
    }
}
</style>