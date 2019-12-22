<template>
    <div id="specialize">
        <section class="headline jd-text-dark p-4">
            <b-container>
                <p class="jd-text-29 m-0 text-center text-uppercase jd-text-20__mobile">
                    We specialize in the following residential & commercial hauling services:
                </p>
            </b-container>
        </section>

        <b-container class="mt-3 mb-5 pb-5" data-aos="fade-up"  data-aos-duration="1000">
            <section class="d-flex text--service__rotate">
                <h3 class="text--service__mobile d-block d-lg-none text-uppercase jd-font-bold">
                    Full Service Junk Removal San Francisco Bay Area
                </h3>

                <b-row class="flex-lg-grow-1 flex-grow-0 d-flex flex-column flex-lg-row border--left__mobile">
                    <b-col class="d-flex mt-0 mt-lg-3" v-for="(service, key) in services" :key="`service-${key}`">
                        <ul class="list-unstyled m-0">
                            <li v-for="(item, itemKey) in service" :key="`service-item-${itemKey}`">
                                <a href="#" class="jd-text-dark py-1 d-block jd-text-18 align-items-center d-flex">
                                    <img src="/img/icons/arrow_left.svg"  alt="" width="18px" class="mr-2 d-none d-lg-block"/>
                                    {{ item.label }}
                                </a>
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </section>
        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    [
                        { label: 'Furniture Removal' },
                        { label: 'Office Clean Outs' },
                        { label: 'Appliance Removal' },
                        { label: 'House Clean Outs' },
                        { label: 'Construction Debris' },
                    ],
                    [
                        { label: 'Foreclosure Clean Outs' },
                        { label: 'Estate Clean Outs' },
                        { label: 'Property Clean Outs' },
                        { label: 'Water Heater Removal' },
                        { label: 'Junk Hauling Services' },
                    ],
                    [
                        { label: 'Garbage Removal' },
                        { label: 'E-Waste Removal' },
                        { label: 'TV Disposal & Recycle' },
                        { label: 'Trash Removal' },
                        { label: 'Refrigerator Disposal' },
                    ]
                ]
            }
        }
    }
</script>

<style scoped lang="scss">
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
</style>