<script setup lang="ts">
import navbar from './components/navbar.vue';
import HeroSection from './components/HeroSection.vue';


</script>

<template>
    <navbar /> <!-- ใช้งาน Navbar -->
    <hero-section />
</template>

<style scoped>
.content {
  margin-top: 5rem; /* เพิ่มระยะห่างจาก Navbar */
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
