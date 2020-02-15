<template>
    <div>
        <!--Slider Section Start-->
        <slider :without-hero="true" :images="images" v-if="images.length"></slider>

        <b-container class="text-center mt-0 mt-lg-4">
            <h1 class="jd-text-dark jd-font-bold jd-text-36 jd-text-25__mobile">About Us</h1>
            <h2 class="jd-text-22 jd-text-18__mobile jd-text-light mt-4 jd-font-medium">{{ about.title }}</h2>
            <p class="jd-text-18 mt-3 jd-text-16__mobile mt-4 jd-font-light jd-text-dark" v-html="about.description"></p>
        </b-container>

        <section class="headline-our-team my-5">
            Our Team:
        </section>

        <b-container>
            <b-row>
                <b-col cols="12" md="6" lg="3" v-for="(member, key) in members" :key="key" class="member-section mb-3">
                    <b-img :src="member.avatar_path"></b-img>
                    <h2 class="jd-text-dark jd-text-18 jd-font-medium mt-3">{{ member.name }}</h2>
                    <p class="jd-font-regular">{{ member.position }}</p>
                </b-col>
            </b-row>
        </b-container>

        <b-container class="my-5">
            <a class="hiring d-flex justify-content-center align-items-center align-content-center my-5" :href="`tel:${SITE_DETAILS.phone}`">
                <b-img src="/img/icons/phone_orange.png" class="ml-5 mr-2"></b-img>
                <p class="mb-0 text-uppercase text-center jd-text-18__mobile pr-5">We ARE HAIRING!!! CALL US IF YOU INTERESTED IN MOOVING OR HAULING INDUSTRY CAREER!</p>
            </a>
        </b-container>

        <b-container>
            <div class="text-center my-5">
                <b-img :src="about.image_path" class="banner mt-5"></b-img>
            </div>
        </b-container>
    </div>
</template>

<script>
    import Slider from "./_partials/Home/Slider";
    import { mapGetters } from "vuex";
    import { RepositoryFactory } from "../api/RepositoryFactory"

    export default {
        components: { Slider },
        data() {
            return {
                about: {},
                members: []
            }
        },
        beforeCreate() {
            this.$store.dispatch("GET_SLIDERS");
            this.$store.dispatch("GET_SITE_DETAILS");
        },
        created() {
          this.getData();
        },
        computed: {
            ...mapGetters(['SLIDERS', 'SITE_DETAILS']),
            images: function () {
                return this.SLIDERS.map(item => item.path);
            }
        },
        methods: {
            getData() {
                RepositoryFactory.get('site').getAbout().then(({ data }) => {
                    this.about = data.about;
                    this.members = data.members;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.headline-our-team{
    height: 45px;
    background-color: rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 45px;
    font-size: 29px;
    color: #959595;
    text-transform: uppercase;
}
.member-section{
    img {
        border: 1px solid #000;
        width: 100%;
        object-fit: cover;
    }
}
.hiring{
    height: 90px;
    border-radius: 150px;
    background-color: #ef4e23;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.38;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}
.banner{
    width: 100%;
    object-fit: contain;
}
</style>