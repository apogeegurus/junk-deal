<template>
    <div class="p-4 mb-4 position-relative overflow-hidden" :class="{'d-none d-lg-block' : mobileVideos, 'd-block d-lg-none' : desktopVideos}">
        <b-img src="/img/home/triangle-left.png" class="triangle--full__width" data-aos="right-left" v-if="!hideTriangle" data-aos-offset="300" data-aos-duration="1000"></b-img>
        <b-container>
            <h2 class="jd-text-32 text-uppercase jd-text-dark text-center jd-font-bold">{{ HOME_PAGE.video_title }}</h2>

            <b-row class="mt-4 justify-content-center">
                <b-col v-for="(video, key) in VIDEOS" :key="`video-${key}`"
                       cols="12"
                       lg="4"
                       :class="{'d-none d-lg-block' : !video.is_mobile, 'd-block d-lg-none' : video.is_mobile}">
                    <a :href="video.video_url" class="text-decoration-none" target="_blank">
                        <b-img :src="`https://img.youtube.com/vi/${video.video_id}/0.jpg`" class="w-100"></b-img>
                    </a>
                    <a :href="video.video_url" class="text-decoration-none" target="_blank">
                        <h5 class="jd-text-18 jd-text-dark jd-font-medium text-uppercase mt-3">{{ video.title }}</h5>
                    </a>
                    <p class="jd-text-18 jd-text-dark">
                        {{ video.description }}
                    </p>
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
            mobileVideos: function () {
                let videos = this.VIDEOS.filter((item) => item.is_mobile);
                return videos ? !videos.length : false;
            },
            desktopVideos: function () {
                let videos = this.VIDEOS.filter((item) => !item.is_mobile);
                return videos ? !videos.length : false;
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