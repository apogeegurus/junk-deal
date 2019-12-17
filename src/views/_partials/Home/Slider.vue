<template>
    <div class="position-relative">
        <app-slider :images="images"></app-slider>

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
    import AppSlider from "./AppSlider";

    export default {
        props: {
            withoutHero: {
                type: Boolean,
                default: false
            }
        },
        components: { QuoteForm, AppSlider },
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