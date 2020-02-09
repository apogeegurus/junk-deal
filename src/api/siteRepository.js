import Repository from './Repository';

const resource = '/info';

export default {
    get()      {return Repository.get(`${resource}`);},
    getTestimonials() {return Repository.get(`${resource}/testimonials`);},
    getSliders() {return Repository.get(`${resource}/slider/images`);},
    submitForm(payload) {return Repository.post(`/get/quote`, payload);},
    contact(payload) {return Repository.post(`/contact`, payload);},
    getVideos() {return Repository.get(`${resource}/videos`);},
}