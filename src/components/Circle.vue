<template>
  <div class="footer-container">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <Moon :phase="animatedPhase" :size="100" />
  </div>
</template>

<script setup lang="ts">
import Moon from "./Moon.vue";

import { ref, onMounted, onUnmounted } from "vue";

const animatedPhase = ref(0);

let animationId = 0;
let start = 0;

const DURATION = 30000; // 10 seconds

function animate(timestamp: number) {
  if (!start) start = timestamp;

  const elapsed = (timestamp - start) % DURATION;

  animatedPhase.value = elapsed / DURATION;

  animationId = requestAnimationFrame(animate);
}

onMounted(() => {
  animationId = requestAnimationFrame(animate);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
});
</script>

<style></style>
