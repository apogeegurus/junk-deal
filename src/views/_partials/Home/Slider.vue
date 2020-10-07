<template>
    <div class="position-relative slide-section" :class="classes">
        <div class="slideshow">
            <div id="slideshow__ken__burns" v-if="loaded">
                <div v-for="(image, key) in images" :key="key" :style="{'backgroundImage' : `url(${image})`}"></div>
            </div>
            <div class="trinagle-bottom"></div>
        </div>

        <div class="w-100 position-absolute w-100 h-100 top-0 z-index-max">
            <b-container class="position-relative w-100 h-100">
                <b-img src="/img/home/heroes.png" class="home-heroes" v-if="!withoutHero"></b-img>
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
            },
            isBackground: {
                type: Boolean,
                default: false
            },
            images: {
                type: Array,
                default: function () {
                    return []
                }
            },
            classes: {
                type: String,
                default: ""
            }
        },
        components: {QuoteForm},
        data() {
            return {
                openQuote: false,
                loaded: false
            }
        },
        methods: {
            getAnimationPosition(key) {
                const animations = ['in', 'out'];
                return key % 2 === 0 ? animations[0] : animations[1];
            }
        },
        created() {
            this.$root.$on('openQuote', () => {
                this.openQuote = !this.openQuote;
            })
        },
        mounted() {
            this.loaded = true;
        }
    }
</script>

<style scoped lang="scss">
    @import "../../../utils/ken-burns/main.css";

    .trinagle-bottom {
        position: absolute;
        width: 100%;
        height: 100px;
        transform: rotate(-5deg);
        bottom: -290px;
        z-index: 10;
        background: #fff;
        padding: 0 20px;
        box-sizing: initial;
        left: 0;
        border-bottom: 280px solid #fff;
    }

    .slide-section {
        height: 60vh;
    }

    .slideshow {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }


    .top-0 {
        top: 0;
    }

    .home-heroes {
        position: absolute;
        bottom: -20px;
        z-index: 999;
        left: 0;
        right: 0;
        margin: auto;
        @media screen and (max-width: 992px) {
            bottom: 0;
            width: 420px;
        }

        @media screen and (max-width: 560px) {
            bottom: 0;
            width: 260px;
        }
    }

    .z-index-max {
        z-index: 980;
    }

    /deep/ .vue-flux {
        animation: zoominoutsinglefeatured 20s infinite;
    }

    @keyframes zoominoutsinglefeatured {
        0% {
            transform: scale(1, 1);
        }
        50% {
            transform: scale(1.4, 1.4);
        }
        100% {
            transform: scale(1, 1);
        }
    }
</style>
