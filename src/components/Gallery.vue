<template>
    <section>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
        <b-row class="d-flex no-gutters flex-wrap">
            <b-col lg="2" md="3" sm="4" cols="6"
                   v-for="(image, imageIndex) in images"
                   :key="imageIndex"
                   @click="index = imageIndex"
            >
                <b-img :src="image"  class="w-100 h-200px"></b-img>
            </b-col>
        </b-row>
    </section>
</template>

<script>
    import VueGallery from 'vue-gallery';

    export default {
        props: {
          images: Array
        },
        data() {
            return {
                index: null
            };
        },
        components: {
            'gallery': VueGallery
        },
    }
</script>

<style scoped lang="scss">
/deep/.h-200px{
    height: 166px;
    object-fit: cover;
}
/deep/.blueimp-gallery{
    background: rgba(255,255,255,0.1);
    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(27px);
    }
}
</style>