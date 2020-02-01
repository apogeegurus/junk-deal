import Repository from './Repository';

const resource = '/info';

export default {
    get()      {return Repository.get(`${resource}`);},
    getTestimonials() {return Repository.get(`${resource}/testimonials`);},
    getSliders() {return Repository.get(`${resource}/slider/images`);},
}