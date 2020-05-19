<template>
    <div class="p-4 mb-4 position-relative d-none d-lg-block overflow-hidden" >
        <b-img src="/img/home/triangle-left.svg" class="triangle--full__width" data-aos="right-left" v-if="!hideTriangle" data-aos-offset="300" data-aos-duration="1000"></b-img>
        <b-container>
            <h2 class="jd-text-32 text-uppercase jd-text-dark text-center jd-font-bold">{{ HOME_PAGE.video_title }}</h2>

            <b-row class="mt-4">
                <b-col v-for="(video, key) in VIDEOS" :key="`video-${key}`">
                    <a :href="video.video_url" class="text-decoration-none" target="_blank">
                        <b-img :src="`http://img.youtube.com/vi/${video.video_id}/0.jpg`" class="w-100"></b-img>
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
    import { mapGetters } from "vuex";
    export default {
        props: {
            hideTriangle: {
                type: Boolean,
                default: false
            }
        },
        beforeCreate() {
            this.$store.dispatch("GET_VIDEOS");
        },
        computed: {
            ...mapGetters(['VIDEOS', 'HOME_PAGE']),
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