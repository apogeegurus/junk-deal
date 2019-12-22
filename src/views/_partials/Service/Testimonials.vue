<template>
    <div class="my-4 position-relative">
        <section class="color-header p-2 mb-3 mt-5">
            <b-container>
                <h2 class="position-relative header text-white">
                    <i class="fas fa-quote-right quote d-none d-lg-block"></i>
                    TESTIMONIALS
                </h2>
            </b-container>
        </section>

        <carousel :perPageCustom="[[0, 1], [993, 4]]" :paginationEnabled="false" autoplay loop :autoplay-timeout="7000" autoplay-hover-pause>
            <slide :class="`pr-0 pr-lg-2 bg-white`" v-for="(testimonial, key) in testimonials" :key="`testimonials-${key}`">
                <section :class="`bg-${key + 1} h-100 pb-4 testimonials`">
                    <section class="headline d-flex flex-column px-4 py-3">
                        <h2 class="text-white jd-text-22 position-relative z-1">{{ testimonial.name }}</h2>
                        <div class="align-self-start jd-text-21 position-relative z-1">
                            <i class="fas fa-star text-white" v-for="i in testimonial.feedback"></i>
                            <i class="fas fa-star" v-for="j in (5 - testimonial.feedback)"></i>
                        </div>
                    </section>
                    <p class="jd-text-dark jd-text-18 text-justify mt-4 px-4">
                        {{ testimonial.message }}
                    </p>
                </section>
            </slide>
        </carousel>
    </div>
</template>

<script>
    export default {
        name: 'ServiceTestimonials',
        data() {
            return {
                testimonials: [
                    { name: "Anjeanette M.", message: "This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help… This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help…This company is amazing! I called them at 10am and they were here at 1pm .. I’m moving to another state I needed to throw some mattresses away.. and they were quick to come to help…", feedback: 5},
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
</style>