import { RepositoryFactory } from "../../api/RepositoryFactory";

export default {
    state: {
        sliders: []
    },
    mutations: {
        SET_SLIDER: (state, payload) => {
            state.sliders = payload;
        }
    },
    actions: {
        GET_SLIDERS: async (context, payload) => {
            return RepositoryFactory.get('site').getSliders().then(({ data: { sliders } }) => {
                context.commit('SET_SLIDER', sliders);
            })
        }
    },
    getters: {
        SLIDERS: state => {
            return state.sliders;
        }
    }
}