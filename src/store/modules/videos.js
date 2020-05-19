import { RepositoryFactory } from "../../api/RepositoryFactory";

export default {
    state: {
        videos: []
    },
    mutations: {
        SET_VIDEOS: (state, payload) => {
            state.videos = payload;
        }
    },
    actions: {
        GET_VIDEOS: async (context, payload) => {
            RepositoryFactory.get('site').getVideos().then(({ data: { videos } }) => {
                context.commit('SET_VIDEOS', videos);
            })
        }
    },
    getters: {
        VIDEOS: state => {
            return state.videos;
        }
    }
}