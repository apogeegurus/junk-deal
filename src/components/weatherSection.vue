<template>
    <div>
        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color jd-text-light">Weather in <br> Palo Alto</h2>
        <h3 class="jd-font-light d-flex justify-content-lg-between justify-content-start">
            <span style="font-size: 93px">49<sup>&#9675;</sup></span>
            <b-img src="/img/icons/sunny.png" class="contain-img"></b-img>
        </h3>

        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color jd-text-light">Resources:</h2>
        <section class="jd-text-18">
            <section>
                <p class="mb-0">City of Palo Alto</p>
                <section>
                    <b-img src="/img/icons/globus.png" class="contain-img mr-3"></b-img>
                    <a href="http://cityofpaloalto.org" target="_blank" class="text-link">www.cityofpaloalto.org</a>
                </section>
            </section>

            <section class="mt-4">
                <p class="mb-0">City Hall</p>
                <section>
                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                    <a href="tel:+6503292100" target="_blank" class="jd-text-dark">(650) 329-2100</a>
                </section>
            </section>

            <section class="mt-4">
                <p class="mb-0">Police Department,</p>
                <p class="mb-0">275 Forest Avenue, Palo Alto, CA 94301</p>
                <section>
                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                    <a href="tel:+6503292258" target="_blank" class="jd-text-dark">650-329-2258</a>
                </section>

                <section class="mt-2">
                    <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                    <a href="mailto:pd@cityofpaloalto.org" target="_blank" class="text-link">pd@cityofpaloalto.org</a>
                </section>
            </section>
        </section>

        <h2 class="jd-text-22 jd-font-medium bottom-line-def-color mt-4 jd-text-light">Places to donate:</h2>

        <section class="jd-text-18">
            <p class="mb-0">Goodwill of Silicon Valley Donation Center</p>
            <p class="mb-0">50 Embarcadero Rd, Palo Alto, CA 94301</p>
            <section>
                <b-img src="/img/icons/phone.svg" class="contain-img mr-3"></b-img>
                <a href="tel:+0000000" target="_blank" class="jd-text-dark">000 000-0000</a>
            </section>
        </section>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">

    .contain-img{
        object-fit: contain;
    }
    .text-link{
        color: #0091ff;
    }
    .z-index-1000{
        z-index: 989;
    }
    .bottom-line-def-color:after{
        border-radius: 0 150px 150px 0;
        margin-left: -15px;
        margin-top: 10px;
        @media screen and (max-width:992px){
            margin-left: 0;
            border-radius:150px;
        }
    }
</style>