<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    post: Object
})
</script>

<template>
    <div class="post-item">
        <div class="post-item-inner">
            <figure class="post-item-image"
                ><img :src="(post.picture ? post.picture : '/img/600x450.png')" :alt="post.title" /></figure>
            <h3 class="post-item-title"><RouterLink :to="{ name: 'postDetail', params: { id: post.id }}">{{ post.title }}</RouterLink></h3>
            <div class="post-item-info"><strong>Author</strong><span>{{ post.user.firstName }} {{ post.user.lastName }}</span></div>
            <div class="post-item-info"><strong>Created Date</strong><span>{{ post.createdAt }}</span></div>
        </div>
    </div>
</template>
