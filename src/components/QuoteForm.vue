<template>
    <b-form id="get-quote" class="p-3 d-none d-lg-block" :class="{ 'd-must-show' : shown, 'd-lg-none-important' : hideDesktop}">
        <section class="position-relative index-1">
            <div class="text-right mb-5 d-block d-lg-none">
                <a :href="`tel:650 995 7500`" class="jd-font-medium jd-text-20">
                    <i class="fas fa-phone-square"></i>
                    650 995 7500
                </a>
            </div>
            <h3 class="jd-text-light jd-font-medium mb-3 jd-text-12 text-center text-lg-left jd-text-20__mobile">GET YOUR FREE QUOTE</h3>
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
                        <datepicker v-validate="'required'" data-vv-name="date" placeholder="Date" v-model="quote.date" input-class="jd-input w-100 pl-25__input"></datepicker>
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
    import Datepicker from 'vuejs-datepicker';

    export default {
        components: { Datepicker },
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
        watch: {
            shown : function (newVal) {
                if(newVal) {
                    document.querySelector('body').classList.add('overflow-hidden');
                    document.querySelector('html').classList.add('overflow-hidden');
                }
                else {
                    document.querySelector('body').classList.remove('overflow-hidden');
                    document.querySelector('html').classList.remove('overflow-hidden');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    /deep/.pl-25__input{
        padding-left: 25px;
        font-size: 12px;
        padding-top: 6px;
        padding-bottom: 6px;
    }

    /deep/.vdp-datepicker__calendar{
        right: 0;
        border: none;
        background: rgba(255,255,255,0.8);
        @media screen and (max-width: 992px){
            width: 100%;
        }
        @media screen and (min-width: 992px){
            width: 230px;
        }
        .cell.selected{
            background: #EF4E23 !important;
            color: #fff;
        }

        .cell:not(.day-header):hover{
            border: 1px solid #EF4E23 !important;
        }

        .cell{
            font-size: 12px;
            height: 30px;
            line-height: 30px;
        }

        .cell.day-header{
            color: #EF4E23;
        }

        header {
            position: relative;
            z-index: 5;
            span {
                background: #EF4E23 !important;
                color:#fff;

                &.prev:after{
                    content: '';
                    background: url('/img/icons/arrow_left_white.svg') no-repeat;
                    background-size: contain;
                    width: 15px;
                    height: 15px;
                    border: none;
                    margin-left: 0;
                }

                &.next:after{
                    content: '';
                    background: url('/img/icons/arrow_left_white.svg') no-repeat;
                    background-size: contain;
                    width: 15px;
                    height: 15px;
                    transform: rotate(180deg);
                    transform-origin: 0 2.5px;
                    border: none;
                    margin-left: 10px;
                }

                &.day__month_btn{
                    font-size: 12px;
                }
            }
            + div {
                &:after {
                    content: "";
                    position: absolute;
                    bottom: -10px;
                    height: 10px;
                    background: #EF4E23;
                    width: 100%;
                    left: 0;
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

                span {
                    position: relative;
                    z-index: 2;
                }
            }
        }

    }
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
        right: 120px;
        top: 0;
        width: 254px;
        height: calc(100% + 30px);
        overflow-y: auto;

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
            padding-bottom: 150px !important;
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