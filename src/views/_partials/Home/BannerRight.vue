<template>
    <div class="position-relative pt-180">
        <b-img src="/img/home/banner-triangle-right.svg" class="triangle"  data-aos="left-right"  data-aos-offset="20" data-aos-duration="1000"></b-img>
        <b-container class="fade--text__rotate text-center">
            <h2 class="jd-theme-color mb-0 jd-text-27 jd-font-bold text-uppercase"  data-aos="left-right"  data-aos-offset="150" data-aos-duration="1500">
                Full Service Junk Removal – San Francisco Bay Area
            </h2>
        </b-container>
        <b-img src="/img/home/banners/banner-1.png" class="w-100" data-aos="fade" data-aos-duration="1000" data-aos-offset="400"></b-img>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
.triangle{
    position: absolute;
    top: -30px;
    width: 50vw;
}
.pt-180{
    padding-top: 130px;
}
.fade--text__rotate {
    position: absolute;
    top: 135px;
    left: 0;
    right: 0;
    height: 40px;
    transform: rotate(-5deg);
}
</style>