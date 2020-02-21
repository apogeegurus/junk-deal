<template>
    <b-form id="get-quote" class="p-3 d-none d-lg-block"
            :class="{ 'd-must-show' : shown, 'd-lg-none-important' : hideDesktop}">
        <section class="position-relative index-1">
            <div class="text-right mb-5 d-block d-lg-none">
                <a :href="`tel:650 995 7500`" class="jd-font-medium jd-text-20">
                    <i class="fas fa-phone-square"></i>
                    650 995 7500
                </a>
            </div>
            <h3 class="jd-text-light jd-font-medium mb-3 jd-text-16 text-center jd-text-18__mobile get--quote-free-text">
                GET YOUR FREE QUOTE</h3>
            <b-form-group class="mb-4">
                <b-input type="text" placeholder="Enter Name" class="jd-input" v-validate="'required|max:80'"
                         v-model="quote.name"
                         name="name"></b-input>
                <span v-if="veeErrors.has('name')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('name') }}
                                </span>
            </b-form-group>
            <b-form-group class="mb-4">
                <b-input type="text" placeholder="Enter Phone number" class="jd-input" v-validate="'required|max:80'"
                         v-model="quote.phone"
                         name="phone"></b-input>
                <span v-if="veeErrors.has('phone')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('phone') }}
                                </span>
            </b-form-group>
            <b-form-group class="mb-4">
                <b-input type="email" placeholder="Enter Email" class="jd-input" v-validate="'required|email|max:80'"
                         v-model="quote.email"
                         name="email"></b-input>
                <span v-if="veeErrors.has('email')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('email') }}
                                </span>
            </b-form-group>
            <b-row>
                <b-col cols="12" md="6" class="pr-md-2">
                    <b-form-group class="mb-4">
                        <b-input type="text" placeholder="Enter Zip code" class="jd-input"
                                 v-validate="'required|max:80'" v-model="quote.zip_code"
                                 name="zip_code" data-vv-as="zip code"></b-input>
                        <span v-if="veeErrors.has('zip_code')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('zip_code') }}
                                </span>
                    </b-form-group>
                </b-col>
                <b-col cols="12" md="6" class="pl-md-2">
                    <b-form-group class="mb-4 position-relative">
                        <i class="fas fa-calendar-alt position-absolute calendar-icon"></i>
                        <datepicker v-validate="'required'" data-vv-name="date" placeholder="Date"
                                    v-model="quote.date" input-class="jd-input w-100 pl-25__input"></datepicker>
                        <span v-if="veeErrors.has('date')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('date') }}
                                </span>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-form-group class="mb-4">
                <b-textarea placeholder="Enter Description" rows="4" class="jd-input" v-validate="'required|min:50'"
                            v-model="quote.description"
                            name="description"></b-textarea>
                <span v-if="veeErrors.has('description')" class="text-danger jd-text-10 position-absolute">
                                    {{ veeErrors.first('description') }}
                                </span>
            </b-form-group>

            <b-btn variant="primary" block class="submit-btn-qoute jd-text-12 p-0 br-150" @click="submitForm">SUBMIT
            </b-btn>
            <b-btn variant="secondary" block @click="$emit('update:shown', false)"
                   class="d-lg-none d-block jd-text-12 p-0 br-150">Cancel
            </b-btn>
        </section>
    </b-form>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    import {RepositoryFactory} from "../api/RepositoryFactory";

    export default {
        components: {Datepicker},
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
                    name: null,
                    email: null,
                    phone: null,
                    zip_code: null,
                    date: null,
                    description: null
                }
            }
        },
        watch: {
            shown: function (newVal) {
                if (newVal) {
                    document.querySelector('body').classList.add('overflow-hidden');
                    document.querySelector('html').classList.add('overflow-hidden');
                } else {
                    document.querySelector('body').classList.remove('overflow-hidden');
                    document.querySelector('html').classList.remove('overflow-hidden');
                }
            }
        },
        methods: {
            submitForm() {
                this.$validator.validateAll().then((res) => {
                    if (res) {
                        RepositoryFactory.get('site').submitForm(this.quote)
                            .then((res) => {
                                this.quote = {
                                    name: null,
                                    email: null,
                                    phone: null,
                                    zip_code: null,
                                    date: null,
                                    description: null
                                };
                                this.$validator.reset();
                                this.veeErrors.clear();
                                this.$snotify.success("Your Quote has been submitted, We will contact you soon.");
                                this.$router.push({ name: 'thankyou' });
                            }).catch((err) => {
                            if (err.response.status === 400) {
                                this.$snotify.error(err.response.data.message);
                            } else if (err.response.status === 422) {
                                let errors = err.response.data.errors;
                                this.$snotify.error("PLease fix bellow errors.");
                                Object.keys(errors).map((item) => this.veeErrors.add({
                                    field: item,
                                    msg: errors[item].join(',')
                                }));
                            } else {
                                this.$snotify.error("Oops, Something went wrong please try again later.");
                            }
                        })
                    }
                })
            }
        },
        created() {
            window.onresize = () => {
                this.$emit('update:shown', false);
            }
        }
    }
</script>

<style scoped lang="scss">
    .get--quote-free-text {
        opacity: 0.8;
        line-height: 1.38;
        letter-spacing: 0.8px;
        text-align: center;
        color: #ffffff;
    }

    /deep/ .pl-25__input {
        padding-left: 25px;
        font-size: 12px;
        padding-top: 6px;
        padding-bottom: 6px;
    }

    /deep/ .vdp-datepicker__calendar {
        right: 0;
        border: none;
        background: rgba(255, 255, 255, 0.8);
        @media screen and (max-width: 991px) {
            width: 100%;
            bottom: 45px;
        }
        @media screen and (min-width: 991px) {
            width: 230px;
        }

        .cell.selected {
            background: #EF4E23 !important;
            color: #fff;
        }

        .cell:not(.day-header):hover {
            border: 1px solid #EF4E23 !important;
        }

        .cell {
            font-size: 12px;
            height: 30px;
            line-height: 30px;
        }

        .cell.day-header {
            color: #EF4E23;
        }

        header {
            position: relative;
            z-index: 5;

            span {
                background: #EF4E23 !important;
                color: #fff;

                &.prev:after {
                    content: '';
                    background: url('/img/icons/arrow_left_white.svg') no-repeat;
                    background-size: contain;
                    width: 15px;
                    height: 15px;
                    border: none;
                    margin-left: 0;
                }

                &.next:after {
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

                &.day__month_btn {
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
                    @-moz-document url-prefix() {
                        filter: blur(27px);
                        background-image: -webkit-gradient(linear, left top, left bottom, from(#444549), to(rgba(255, 255, 255, 0.5)));
                    }
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

    .calendar-icon {
        z-index: 1;
        left: 5px;
        top: 7px;

        /deep/ + div {
            #tj-datetime-input {
                padding-left: 22px !important;
            }
        }
    }

    .d-must-show {
        display: block !important;
    }

    /deep/ .input-datetime {
        .year-month-wrapper {
            text-align: center;
        }

        .headers {
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

            &::placeholder {
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
            @-moz-document url-prefix() {
                filter: blur(27px);
                background-image: -webkit-gradient(linear, left top, left bottom, from(#444549), to(rgba(255, 255, 255, 0.5)));
            }
            @media screen and (max-width: 991px) {
                position: fixed;
            }
        }

        @media screen and (max-width: 991px) {
            position: fixed;
            top: 95px;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 100%;
            z-index: 6;
            padding-bottom: 180px !important;
        }
    }

    @media screen and (max-width: 991px) {
        .submit-btn-qoute {
            background: #fff;
            color: #EF4E23;
        }
    }

    @media screen and (min-width: 991px) {
        .d-lg-none-important {
            display: none !important;
        }
    }
</style>