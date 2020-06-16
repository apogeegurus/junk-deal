<template>
    <div class="bg-white my-5 py-3">
        <b-container class="mb-n-300">
            <h1 class="jd-text-36 jd-font-bold text-center jd-text-dark position-relative z-index-5">Thank you for your interest</h1>

            <div id="animation_container" style="background-color:rgba(255, 255, 255, 1.00); width:992px; height:700px" class="transformY-n-300 position-relative z-index-4">
                <canvas id="canvas" width="992" height="700" style="position: absolute; display: block; background-color:rgba(255, 255, 255, 1.00);"></canvas>
                <div id="dom_overlay_container" style="pointer-events:none; overflow:hidden; width:992px; height:700px; position: absolute; left: 0px; top: 0px; display: block;">
                </div>
            </div>

            <div class="transformY-n-300 position-relative z-index-5">
                <p class="jd-text-22 jd-font-medium text-center mt-5">
                    Our team will get back to you shortly. <br>
                    If you need immediate assistance please call <a href="tel:650-995-7500" >650-995-7500</a>
                </p>
                <div class="text-center">
                    <router-link class="btn btn-jd" :to="{ name: 'home'}">Go Back</router-link>
                </div>
            </div>
            <div style="position: relative; z-index: 10">
                <quote-form :shown.sync="openQuote" :hide-desktop="true"></quote-form>
            </div>
        </b-container>
    </div>
</template>

<script>
    import QuoteForm from "../components/QuoteForm";

    export default {
        components: {QuoteForm},
        data() {
            return {
                openQuote: false
            }
        },
        mounted() {
            initTruck();
            this.$root.$emit('hideLoader');
        },
        created() {
            this.$root.$on('openQuote', () => {
                this.openQuote = !this.openQuote;
            })
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
.z-index-5{
    z-index: 5;
}

.z-index-4{
    z-index: 4;
}

.mb-n-300{
    margin-bottom: -300px;

    @media screen and (max-width: 768px){
        margin-bottom: -100px;
    }
}
.transformY-n-300{
    transform: translateY(-300px);
    @media screen and (max-width: 768px){
        transform: translateY(-100px);
    }
}
</style>