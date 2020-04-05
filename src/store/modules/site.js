import { RepositoryFactory } from "../../api/RepositoryFactory";

export default {
    state: {
        site_details: {},
        home_page: {}
    },
    mutations: {
        SET_SITE_DETAILS: (state, payload) => {
            state.site_details = payload;
        },
        SET_HOME_DETAILS: (state, payload) => {
            state.home_page = payload;
        },
    },
    actions: {
        GET_SITE_DETAILS: async (context, payload) => {
            RepositoryFactory.get('site').get().then(({ data: { settings } }) => {
                context.commit('SET_SITE_DETAILS', settings);
            })
        },
        GET_HOME_PAGE_INFO: async (context, payload) => {
            RepositoryFactory.get('site').getHome().then(({ data: { home } }) => {
                context.commit('SET_HOME_DETAILS', home);
            })
        },
    },
    getters: {
        SITE_DETAILS: state => {
            return state.site_details;
        },
        HOME_PAGE: state => {
            return state.home_page;
        }
    }
}