<template>
    <section>
        <gallery :images="imagesPath" :index="index" @close="index = null">
            <template v-slot:next>
                <b-img src="/img/icons/arrow_right.svg"></b-img>
            </template>

            <template v-slot:prev>
                <b-img src="/img/icons/arrow_left.svg"></b-img>
            </template>
        </gallery>
        <b-row class="d-flex no-gutters flex-wrap">
            <b-col lg="2" md="3" sm="4" cols="6"
                   v-for="(image, imageIndex) in imagesPath"
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
          images: {
              type: Array,
              default: function () {
                  return [];
              }
          }
        },
        data() {
            return {
                index: null
            };
        },
        components: {
            'gallery': VueGallery
        },
        computed: {
            imagesPath: function() {
                return this.images.map(item => item.path)
            }
        }
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

/deep/#blueimp-gallery {
    a.next, a.prev{
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        border-color: #EF4E23;
        background: #fff;
        img{
            width: 20px;
            height: 20px;
        }
    }
}
</style>