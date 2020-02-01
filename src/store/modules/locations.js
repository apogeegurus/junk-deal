import { RepositoryFactory } from "../../api/RepositoryFactory";

export default {
    state: {
        locations: {}
    },
    mutations: {
        SET_LOCATIONS: (state, payload) => {
            state.locations = payload;
        }
    },
    actions: {
        GET_LOCATION_NAMES: async (context, payload) => {
            RepositoryFactory.get('location').getNames().then(({ data: { locations } }) => {
                context.commit('SET_LOCATIONS', locations);
            })
        }
    },
    getters: {
        LOCATIONS: state => {
            return state.locations;
        }
    }
}