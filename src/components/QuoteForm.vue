<template>
    <b-form id="get-quote" class="p-3 d-none d-lg-block" :class="{ 'd-must-show' : shown, 'd-lg-none-important' : hideDesktop}">
        <section class="position-relative index-1">
            <h3 class="jd-text-light jd-font-medium mb-3 jd-text-12">GET YOUR FREE QUOTE</h3>
            <b-form-group class="mb-4">
                <b-input type="text" placeholder="Enter Name" class="jd-input" v-validate="'required'"
                         name="name"></b-input>
                <span v-if="veeErrors.has('name')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('name') }}
                                </span>
            </b-form-group>
            <b-form-group class="mb-4">
                <b-input type="text" placeholder="Enter Phone number" class="jd-input" v-validate="'required'"
                         name="phone"></b-input>
                <span v-if="veeErrors.has('phone')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('phone') }}
                                </span>
            </b-form-group>
            <b-form-group class="mb-4">
                <b-input type="email" placeholder="Enter Email" class="jd-input" v-validate="'required|email'"
                         name="email"></b-input>
                <span v-if="veeErrors.has('email')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('email') }}
                                </span>
            </b-form-group>
            <b-row>
                <b-col cols="12" md="6" class="pr-md-2">
                    <b-form-group class="mb-4">
                        <b-input type="text" placeholder="Enter Zip code" class="jd-input" v-validate="'required'"
                                 name="zip_code" data-vv-as="zip code"></b-input>
                        <span v-if="veeErrors.has('zip_code')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('zip_code') }}
                                </span>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="6" class="pl-md-2">
                    <b-form-group class="mb-4 position-relative">
                        <i class="fas fa-calendar-alt position-absolute calendar-icon"></i>
                        <datetime class="input-datetime" v-validate="'required'" data-vv-name="date" placeholder="Date" v-model="quote.date"></datetime>
                        <span v-if="veeErrors.has('date')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('date') }}
                                </span>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-group class="mb-4">
                <b-textarea placeholder="Enter Description" rows="4" class="jd-input" v-validate="'required|min:50'"
                            name="description"></b-textarea>
                <span v-if="veeErrors.has('description')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('description') }}
                                </span>
            </b-form-group>

            <b-btn variant="primary" block class="submit-btn-qoute jd-text-12 p-0 br-150">SUBMIT</b-btn>
            <b-btn variant="secondary" block @click="$emit('update:shown', false)" class="d-lg-none d-block jd-text-12 p-0 br-150">Cancel
            </b-btn>
        </section>
    </b-form>
</template>

<script>
    import datetime from 'vuejs-datetimepicker'

    export default {
        components: { datetime },
        props: {
            shown: {
                type: Boolean,
                default: false
            },
            hideDesktop: true
        },
        data() {
            return {
                quote: {
                    date: null
                }
            }
        },
        mounted() {
          document.querySelector('.input-datetime input#tj-datetime-input').setAttribute('placeholder', 'Date');
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

    .calendar-icon{
        z-index: 1;
        left: 5px;
        top: 7px;
        /deep/+ div {
            #tj-datetime-input{
                padding-left: 22px !important;
            }
        }
    }

    .d-must-show {
        display: block !important;
    }

    /deep/.input-datetime{
        .year-month-wrapper{
            text-align: center;
        }
        .headers{
            text-align: center;
            & + div {
                text-align: center;
            }
        }
    }

    .br-150 {
        border-radius: 150px;
    }

    #get-quote {
        position: absolute;
        right: 15px;
        top: 0;
        width: 254px;
        height: 100%;

        input, textarea {
            font-size: 12px;
            &::placeholder{
                font-size: 12px;
            }
        }

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