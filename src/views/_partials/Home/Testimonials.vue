<template>
    <div class="my-4 position-relative">
        <b-container class="position-relative quote-container" >
            <b-img src="/img/home/quote.svg" width="75px" class="quote" v-if="!silverQuote"></b-img>
            <b-img src="/img/home/quote_silver.svg" width="75px" class="quote" v-else></b-img>
        </b-container>
        <carousel loop  :dots="false" :nav="false" :items="1" autoplay autoplayHoverPause :smartSpeed="1500" :autoplayTimeout="5000" v-if="TESTIMONIALS.length">
           <div :class="{[`bg-${bgIndex()}`] : true}" v-for="(testimonial, key) in TESTIMONIALS" :key="`testimonials-${key}`" class="position-relative p-4">
               <b-container>
                   <div class="justify-content-between d-flex align-items-center mt-4 mt-sm-0 text-nowrap">
                       <h2 class="ml-0 ml-sm-5 text-white jd-text-22 pl-0 pl-sm-5">{{ testimonial.name }}</h2>
                       <b-img src="/img/home/5_star.svg" width="124px" class="w-124"></b-img>
                   </div>
                   <p class="jd-text-dark jd-text-18 text-justify mt-4">
                       {{ testimonial.description }}
                   </p>
               </b-container>
           </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    import { mapGetters } from "vuex";
    export default {
        props: {
            silverQuote: Boolean
        },
        data() {
            return {

            }
        },
        components: { carousel },
        beforeCreate() {
            this.$store.dispatch("GET_TESTIMONIALS");
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
        computed: {
            ...mapGetters(['TESTIMONIALS']),
        }
    }
</script>

<style scoped lang="scss">
.quote-container{
    z-index: 5;
    top:-20px
}

.quote {
    position: absolute;
    top: -10%;
    font-size: 60px;
    z-index: 1;
    color:#EF4E23;
    width: 75px !important;
    @media screen and (max-width: 992px){
        top: -7%;
        left: 20px;
    }
}

.w-124 {
    width: 124px !important;
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
</style>