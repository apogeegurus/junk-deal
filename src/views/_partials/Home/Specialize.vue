<template>
    <div id="specialize">
        <section class="headline jd-text-dark py-2" :class="{'jd-home-specialize' : isHome}">
            <b-container>
                <p :class="{ 'jd-text-22 m-0 jd-text-20__mobile jd-font-regular jd-home-text text-wrap-pre' : isHome, 'jd-text-29 m-0 text-uppercase jd-text-20__mobile text-wrap-pre': !isHome, 'text-left text-wrap-none' : alignLeft, 'text-center' : !alignLeft}" >
                    {{ isHome ? HOME_PAGE.sub_title :  HOME_PAGE.specialize_title}}
                </p>
            </b-container>
        </section>

        <b-container class="mt-3" data-aos="fade-up"  data-aos-duration="1000" :class="{ [classes] : classes}">
            <section class="d-flex text--service__rotate">
                <h3 class="text--service__mobile d-block d-lg-none text-uppercase jd-font-bold">
                    {{ HOME_PAGE.banner_one_text }}
                </h3>

                <b-row class="flex-lg-grow-1 flex-grow-0 d-flex flex-column flex-lg-row border--left__mobile">
                    <b-col class="d-flex mt-0 mt-lg-3" v-for="(service, key) in services" :key="`service-${key}`" style="flex:1">
                        <ul class="list-unstyled m-0">
                            <li v-for="(item, itemKey) in service" :key="`service-item-${itemKey}`">
                                <span class="jd-text-dark py-1 d-block jd-text-18 align-items-center d-flex">
                                    <img src="/img/icons/arrow_left.svg"  alt="" width="18px" class="mr-2 d-none d-lg-block"/>
                                    {{ item.label }}
                                </span>
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </section>
        </b-container>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        props: {
            alignLeft: Boolean,
            services: Array,
            classes:String,
            isHome: Boolean
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(["HOME_PAGE"])
        },
    }
</script>

<style scoped lang="scss">
.text-wrap-pre{
    white-space: pre-wrap;
}
.text-wrap-none{
    white-space: initial;
}
@media screen and (max-width: 992px) {
    .text--service__rotate{
        border-left:100px solid  transparent;
        position: relative;
        .text--service__mobile{
            color: rgba(0, 0, 0, 0.2);
            font-size: 25px;
            position: absolute;
            bottom: 0;
            background: none;
            transform-origin: -15px 85px;
            transform: rotate(-90deg);
            width: 530px;
        }
    }
    .border--left__mobile{
        border-left: 3px solid #EF4E23;
    }
}

.jd-home-specialize {
    padding: 1px 0 !important;
    .jd-home-text {
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36 !important;
        letter-spacing: normal;
        text-align: center;
        color: #8e8e8e;
    }
}

.headline p {
    line-height: 1.03;
    letter-spacing: 1.74px;
    text-align: center;
    color: #959595;
    padding: 6.5px 0 !important;
}
</style>