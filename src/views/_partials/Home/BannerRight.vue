<template>
    <div class="position-relative pt-180">
        <b-img src="/img/home/banner-triangle-right.svg" class="triangle"  data-aos="left-right"  data-aos-offset="0"></b-img>
        <b-container class="fade--text__rotate">
            <h2 class="jd-theme-color mb-0 jd-text-27 jd-font-bold"  data-aos="left-right"  data-aos-offset="200">
                Full Service Junk Removal – San Francisco Bay Area
            </h2>
        </b-container>
        <b-img src="/img/home/banners/banner-1.png" class="w-100" data-aos="fade"></b-img>
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