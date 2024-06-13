<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    post: Object
})
</script>

<template>
    <div class="post-item">
        <div class="inner">
            <h3><RouterLink :to="{ name: 'postDetail', params: { id: post.id }}">{{ post.title }}</RouterLink></h3>
            <p>{{ post.content }}</p>
            <div>
                <ul>
                    <li v-for="tag in post.tags">{{ tag }}</li>
                </ul>
                <RouterLink :to="{ name: 'postDetail', params: { id: post.id }}" class="btn btn-read-more">Read more</RouterLink>
            </div>
        </div>
    </div>
</template>
