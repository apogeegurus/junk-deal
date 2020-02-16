<template>
    <div class="bg-white my-5 py-3">
        <b-container class="mb-n-300">
            <b-img src="/img/errors/Truck_404.svg"></b-img>

            <div class="transformY-n-300 position-relative z-index-5">
                <div class="text-center">
                    <router-link class="btn btn-jd" :to="{ name: 'home'}">Back</router-link>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
    export default {

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
    background: #EF4E23;
    color: #fff !important;
}
</style>