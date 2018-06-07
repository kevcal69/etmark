import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    state: {
        isAuth: false,
        doc_raw_content: '',
        doc_title: ''
    },

    mutations: {
        edit_raw_content: (state, content) => state.doc_raw_content = content,
        edit_title: (state, title) => state.doc_title = title
    },

    actions: {
        saveDoc(context, payload) {
            let form = new FormData();
            form.set('content', payload.content);
            form.set('title', payload.title);
            return axios.post(
                'api/save-doc',
                form,
                {
                    xsrfCookieName: 'csrftoken',
                    xsrfHeaderName: 'X-CSRFToken',
                }
            )
            .catch(error => {
                return error.response
            })
        },
        fetchContent(context, short_url) {
            return axios.get(`api/${short_url}`)
                .then((response) => {
                    let { data } = response;
                    context.commit('edit_raw_content', data.content)
                    context.commit('edit_title', data.title)
                    return data;
                })
        }
    }

})
