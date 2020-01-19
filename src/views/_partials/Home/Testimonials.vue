<template>
    <div class="my-4 position-relative">
        <carousel loop  :dots="false" :nav="false" :items="1" autoplay autoplayHoverPause :smartSpeed="1500" :autoplayTimeout="5000">
           <div  :class="`position-relative p-4 bg-${key + 1}`" v-for="(testimonial, key) in testimonials" :key="`testimonials-${key}`">
               <b-container>
                   <b-img src="/img/home/quote.svg" width="75px" class="quote" v-if="!silverQuote"></b-img>
                   <b-img src="/img/home/quote_silver.svg" width="75px" class="quote" v-else></b-img>
                   <div class="justify-content-between d-flex align-items-center mt-4 mt-sm-0 text-nowrap">
                       <h2 class="ml-0 ml-sm-5 text-white jd-text-22 pl-0 pl-sm-5">{{ testimonial.name }}</h2>
                       <b-img src="/img/home/5_star.svg" width="124px" class="w-124"></b-img>
                   </div>
                   <p class="jd-text-dark jd-text-18 text-justify mt-4">
                       {{ testimonial.message }}
                   </p>
               </b-container>
           </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    export default {
        props: {
            silverQuote: Boolean
        },
        components: { carousel  },
        data() {
            return {
                testimonials: [
                    { name: "Anjeanette M.", message: " This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help…", feedback: 5},
                    { name: "John Doe", message: " This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help…", feedback: 3},
                    { name: "Emma Doe.", message: " This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help…", feedback: 4},
                    { name: "Layla G.", message: " This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help…", feedback: 1},
                    { name: "Jack B.", message: " This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help…", feedback: 5}
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
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