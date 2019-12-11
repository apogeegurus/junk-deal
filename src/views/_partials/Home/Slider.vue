<template>
    <div class="position-relative">
        <section class="overflow-hidden">
            <vue-flux
                    :options="vfOptions"
                    :images="vfImages"
                    :transitions="vfTransitions"
                    ref="slider">
            </vue-flux>
        </section>

        <div class="w-100 position-absolute w-100 h-100 top-0 z-index-max">
            <b-container class="position-relative w-100 h-100">
                <b-img src="/img/home/heroes.png" class="home-heroes d-none d-lg-block" v-if="!withoutHero"></b-img>
                <quote-form :shown.sync="openQuote"></quote-form>
            </b-container>
        </div>
    </div>
</template>

<script>
    import QuoteForm from "../../../components/QuoteForm";
    import { VueFlux } from 'vue-flux';

    export default {
        props: {
            withoutHero: {
                type: Boolean,
                default: false
            }
        },
        components: { QuoteForm, VueFlux },
        data() {
            return {
                openQuote: false,
                vfOptions: {
                    autoplay: true,
                    delay: 9000
                },
                vfImages: [ '/img/home/slider/slider-1.jpg', '/img/home/slider/slider-2.jpg'],
                vfTransitions: [ 'fade' ]
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
        transform: scale(1.2,1.2);
    }
    100% {
        transform: scale(1,1);
    }
}
</style>