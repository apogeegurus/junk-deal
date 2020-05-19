import Repository from './Repository';

const resource = '/info';

export default {
    get()      {return Repository.get(`${resource}`);},
    getTestimonials() {return Repository.get(`${resource}/testimonials`);},
    getSliders() {return Repository.get(`${resource}/slider/images`);},
    submitForm(payload) {return Repository.post(`/get/quote`, payload);},
    contact(payload) {return Repository.post(`/contact`, payload);},
    getVideos() {return Repository.get(`${resource}/videos`);},
    getAbout() {return Repository.get(`${resource}/about`);},
    getHome() {return Repository.get(`${resource}/home/page`);},
    getSpecialize() {return Repository.get(`${resource}/specializes`);},
}