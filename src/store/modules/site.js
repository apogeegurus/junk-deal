import { RepositoryFactory } from "../../api/RepositoryFactory";

export default {
    state: {
        site_details: {}
    },
    mutations: {
        SET_SITE_DETAILS: (state, payload) => {
            state.site_details = payload;
        }
    },
    actions: {
        GET_SITE_DETAILS: async (context, payload) => {
            RepositoryFactory.get('site').get().then(({ data: { settings } }) => {
                context.commit('SET_SITE_DETAILS', settings);
            })
        },
    },
    getters: {
        SITE_DETAILS: state => {
            return state.site_details;
        }
    }
}