<template>
    <div class="loading" v-if="show">
        <b-img src="/img/loading.gif"></b-img>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },
        created() {
            this.$root.$on('showLoader', () => {
                this.show = true;
                document.querySelector('body').classList.add('overflow-hidden');
                document.querySelector('html').classList.add('overflow-hidden');
            });
            this.$root.$on('hideLoader', () => {
                this.show = false;
                document.querySelector('body').classList.remove('overflow-hidden');
                document.querySelector('html').classList.remove('overflow-hidden');
            });
        }
    }
</script>

<style scoped lang="scss">
.loading{
    position: fixed;
    z-index: 99999999999999;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>