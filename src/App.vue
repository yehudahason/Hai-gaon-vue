<script setup>
import { RouterLink, RouterView } from "vue-router";
import Links from "@/components/Links.vue";
import Circle from "@/components/Circle.vue";
</script>

<template>
  <header>
    <Links />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
