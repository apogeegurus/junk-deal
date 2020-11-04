<template>
    <section>
        <gallery :images="imagesPathOnly" :index="index" @close="index = null">
            <template v-slot:next>
                <b-img src="/img/icons/arrow_right.svg"></b-img>
            </template>

            <template v-slot:close>
                <b-img src="/img/icons/GalleryClose.svg"></b-img>
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
                <b-img :src="image.path" :alt="image.alt"   class="w-100 h-200px"></b-img>
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
                return this.images.map(item => { return {path: item.path, alt: item.alt}})
            },
            imagesPathOnly: function() {
                return this.images.map(item => { return item.path})
            },
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
        filter: blur(27px);
        background-image: -webkit-gradient(linear, left top, left bottom, from(#444549), to(rgba(255, 255, 255, 0.5)));
        @-moz-document url-prefix() {
            filter: blur(27px);
            background-image: -webkit-gradient(linear, left top, left bottom, from(#67686c), to(rgba(255, 255, 255, 0.5)));
        }
    }
}

/deep/#blueimp-gallery {
    a.close {
        display: block;
        padding: 0;
        background: #fff;
        border-radius: 50%;
        border: 1px solid #EF4E23;
        margin: 5px 0;
        opacity: 0.6;
        transition: 0.3s ease;
        text-align: center;
        &:hover{
            opacity: 1;
        }
        img {
            width: 40px;
            height: 40px;
            transform: scale(1.08) translateX(-0.1px);
        }
    }
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