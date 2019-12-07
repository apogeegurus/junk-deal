<template>
    <b-form>
        <b-form-group class="mb-3">
            <b-input type="text" placeholder="Enter Name" class="jd-input"  v-validate="'required'" name="name"></b-input>
            <span v-if="veeErrors.has('name')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('name') }}
                                    </span>
        </b-form-group>
        <b-form-group class="mb-3">
            <b-input type="email" placeholder="Enter Email" class="jd-input" v-validate="'required|email'" name="email"></b-input>
            <span v-if="veeErrors.has('email')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('email') }}
                                    </span>
        </b-form-group>
        <b-form-group class="mb-3">
            <b-input type="text" placeholder="Enter Subject" class="jd-input" v-validate="'required'" name="subject"></b-input>
            <span v-if="veeErrors.has('subject')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('subject') }}
                                    </span>
        </b-form-group>
        <b-form-group class="mb-3">
            <b-textarea placeholder="Enter Message" rows="4" class="jd-input" v-validate="'required|min:50'" name="message"></b-textarea>
            <span v-if="veeErrors.has('message')" class="text-danger jd-text-12">
                                        {{ veeErrors.first('message') }}
                                    </span>
        </b-form-group>

        <b-btn variant="primary" block>SUBMIT</b-btn>
    </b-form>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>