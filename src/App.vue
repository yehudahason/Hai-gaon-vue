<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Links from '@/components/Links.vue'
import  Circle from '@/components/Circle.vue'
</script>

<template>
  <Links/>
  <RouterView />
  <Circle/>
  <Links/>
</template>

<style scoped>


</style>
