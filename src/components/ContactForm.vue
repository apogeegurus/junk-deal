<template>
    <b-form>
        <b-form-group class="mb-3">
            <b-input type="text" placeholder="Enter Name" class="jd-input"  v-validate="'required'" name="name" v-model="contact.name"></b-input>
            <span v-if="veeErrors.has('name')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('name') }}
                                    </span>
        </b-form-group>
        <b-form-group class="mb-3">
            <b-input type="email" placeholder="Enter Email" class="jd-input" v-validate="'required|email'" name="email" v-model="contact.email"></b-input>
            <span v-if="veeErrors.has('email')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('email') }}
                                    </span>
        </b-form-group>
        <b-form-group class="mb-3">
            <b-input type="text" placeholder="Enter Subject" class="jd-input" v-validate="'required'" name="subject" v-model="contact.subject"></b-input>
            <span v-if="veeErrors.has('subject')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('subject') }}
                                    </span>
        </b-form-group>
        <b-form-group class="mb-3">
            <b-textarea placeholder="Enter Message" rows="4" class="jd-input" v-validate="'required'" name="message" v-model="contact.message"></b-textarea>
            <span v-if="veeErrors.has('message')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('message') }}
                                    </span>
        </b-form-group>

        <b-btn variant="primary" block @click="submit">SUBMIT</b-btn>
    </b-form>
</template>

<script>
    import {RepositoryFactory} from "../api/RepositoryFactory";

    export default {
        data() {
            return {
                contact: {
                    name: null,
                    email: null,
                    subject: null,
                    message: null
                }
            }
        },
        methods: {
            submit() {
                this.$validator.validateAll().then((res) => {
                    if(res) {
                        RepositoryFactory.get('site').contact(this.contact)
                            .then((res) => {
                            this.contact = {
                                name: null,
                                email: null,
                                subject: null,
                                message: null
                            };
                            this.$validator.reset();
                            this.veeErrors.clear();
                            this.$snotify.success("Successfully submitted, We will contact you soon.")
                        }).catch((err) => {
                           if (err.response.status === 422) {
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
        }
    }
</script>

<style scoped>

</style>