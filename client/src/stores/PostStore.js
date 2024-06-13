import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
import { API_URL } from "./constants";

export const usePostStore = defineStore('postStore', {
    state: () => ({
        loading: false,
        total: 0,
        skip: 0,
        limit: 16,
        posts: ref([]),
        post: ref({}),
    }),
    actions: {
        getPosts(skip, limit) {
            let URL = API_URL + "/post?skip=" + (skip ?? 0) + "&limit=" + (limit ?? 10);
            const _this = this;
            this.loading = true;
            axios.get(URL).then(function(response) {
                _this.loading = false;
                _this.posts = response.data.data;
                _this.total = response.data.total;
                _this.skip = 0;
            });
        },
        getPost(id) {
            const URL = API_URL + "/post/" + id;
            const _this = this;
            this.loading = true;
            _this.post = {};
            axios.get(URL).then(function(response) {
                _this.loading = false;
                _this.post = response.data;
            });
        },
    },
});
