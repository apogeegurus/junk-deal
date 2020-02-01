import { RepositoryFactory } from "../../api/RepositoryFactory";

export default {
    state: {
        services: []
    },
    mutations: {
        SET_SERVICES: (state, payload) => {
            state.services = payload;
        }
    },
    actions: {
        GET_SERVICES_NAMES: async (context, payload) => {
            RepositoryFactory.get('service').getNames().then(({ data: { services } }) => {
                context.commit('SET_SERVICES', services);
            })
        }
    },
    getters: {
        SERVICES: state => {
            return state.services;
        }
    }
}