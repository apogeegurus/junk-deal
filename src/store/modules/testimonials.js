import { RepositoryFactory } from "../../api/RepositoryFactory";

export default {
    state: {
        testimonials: []
    },
    mutations: {
        SET_TESTIMONIALS: (state, payload) => {
            state.testimonials = payload;
        }
    },
    actions: {
        GET_TESTIMONIALS: async (context, payload) => {
            RepositoryFactory.get('site').getTestimonials().then(({ data: { testimonials } }) => {
                context.commit('SET_TESTIMONIALS', testimonials);
            })
        }
    },
    getters: {
        TESTIMONIALS: state => {
            return state.testimonials;
        }
    }
}