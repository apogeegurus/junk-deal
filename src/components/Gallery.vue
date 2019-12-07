<template>
    <section>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <b-row class="d-flex no-gutters flex-wrap">
            <b-col lg="2" md="3" sm="4" cols="6"
                   v-for="(image, imageIndex) in images"
                   :key="imageIndex"
                   @click="index = imageIndex"
            >
                <b-img :src="image"  class="w-100"></b-img>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        data() {
            return {
                images: [
                    '/img/gallery/1.png',
                    '/img/gallery/2.png',
                    '/img/gallery/3.png',
                    '/img/gallery/4.png',
                    '/img/gallery/5.png',
                    '/img/gallery/6.png',
                    '/img/gallery/7.png',
                    '/img/gallery/8.png',
                    '/img/gallery/9.png',
                    '/img/gallery/10.png',
                    '/img/gallery/11.png',
                    '/img/gallery/12.png'
                ],
                index: null
            };
        },
        components: {
            'gallery': VueGallery
        },
    }
</script>

<style scoped lang="scss">

</style>