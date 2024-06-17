<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue';
</script>

<template>
    <div class="header">
        <div class="container">
            <div class="header-logo">
                <RouterLink to="/"><img src="./assets/logo.svg" /></RouterLink>
            </div>
            <div class="header-form">
                <div class="header-form-search">
                    <input type="text" placeholder="Search"/>
                    <button type="button">Search</button>
                </div>
            </div>
        </div>
    </div>
    <div class="navigation-wrapper">
        <div class="container">
            <Navigation />
        </div>
    </div>
    <div class="main-content">
        <div class="container">
            <RouterView />
        </div>
    </div>
    <div class="footer">
        <div class="container">
            Footer
        </div>
    </div>
</template>
