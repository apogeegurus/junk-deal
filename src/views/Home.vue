<template>
    <div class="home-section">
        <slider :images="images"></slider>

        <b-container class="text-center mt-5">
            <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile">Junk Removal & Hauling Company</h1>
            <p class="jd-text-22 mt-3 jd-font-medium jd-text-18__mobile">Junk Deal is more than an average junk removal & hauling company. We can help you with organizing,
                sorting, donations, packing, moving, storage, light demo and hauling services. </p>
        </b-container>

        <!--Specialize Section Start-->
        <specialize :services="specialize"></specialize>
        <!--Specialize Section End-->

        <!--Banner Section Start-->
        <banner-right class="d-none d-lg-block" image="/img/home/banners/banner-1.jpg"></banner-right>
        <!--Banner Section End-->

        <!--Services Section Start-->
        <services :services="services"></services>
        <!--Services Section End-->

        <!--Banner Section Start-->
        <banner-left class="d-none d-lg-block" image="/img/home/banners/banner-2.jpg"></banner-left>
        <!--Banner Section End-->

        <!--Works Section Start-->
        <works></works>
        <!--Works Section End-->

        <!--Testimonials Section Start-->
        <testimonials></testimonials>
        <!--Testimonials Section End-->

        <!--Video Section Start-->
        <jd-video></jd-video>
        <!--Video Section End-->
    </div>
</template>

<script>
    import BannerRight from "./_partials/Home/BannerRight";
    import BannerLeft from "./_partials/Home/BannerLeft";
    import Works from "./_partials/Home/Works";
    import Testimonials from "./_partials/Home/Testimonials";
    import JdVideo from "./_partials/Home/Video";
    import Services from "./_partials/Home/Services";
    import Specialize from "./_partials/Home/Specialize";
    import Slider from "./_partials/Home/Slider";

    export default {
        components: { Specialize, Slider, BannerRight, BannerLeft, Works, Testimonials, JdVideo, Services },
        data() {
            return {
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
                services : [
                    { title: "Residential Junk Removal", img: "service-1.jpg", description: "Our Residential Junk Removal services gives you an easy solution for de-cluttering your home or clearing your yard from unwanted junk."},
                    { title: "Commercial Junk Removal", img: "service-2.jpg", description: "Junk Deal is your one-stop-shop for your Commercial Junk Removal needs. We take anything from file cabinets to electronic waste."},
                    { title: "Office Furniture Liquidators", img: "service-3.jpg", description: "Junk Deal offers an Office Furniture Liquidators service that can help you with getting rid of unwanted office furniture or anything else you need removed from your work space."},
                ]
            }
        }
    }
</script>