<template>
    <div class="p-0 p-lg-4 junks" id="services" data-aos="fade" data-aos-duration="1000">
        <b-container>
            <b-row>
                <b-col class="text-center mt-3 mt-lg-0 p-0__mobile" :lg="services.length < 3 ? 6 : 4" sm="12" v-for="(service, key) in services" :key="`service-top-${key}`">
                    <router-link :to="{ name: 'services', params: { slug : service.slug } }">
                        <b-img :src="service.main_image_path" class="services--img"></b-img>
                    </router-link>

                    <section class="text-left px-3 px-lg-0">
                        <router-link :to="{ name: 'services', params: { slug : service.slug } }">
                            <h3 class="jd-text-22 jd-text-light jd-font-medium bottom-line-def-color mt-3 mt-lg-5">{{ service.title }}</h3>
                        </router-link>
                        <p class="jd-text-18 jd-text-dark">
                            {{ service.short_description }}
                        </p>
                    </section>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        props: {
            services: Array
        }
    }
</script>


<style scoped lang="scss">
/deep/.services--img{
    border-radius: 0;
    width: 100%;
    height: 230px;
    object-fit: cover;
}

@media screen and (max-width: 992px) {
    /deep/.services--img_rounded{
        border-radius: 0;
        width: 100%;
        height: auto;
    }
    /deep/.container{
        margin: 0;
        padding: 0;
        max-width: 100% !important;
        .row{
            margin: 0;
        }
    }

    .p-0__mobile{
        padding: 0;
    }
}
</style>