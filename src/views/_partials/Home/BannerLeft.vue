<template>
    <div class="position-relative pb-85 overflow-hidden">
        <section class="position-relative">
            <b-img src="/img/home/banners/banner-2.png" class="w-100" data-aos="fade" data-aos-duration="1000"></b-img>
        </section>
        <b-container class="fade--text__rotate">
            <h2 class="jd-theme-color mb-0 jd-text-27 jd-font-bold text-uppercase" data-aos="left-right"  data-aos-offset="100" data-aos-duration="1000">
                Stress free, On time, On budget
            </h2>
        </b-container>
        <b-img src="/img/home/banner-triangle-left.svg" class="triangle"  data-aos="right-left"  data-aos-offset="200" data-aos-duration="1000"></b-img>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped lang="scss">
.triangle{
    position: absolute;
    bottom: 0;
    right: 0;
}
.pb-85{
    padding-bottom: 180px;
}
.fade--text__rotate {
    position: absolute;
    bottom: 190px;
    left: 0;
    right: 0;
    height: 40px;
    transform: rotate(-6deg);
    text-align: center;
}
</style>