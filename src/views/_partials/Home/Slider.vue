<template>
    <div class="position-relative">
        <carousel autoplay :per-page="1" :pagination-enabled="false" easing="ease" loop :autoplay-timeout="10000">
            <slide>
                <b-img src="/img/home/slider/slider-1.jpg" class="w-100"></b-img>
            </slide>
            <slide>
                <b-img src="/img/home/slider/slider-2.jpg" class="w-100"></b-img>
            </slide>
        </carousel>

        <div class="w-100 position-absolute w-100 h-100 top-0">
            <b-container class="position-relative w-100 h-100">
                <b-img src="/img/home/heroes.png" class="home-heroes d-none d-lg-block" v-if="!withoutHero"></b-img>
                <quote-form :shown.sync="openQuote"></quote-form>
            </b-container>
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
</style>