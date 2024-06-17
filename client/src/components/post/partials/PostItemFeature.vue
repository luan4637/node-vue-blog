<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    post: Object
})
</script>

<template>
    <div class="post-item post-item-feature">
        <div class="post-item-inner">
            <figure class="post-item-image"
                ><img :src="(post.picture ? post.picture : '/img/600x450.png')" :alt="post.title" /></figure>
            <h3 class="post-item-title"><RouterLink :to="{ name: 'postDetail', params: { id: post.id }}">{{ post.title }}</RouterLink></h3>
        </div>
    </div>
</template>
