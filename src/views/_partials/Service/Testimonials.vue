<template>
    <div class="my-4 position-relative">
        <section class="color-header p-2 mb-3 mt-5">
            <b-container>
                <h2 class="position-relative header text-white">
                    <b-img src="/img/home/quote_silver.svg" width="75px" class="quote d-none d-sm-block" />
                    TESTIMONIALS
                </h2>
            </b-container>
        </section>

        <carousel loop  :dots="false" :nav="false" :items="4" autoplay autoplayHoverPause :smartSpeed="1500" :autoplayTimeout="5000" :responsive="{0: { items:1 }, 992: { items: 3 }, 1200: { items: 4 }}" v-if="TESTIMONIALS.length">
            <div :class="`pr-0 pr-lg-2 bg-white`" v-for="(testimonial, key) in TESTIMONIALS" :key="`testimonials-${key}`">
                <section :class="{[`bg-${bgIndex()}`] : true}" class="h-100 testimonials">
                    <section class="headline d-flex flex-column px-4 py-3">
                        <h2 class="text-white jd-text-22 position-relative z-1">{{ testimonial.name }}</h2>
                        <b-img :src="`/img/home/${testimonial.rating}.svg`" width="124px" class="w-124"></b-img>
                    </section>
                    <p class="jd-text-dark jd-text-18 text-left px-4 mb-0 py-4">
                        {{ testimonial.description }}
                    </p>
                </section>
            </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    import { mapGetters } from "vuex";
    export default {
        components: { carousel },
        name: 'ServiceTestimonials',
        beforeCreate() {
            this.$store.dispatch("GET_TESTIMONIALS");
        },
        computed: {
            ...mapGetters(['TESTIMONIALS']),
        },
        methods: {
            bgIndex: function () {
                if(!this.bgIndexKey) this.bgIndexKey = 0;
                if(this.bgIndexKey <= 5) {
                    this.bgIndexKey++;
                }
                if(this.bgIndexKey > 5) this.bgIndexKey = 1;
                return this.bgIndexKey;
            }
        },
    }
</script>

<style scoped lang="scss">
.quote{
    position: absolute;
    top: -50%;
    left: 0;
    font-size: 70px;
    z-index: 1;
    color:#6d7278;
}
.z-1{
    z-index: 1;
}

.testimonials{
    border-radius: 0 0 40px 40px;
}
.header{
    font-size: 50px;
    text-align: center;
    @media screen and (max-width: 520px){
        font-size: 32px;
    }
}
.headline{
    position: relative;
    &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: rgba(0,0,0,0.1);
    }
}

@media screen and (max-width: 992px) {
    .testimonials{
        border-radius: 0;
    }
}

.w-124 {
    width: 124px !important;
}

.color-header{
    background-color: rgba(53, 172, 163, 0.3);
}

.bg-1{
    background: rgba(53, 172, 163, 0.3)
}
.bg-2{
    background: rgba(53, 94, 172, 0.3);
}
.bg-3{
    background: rgba(145, 53, 172, 0.3);
}
.bg-4{
    background: rgba(172, 53, 53, 0.3);
}
.bg-5{
    background: rgba(158, 172, 53, 0.3);
}


/deep/.owl-carousel .owl-stage {
    display: flex;
}

/deep/.owl-carousel .owl-item  > div  {
    width: auto;
    height: 100%;
}
</style>