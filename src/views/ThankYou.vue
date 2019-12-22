<template>
    <div class="bg-white my-5 py-3">
        <b-container>
            <h1 class="jd-text-36 jd-font-bold text-center jd-text-dark">Thank you for your interest</h1>

            <div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:992px; height:700px">
                <canvas id="canvas" width="992" height="700" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
                <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:992px; height:700px; position: absolute; left: 0px; top: 0px; display: block;">
                </div>
            </div>

            <p class="jd-text-22 jd-font-medium text-center mt-5">
                Our team will get back to you shortly. <br>
                If you need immediate assistance please call <a href="tel:650-995-7500" >650-995-7500</a>
            </p>
            <div class="text-center">
                <router-link class="btn btn-jd" :to="{ name: 'home'}">Go Back</router-link>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {
        mounted() {
            initTruck();
        }
    }
</script>

<style scoped lang="scss">
.btn-jd {
    width: 325px;
    height: 31px;
    border-radius: 150px;
    border: solid 1px #e8452a;
    font-size: 12px;
    transition: 0.3s ease;
    cursor: pointer;
    &:hover{
        background: #EF4E23;
        color: #fff !important;
    }
}
</style>