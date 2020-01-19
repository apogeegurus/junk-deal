<template>
    <div>
        <!--Slider Section Start-->
        <slider :without-hero="true" :images="images"></slider>
        <!--Slider Section End-->

        <b-container class="text-center mt-0 mt-lg-4">
            <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile">Full Service Residential Junk Removal &
                Hauling Services</h1>
            <h2 class="jd-text-22 jd-text-18__mobile jd-text-light jd-font-medium">A Reliable Source For All Of Your
                Junk Removal and Hauling Needs</h2>
            <p class="jd-text-18 mt-3 jd-font-medium jd-text-16__mobile mt-4">Our homes can often easily be overwhelmed with
                junk and clutter. Whether it’s in your garage, basement, attic or even your living room, these things
                will usually happen over time – and before you realize, you might have a task at hand that is simply too
                much for you to manage on your own. At that point, it might be a good idea to consider a junk removal
                company to free up much-needed space in your home.</p>
        </b-container>

        <!--Specialize Section Start-->
        <specialize :services="specialize" :classes="'mb-4 mb-lg-5'"></specialize>
        <!--Specialize Section End-->


        <!--Gallery Section Start-->
        <gallery :images="galleryImages"></gallery>
        <!--Gallery Section End-->

        <service-testimonials></service-testimonials>

        <!--Services Section Start-->
        <section class="position-relative mt-5 px-lg-100 overflow-hidden">
            <b-img src="/img/home/triangle-right.svg" class="triangle d-none d-lg-block" data-aos="left-right" data-aos-offset="300"></b-img>
            <section class="position-relative z-index-1">
                <b-container>
                    <h2 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile text-center">Our Additional Services Include but are Not Limited To:</h2>
                </b-container>
                <services :services="services" class="mt-4"></services>
            </section>
            <b-img src="/img/home/triangle-left.svg" class="triangle--full__width d-none d-lg-block" data-aos="right-left" data-aos-offset="500"></b-img>
        </section>
        <!--Services Section End-->

        <!--Video Section Start-->
        <jd-video :hide-triangle="true"></jd-video>
        <!--Video Section End-->
    </div>
</template>

<script>
    import Slider from "./_partials/Home/Slider";
    import Specialize from "./_partials/Home/Specialize";
    import JdVideo from "./_partials/Home/Video";
    import Gallery from "../components/Gallery";
    import Services from "./_partials/Home/Services";
    import ServiceTestimonials from "./_partials/Service/Testimonials"

    export default {
        components: {Slider, Specialize, JdVideo, Gallery, Services, ServiceTestimonials},
        data() {
            return {
                galleryImages: [
                    '/img/gallery/1.png',
                    '/img/gallery/2.png',
                    '/img/gallery/3.png',
                    '/img/gallery/4.png',
                    '/img/gallery/5.png',
                    '/img/gallery/6.png',
                    '/img/gallery/7.png',
                    '/img/gallery/8.png',
                    '/img/gallery/9.png',
                    '/img/gallery/10.png',
                    '/img/gallery/11.png',
                    '/img/gallery/12.png'
                ],
                specialize: [
                    [
                        { label: 'Furniture Removal' },
                        { label: 'Office Clean Outs' },
                        { label: 'Appliance Removal' },
                        { label: 'House Clean Outs' },
                        { label: 'Construction Debris' },
                    ],
                    [
                        { label: 'Foreclosure Clean Outs' },
                        { label: 'Estate Clean Outs' },
                        { label: 'Property Clean Outs' },
                        { label: 'Water Heater Removal' },
                        { label: 'Junk Hauling Services' },
                    ],
                    [
                        { label: 'Garbage Removal' },
                        { label: 'E-Waste Removal' },
                        { label: 'TV Disposal & Recycle' },
                        { label: 'Trash Removal' },
                        { label: 'Refrigerator Disposal' },
                    ]
                ],
                images: [ '/img/home/slider/slider-1.jpg', '/img/home/slider/slider-2.jpg', '/img/home/slider/slider-1.jpg', '/img/home/slider/slider-2.jpg' ],
                services: [
                    { title: "Commercial Junk Removal", img: "service-2.jpg", description: "Junk Deal is your one-stop-shop for your Commercial Junk Removal needs. We take anything from file cabinets to electronic waste."},
                    { title: "Office Furniture Liquidators", img: "service-3.jpg", description: "Junk Deal offers an Office Furniture Liquidators service that can help you with getting rid of unwanted office furniture or anything else you need removed from your work space."},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.triangle{
    position: absolute;
    left: 0;
    top:0;
    z-index: 0;
    width: 100%;
}
.triangle--full__width{
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 0;
    width: 100%;
}
.z-index-1{
    z-index: 1;
}
@media screen and (min-width: 992px){
    .px-lg-100{
        padding-top: 130px !important;
        padding-bottom: 130px !important;
    }
}
</style>