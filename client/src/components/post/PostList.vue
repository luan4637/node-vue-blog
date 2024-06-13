<script>
    import { mapState } from 'pinia'
    import { ref } from 'vue'
    import Pagination from '../Pagination.vue'
    import PostItem from './partials/PostItem.vue'
    import { usePostStore } from '../../stores/PostStore'

    export default {
        setup() {
            const postStore = usePostStore();
            const currentPage = ref(1);

            return {
                postStore,
                currentPage
            };
        },
        components: {
            PostItem,
            Pagination
        },
        computed: {
            ...mapState(usePostStore, ['loading', 'posts', 'total', 'skip', 'limit']),
        },
        methods: {
            handleClickPagination(pageNumber) {
                this.getPosts((pageNumber - 1) * 16, 16);
                this.currentPage = pageNumber;
            },
            getPosts(skip, limit) {
                this.postStore.getPosts(skip, limit);
            }
        },
        created() {
            this.getPosts();
        },
    }
</script>

<template>
    <div class="posts-list-wrapper">
        <div class="posts-list">
            <ul>
                <li v-for="post in posts">
                    <PostItem :post=post />
                </li>
            </ul>
        </div>
        <Pagination
            :currentPage="currentPage"
            :perPage="10"
            :total="total"
            :totalPages="Math.ceil(total / limit)"
            :maxVisibleButtons="5"
            @pagechanged="this.handleClickPagination" />
    </div>
</template>
