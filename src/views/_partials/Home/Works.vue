<template>
    <div class="p-4 mt-4 position-relative" id="how-it-works">
        <b-img src="/img/home/triangle-right.svg" class="triangle" data-aos="left-right" data-aos-duration="1000"></b-img>
        <b-container class="position-relative">
            <h2 class="jd-text-32 text-uppercase jd-text-dark text-center jd-font-bold jd-text-25__mobile mb-5 mb-lg-3">How It Works</h2>
            <p class="text-center jd-text-22 jd-text-dark jd-text-18__mobile mb-5">Our process is very simple, you schedule your junk removal, we call to let you know we are heading your
                way and when we get to your place, we go to work almost immediately. We get the job done quickly. Our
                residential junk removal services gives you an easy solution for decluttering your home or clearing your
                yard from unwanted junk.
            </p>


            <section class="d-flex flex-row flex-lg-column">
                <b-row class="border--right__mobile">
                    <b-col v-for="(step, key) in steps" :key="`step-img-${key}`" class="d-flex align-items-center flex-column flex-lg-row mb-lg-0 step--item">
                        <b-img :src="`/img/home/works/${step.img}`" data-aos="flip-left" class="step--image__mobile" data-aos-duration="1000"></b-img>
                        <template v-if="(key + 1) !== steps.length">
                            <div class="d-flex align-self-center align-self-lg-start m-0 mt-lg-2 mt-lg-5 ml-lg-5 icons--chevron__rotate">
                                <i class="fas fa-chevron-right jd-text-50 jd-theme-color-50"></i>
                                <i class="fas fa-chevron-right jd-text-50 ml--10 jd-theme-color"></i>
                            </div>
                        </template>
                    </b-col>
                </b-row>

                <b-row class="d-flex flex-column flex-lg-row step--content__mobile">
                    <b-col v-for="(step, key) in steps" :key="`step-${key}`">
                        <h3 class="text-uppercase jd-text-22 jd-text-light jd-font-medium bottom-line-def-color d-none d-lg-block">{{ step.title }}</h3>
                        <p class="jd-text-18 jd-text-dark">
                            {{ step.description }}
                        </p>
                    </b-col>
                </b-row>
            </section>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                steps: [
                    { title: "Step 1", description: "Call for an estimate or send us contact form requesting a quote. We provide you with a free estimate.", img: "how-it-works-step-1.png"},
                    { title: "Step 2", description: "We arrive on time to your site, our professional junk removal staff will load, cleanup and remove the junk from your property or business.", img: "how-it-works-step-2.png"},
                    { title: "Step 3", description: "Once the your property is junk free and you are fully satisfied, then we collect payment.", img: "how-it-works-step-3.png"},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.triangle{
    position: absolute;
    left: 0;
    top: 50px;
    z-index: 0;
    width: 100%;
}

@media screen and (max-width:992px){
    .icons--chevron__rotate{
        transform: rotate(90deg);
    }

    .triangle{
        top: -25px;
    }

    .border--right__mobile{
        border-right: 3px solid #EF4E23;
        .step--item:not(:last-child){
            margin-bottom: 3rem;
        }
    }

    .step--image__mobile{
        width: 100px;
        &+.icons--chevron__rotate .jd-text-50{
            font-size: 35px;
        }
    }

    .step--content__mobile{
        margin-left: 20px;
        font-size: 18px;
    }
}
</style>