<template>
    <b-form id="get-quote" class="p-3 d-none d-lg-block overflow-auto" :class="{ 'd-must-show' : shown, 'd-lg-none-important' : hideDesktop}">
        <section class="position-relative index-1">
            <h3 class="jd-text-light jd-font-medium mb-3 jd-text-20">GET YOUR FREE QUOTE</h3>
            <b-form-group class="mb-4">
                <b-input type="text" placeholder="Enter Name" class="jd-input" v-validate="'required'"
                         name="name"></b-input>
                <span v-if="veeErrors.has('name')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('name') }}
                                </span>
            </b-form-group>
            <b-form-group class="mb-4">
                <b-input type="text" placeholder="Enter Phone number" class="jd-input" v-validate="'required'"
                         name="phone"></b-input>
                <span v-if="veeErrors.has('phone')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('phone') }}
                                </span>
            </b-form-group>
            <b-form-group class="mb-4">
                <b-input type="email" placeholder="Enter Email" class="jd-input" v-validate="'required|email'"
                         name="email"></b-input>
                <span v-if="veeErrors.has('email')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('email') }}
                                </span>
            </b-form-group>
            <b-row>
                <b-col>
                    <b-form-group class="mb-4">
                        <b-input type="text" placeholder="Enter Zip code" class="jd-input" v-validate="'required'"
                                 name="zip_code" data-vv-as="zip code"></b-input>
                        <span v-if="veeErrors.has('zip_code')" class="text-danger jd-text-12 position-absolute">
                                    {{ veeErrors.first('zip_code') }}
                                </span>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group class="mb-4">
                        <b-input type="date" placeholder="Enter date" class="jd-input" v-validate="'required'"
                                 name="date"></b-input>
                        <span v-if="veeErrors.has('date')" class="text-danger jd-text-12">
                                    {{ veeErrors.first('date') }}
                                </span>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-group class="mb-4">
                <b-textarea placeholder="Enter Description" rows="4" class="jd-input" v-validate="'required|min:50'"
                            name="description"></b-textarea>
                <span v-if="veeErrors.has('description')" class="text-danger jd-text-12">
                                    {{ veeErrors.first('description') }}
                                </span>
            </b-form-group>

            <b-btn variant="primary" block class="submit-btn-qoute">SUBMIT</b-btn>
            <b-btn variant="secondary" block @click="$emit('update:shown', false)" class="d-lg-none d-block">Cancel
            </b-btn>
        </section>
    </b-form>
</template>

<script>
    export default {
        props: {
            shown: {
                type: Boolean,
                default: false
            },
            hideDesktop: true
        },
        watch: {
            shown : function (newVal) {
                if(newVal) document.body.classList.add('overflow-hidden');
                else document.body.classList.remove('overflow-hidden');
            }
        }
    }
</script>

<style scoped lang="scss">
    .index-1 {
        z-index: 1;
    }

    .d-must-show {
        display: block !important;
    }

    #get-quote {
        position: absolute;
        right: 15px;
        top: 20px;
        overflow: hidden;

        &:before {
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
        .submit-btn-qoute {
            background: #fff;
            color: #EF4E23;
        }
    }

    @media screen and (min-width: 992px) {
        .d-lg-none-important{
            display: none !important;
        }
    }
</style>