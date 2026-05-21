<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <ul class="links">
    <li>
      <RouterLink to="/"><i class="fa-solid fa-house"></i></RouterLink>
    </li>
    <li>
      <RouterLink to="/book"> פתרון חלומות לרב האי גאון</RouterLink>
    </li>
    <li>
      <RouterLink to="/roe1"> פרק הרואה</RouterLink>
    </li>
    <li>
      <RouterLink to="/download">הורדות</RouterLink>
    </li>
    <li>
      <RouterLink to="/about">אודות</RouterLink>
    </li>
  </ul>
</template>

<style></style>
