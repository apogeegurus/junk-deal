<template>
    <div class="position-relative">
        <carousel autoplay :per-page="1" :pagination-enabled="false" easing="ease" loop :autoplay-timeout="10000">
            <slide>
                <b-img src="/img/home/slider/slider-1.jpg" class="w-100"></b-img>
            </slide>
            <slide>
                <b-img src="/img/home/slider/slider-2.jpg" class="w-100"></b-img>
            </slide>
        </carousel>

        <div class="w-100 position-absolute w-100 h-100 top-0">
            <b-container class="position-relative w-100 h-100">
                <b-img src="/img/home/heroes.png" class="home-heroes d-none d-lg-block"></b-img>
                <b-form id="get-quote" class="p-3 d-none d-lg-block" :class="{ 'd-must-show' : openQuote }">
                    <section class="position-relative index-1">
                        <h3 class="jd-text-light jd-font-medium mb-3 jd-text-20">GET YOUR FREE QUOTE</h3>
                        <b-form-group class="mb-4">
                            <b-input type="text" placeholder="Enter Name" class="jd-input"  v-validate="'required'" name="name"></b-input>
                            <span v-if="veeErrors.has('name')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('name') }}
                                </span>
                        </b-form-group>
                        <b-form-group class="mb-4">
                            <b-input type="text" placeholder="Enter Phone number" class="jd-input"  v-validate="'required'" name="phone"></b-input>
                            <span v-if="veeErrors.has('phone')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('phone') }}
                                </span>
                        </b-form-group>
                        <b-form-group class="mb-4">
                            <b-input type="email" placeholder="Enter Email" class="jd-input" v-validate="'required|email'" name="email"></b-input>
                            <span v-if="veeErrors.has('email')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('email') }}
                                </span>
                        </b-form-group>
                        <b-row>
                            <b-col>
                                <b-form-group class="mb-4">
                                    <b-input type="text" placeholder="Enter Zip code" class="jd-input" v-validate="'required'" name="zip_code" data-vv-as="zip code"></b-input>
                                    <span v-if="veeErrors.has('zip_code')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('zip_code') }}
                                </span>
                                </b-form-group>
                            </b-col>
                            <b-col>
                                <b-form-group class="mb-4">
                                    <b-input type="date" placeholder="Enter date" class="jd-input" v-validate="'required'" name="date"></b-input>
                                    <span v-if="veeErrors.has('date')" class="text-danger jd-text-12">
                                    {{ veeErrors.first('date') }}
                                </span>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-form-group class="mb-4">
                            <b-textarea placeholder="Enter Description" rows="4" class="jd-input" v-validate="'required|min:50'" name="description"></b-textarea>
                            <span v-if="veeErrors.has('description')" class="text-danger jd-text-12">
                                    {{ veeErrors.first('description') }}
                                </span>
                        </b-form-group>

                        <b-btn variant="primary" block class="submit-btn-qoute">SUBMIT</b-btn>
                        <b-btn variant="secondary" block @click="openQuote = false" class="d-lg-none d-block">Cancel</b-btn>
                    </section>
                </b-form>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                openQuote: false
            }
        },
        created() {
            this.$root.$on('openQuote',  () => {
                this.openQuote = true;
            })
        }
    }
</script>

<style scoped lang="scss">
.top-0{
    top: 0;
}
#get-quote{
    position: absolute;
    right: 15px;
    top: 20px;
    overflow: hidden;
    &:before{
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        backdrop-filter: blur(27px);
    }
    @media screen and (max-width: 992px) {
        position: fixed;
        top: 95px;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 6;
    }
}

@media screen and (max-width: 992px) {
    .submit-btn-qoute{
        background: #fff;
        color: #EF4E23;
    }
}
.home-heroes{
    position: absolute;
    bottom: -20px;
    z-index: 1;
    left: 0;
    right: 0;
    margin: auto;
}
    .index-1{
        z-index: 1;
    }

    .d-must-show{
        display: block !important;
    }
</style>