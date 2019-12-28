<template>
    <div class="position-relative slide-section">
        <div class="slideshow">
            <div class="slideshow-image" :style="`background-image: url('${image}')`" v-for="(image, key) in images" :key="key"></div>
            <b-img src="/img/home/slider-triangle.svg" class="trinagle-bottom"></b-img>
        </div>

        <div class="w-100 position-absolute w-100 h-100 top-0 z-index-max">
            <b-container class="position-relative w-100 h-100">
                <b-img src="/img/home/heroes.png" class="home-heroes d-none d-lg-block" v-if="!withoutHero"></b-img>
            </b-container>

            <quote-form :shown.sync="openQuote"></quote-form>
        </div>
    </div>
</template>

<script>
    import QuoteForm from "../../../components/QuoteForm";

    export default {
        props: {
            withoutHero: {
                type: Boolean,
                default: false
            }
        },
        components: { QuoteForm },
        data() {
            return {
                openQuote: false,
                images: [ '/img/home/slider/slider-1.jpg', '/img/home/slider/slider-2.jpg', '/img/home/slider/slider-1.jpg', '/img/home/slider/slider-2.jpg' ],
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
.trinagle-bottom{
    position: absolute;
    bottom: -110px;
    z-index: 10;
    width: 185%;
    height: 200px;
}
$items: 4;
$animation-time: 8s;
$transition-time: 1s;
$scale: 20%;

$total-time: ($animation-time * $items);
$scale-base-1: (1 + $scale / 100%);

.slide-section{
    height: 60vh;
}
.slideshow {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.slideshow-image {
    position: absolute;
    width: 100%;
    height: 100%;
    background: no-repeat 50% 50%;
    background-size: cover;
    animation-name: kenburns;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: $total-time;
    opacity: 1;
    transform: scale($scale-base-1);

    @for $i from 1 through $items {
        &:nth-child(#{$i}) {
            animation-name: kenburns-#{$i};
            z-index: ($items - $i);
        }
    }
}

@for $i from 1 through $items {
    @keyframes kenburns-#{$i} {
        $animation-time-percent: percentage($animation-time / $total-time);
        $transition-time-percent: percentage($transition-time / $total-time);

        $t1: ($animation-time-percent * ($i - 1) - $transition-time-percent / 2);
        $t2: ($animation-time-percent * ($i - 1) + $transition-time-percent / 2);
        @if($t1 < 0%) { $t1: 0%; }
        @if($t2 < 0%) { $t2: 0%; }

        $t3: ($animation-time-percent * ($i) - $transition-time-percent / 2);
        $t4: ($animation-time-percent * ($i) + $transition-time-percent / 2);
        @if($t3 > 100%) { $t3: 100%; }
        @if($t4 > 100%) { $t4: 100%; }

        $t5: (100% - $transition-time-percent / 2);
        $t6: (($t4 - $t1) * 100% / $t5);

        #{$t1} { opacity: 1; transform: scale($scale-base-1); }
        #{$t2} { opacity: 1; }
        #{$t3} { opacity: 1; }
        #{$t4} { opacity: 0; transform: scale(1); }

        @if($i != $items) {
            100% { opacity: 0; transform: scale($scale-base-1); }
        }

        @if($i == 1) {
            $scale-plus: ($scale * (100% - $t5) / $t4);
            $scale-plus-base-1: (1 + ($scale + $scale-plus) / 100%);

            #{$t5} { opacity: 0; transform: scale($scale-plus-base-1); }
            100% { opacity: 1; }
        }
    }
}
.top-0{
    top: 0;
}
.home-heroes{
    position: absolute;
    bottom: -20px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: auto;
}
.z-index-max{
    z-index: 980;
}

/deep/.vue-flux{
    animation: zoominoutsinglefeatured 20s infinite;
}

@keyframes zoominoutsinglefeatured {
    0% {
        transform: scale(1,1);
    }
    50% {
        transform: scale(1.4,1.4);
    }
    100% {
        transform: scale(1,1);
    }
}
</style>