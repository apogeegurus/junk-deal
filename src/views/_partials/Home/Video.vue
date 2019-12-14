<template>
    <div class="p-4 mb-4 position-relative d-none d-lg-block overflow-hidden" >
        <b-img src="/img/home/triangle-left.svg" class="triangle--full__width" data-aos="right-left" v-if="!hideTriangle" data-aos-offset="300" data-aos-duration="1000"></b-img>
        <b-container>
            <h2 class="jd-text-32 text-uppercase jd-text-dark text-center jd-font-bold">VIDEO</h2>

            <b-row class="mt-4">
                <b-col v-for="(video, key) in videos" :key="`video-${key}`">
                    <a href="#" class="text-decoration-none">
                        <b-img :src="`/img/home/videos/${video.img}`" class="w-100"></b-img>
                        <h5 class="jd-text-18 jd-text-dark jd-font-medium text-uppercase mt-3">{{ video.title }}</h5>
                        <p class="jd-text-18 jd-text-dark">
                            {{ video.description }}
                        </p>
                    </a>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        props: {
            hideTriangle: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                videos : [
                    { title: "how to separate garbage", img: "video-thumb-1.jpg", description: "Sed modigen torunte lacesti umquiaeped elenit faceperati omnis maximinvenes et et quae" },
                    { title: "best practices", img: "video-thumb-2.jpg", description: "Maximinvenes et et quae nitionseque quis nati tem ius, tecte vollorepra qui core seque laut aturior epudandi quatempel excerias et fugia" },
                    { title: "how we save the world one garbage bag at the time", img: "video-thumb-3.jpg", description: "Sed modigen torunte lacesti umquiaeped elenit faceperati omnis" },
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
.triangle--full__width{
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
}
</style>