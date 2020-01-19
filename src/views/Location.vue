<template>
    <div>
        <slider :withoutHero="true" :images="images"></slider>

        <b-container class="p-0__mobile z-index-1000 position-relative">
            <b-row>
                <b-col cols="12" lg="9" class="text-center text-lg-left">
                    <h1 class="jd-text-36 jd-text-dark jd-text-23__mobile text-left px-4 p-lg-0">Serving wonderful city of</h1>
                    <h2 class="jd-text-dark jd-font-bold jd-text-36 jd-text-23__mobile text-left px-4 p-lg-0">Palo Alto</h2>
                    <h3 class="jd-font-medium jd-text-22 jd-text-18__mobile px-4 p-lg-0 my-4">Let’s keep our beloved place clean</h3>

                    <p class="jd-text-dark jd-text-18 px-4 p-lg-0">
                        When junk becomes an eyesore, you need to hire professionals to take care of the problem. No one in Palo Alto does it better than Junk Deal.
                        Family owned and operated, we are your local professionals in bulk trash removal. We guarantee 100% satisfaction on all of our jobs. Everything that we haul away is always disposed of properly.

                        Fill out our quote form for a free quote. Let us demonstrate our swiftness and professionalism that only a local professional can do. It only takes a couple of minutes to rid yourself of all of your unsightly rubbish.
                    </p>

                    <specialize :align-left="true" :services="specialize" :bottom-zero="true" class="my-3 my-lg-0"></specialize>
                </b-col>
                <b-col cols="3" class="jd-text-dark b-l-1 d-none d-lg-block">
                    <weather-section></weather-section>
                </b-col>
            </b-row>
        </b-container>

        <section class="d-flex flex-column">
            <section class="order-lg-0 order-2 mt-4 mt-lg-0">
                <h2 class="jd-text-25 jd-font-bold jd-text-dark d-block d-lg-none text-center">Our Services Include but are Not Limited To:</h2>
                <services :services="services"></services>
            </section>

            <div class="map-container order-lg-0 order-0" @click="clickedMap = true" @mouseleave="clickedMap = false" :class="{ clicked : clickedMap }">
                <iframe width="100%" height="250" frameborder="0" style="margin-bottom:-6px"
                        src="https://www.google.com/maps/embed/v1/place?q=3641%20Haven%20Ave.%2C%20Suite%20C%2C%20Menlo%20Park%2C%20CA%2094025&key=AIzaSyB2kXXO6fWPG_-L5IQXn96fx8qUg-_3GLk"
                        allowfullscreen></iframe>
            </div>

            <gallery class="mt-5 order-lg-0 order-1" :images="galleryImages"></gallery>

            <weather-section class="order-lg-0 order-4 d-block d-lg-none px-4 mt-0"></weather-section>
            <testimonials class="mt-5 order-lg-0 order-5"></testimonials>

            <banner-right :only-image="true" image="/img/location/banners/banner-1.jpg" class="order-lg-0 order-3 overflow-hidden"></banner-right>
            <b-container class="order-lg-0 order-6">
                <h2 class="jd-text-27 text-uppercase text-lg-center text-left jd-text-23__mobile">
                    <span class="jd-text-dark jd-font-bold">Facts about</span>
                    <br class="d-block d-lg-none">
                    <span class="jd-theme-color jd-font-bold"> Palo Alto</span> You probably didn’t know
                </h2>

                <b-row class="mt-5 mb-5">
                    <b-col cols="12" lg="4" class="jd-font-medium jd-text-18 jd-text-dark">
                        Palo Alto serves as a central economic focal point of the Silicon Valley, and is home to more than 7,000 businesses employing more than 98,000 people.[52] Many prominent technology firms reside in the Stanford Research Park on Page Mill Road, while nearby Sand Hill Road in the adjacent city of Menlo Park is a notable hub of venture capitalists. The city’s economy generally follows the economic trends of the rest of the Silicon Valley.
                    </b-col>

                    <b-col cols="12" lg="7" offset="0" offset-lg="1" class="jd-font-medium jd-text-18 jd-text-light d-none d-lg-block">
                        In 1777, Father Junipero Serra established the Mission Santa Clara de Asis, whose northern boundary was San Francisquito Creek and whose lands included modern Palo Alto.
                        <br><br>
                        The city was established by the founder of Stanford University Leland Stanford Sr.
                        <br><br>
                        Many of Stanford University’s first faculty members settled in the Professorville neighborhood of Palo Alto. Professorville, now a registered national historic district, is bounded by Kingsley, Lincoln, and Addison Avenues and the cross streets of Ramona, Bryant, and Waverley.
                        <br><br>
                        Palo Alto, California is also home to a long standing baseball tradition: The Palo Alto Oaks. The Palo Alto Oaks are a collegiate, summer baseball club that have been in the Bay Area since 1950, 8 years longer than the San Francisco Giants.
                    </b-col>
                </b-row>
            </b-container>
            <banner-left :only-image="true" image="/img/location/banners/banner-2.jpg" class="mb-5 d-none d-lg-block"></banner-left>
        </section>
    </div>
</template>

<script>
    import Services from "./_partials/Home/Services";
    import Gallery from "../components/Gallery";
    import Testimonials from "./_partials/Home/Testimonials";
    import BannerRight from "./_partials/Home/BannerRight";
    import BannerLeft from "./_partials/Home/BannerLeft";
    import Slider from "./_partials/Home/Slider";
    import Specialize from "./_partials/Home/Specialize";
    import WeatherSection from "../components/weatherSection";

    export default {
        components: {Slider, Testimonials, Services, Gallery, BannerRight, BannerLeft, Specialize, WeatherSection},
        data() {
            return {
                specialize: [
                    [
                        { label: 'Furniture Removal' },
                        { label: 'Office Clean Outs' },
                        { label: 'Appliance Removal' },
                        { label: 'House Clean Outs' },
                        { label: 'Construction Debris' },
                        { label: 'Foreclosure Clean Outs' },
                        { label: 'Estate Clean Outs' },
                        { label: 'Property Clean Outs' },
                    ],
                    [
                        { label: 'Garbage Removal' },
                        { label: 'E-Waste Removal' },
                        { label: 'TV Disposal & Recycle' },
                        { label: 'Trash Removal' },
                        { label: 'Refrigerator Disposal' },
                        { label: 'Water Heater Removal' },
                        { label: 'Junk Hauling Services' },
                        { label: 'Junk Hauling Services' },
                    ]
                ],
                galleryImages: [
                    '/img/location/gallery/1.jpg',
                    '/img/location/gallery/2.jpg',
                    '/img/location/gallery/3.jpg',
                    '/img/location/gallery/4.jpg',
                    '/img/location/gallery/5.jpg',
                    '/img/location/gallery/6.jpg',
                    '/img/location/gallery/7.jpg',
                    '/img/location/gallery/8.jpg',
                    '/img/location/gallery/9.jpg',
                    '/img/location/gallery/10.jpg',
                    '/img/location/gallery/11.jpg',
                    '/img/location/gallery/12.jpg'
                ],
                images: ['/img/location/slider/slider-1.jpg', '/img/location/slider/slider-2.jpg', '/img/location/slider/slider-3.jpg', '/img/location/slider/slider-4.jpg'],
                clickedMap: false,
                services : [
                    { title: "Residential Junk Removal", img: "service-1.jpg", description: "Our Residential Junk Removal services gives you an easy solution for de-cluttering your home or clearing your yard from unwanted junk."},
                    { title: "Commercial Junk Removal", img: "service-2.jpg", description: "Junk Deal is your one-stop-shop for your Commercial Junk Removal needs. We take anything from file cabinets to electronic waste."},
                    { title: "Office Furniture Liquidators", img: "service-3.jpg", description: "Junk Deal offers an Office Furniture Liquidators service that can help you with getting rid of unwanted office furniture or anything else you need removed from your work space."},
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
    .p-0__mobile{
        padding: 0;
    }
}
.b-l-1{
    border-left: 2px solid #959595;
}
</style>