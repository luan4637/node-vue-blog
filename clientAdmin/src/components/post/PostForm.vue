<script>
    import { mapState } from 'pinia'
    import { usePostStore } from '../../stores/PostStore'

    export default {
        setup() {
            const postStore = usePostStore();
            const postObject = {
                title: '',
                content: '',
                position: '',
                published: true,
            };

            return {
                postStore,
                postObject
            };
        },
        computed: {
            ...mapState(usePostStore, ['loading', 'post'])
        },
        methods: {
            getPost(id) {
                this.postStore.getPost(id);
            },
            onSubmitForm() {
                this.postStore.submitPost(this.post);
            }
        },
        created() {
            if (this.$route.params.id) {
                this.getPost(this.$route.params.id);
            } else {
                this.post = Object.assign(this.post, this.postObject);
            }
        }
    }
</script>

<template>
    <form>
        <div class="row mb-3">
            <label class="col-2 col-form-label">Title</label>
            <p class="col-10">
                <input v-model="post.title" class="form-control" />
            </p>
        </div>
        <div class="row mb-3">
            <label class="col-2 col-form-label">Content</label>
            <p class="col-10">
                <textarea v-model="post.content" class="form-control"></textarea>
            </p>
        </div>
        <div class="row mb-3">
            <label class="col-2 col-form-label">Position</label>
            <p class="col-10">
                <select v-model="post.position" class="form-select">
                    <option value="">NONE</option>
                    <option value="FEATURE">FEATURE</option>
                </select>
            </p>
        </div>
        <div class="row mb-3">
            <label class="col-2 col-form-label">Published</label>
            <p class="col-10">
                <input type="checkbox" v-model="post.published" />
            </p>
        </div>
        <div class="btn-group">
            <RouterLink :to="{ name: 'home'}" class="btn btn-secondary">Back</RouterLink>
            <button type="button" class="btn btn-primary pull-right" @click="onSubmitForm">Save</button>
        </div>
    </form>
</template>