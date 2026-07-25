<template>
  <div class="moon">
    <svg
      viewBox="0 0 100 100"
      :width="size"
      :height="size"
      :class="className"
      :aria-label="`Moon phase: ${ariaPercentage}%`"
    >
      <defs>
        <clipPath :id="clipId">
          <circle cx="50" cy="50" :r="radius" />
        </clipPath>
      </defs>

      <g :clip-path="`url(#${clipId})`">
        <!-- Dark Moon Base -->
        <rect width="100" height="100" :fill="darkColor" />

        <!-- Illuminated Hemisphere -->
        <path :d="pathData" :fill="lightColor" />

        <!-- Dynamic Shadow/Light Ellipse -->
        <ellipse cx="50" cy="50" :rx="rx" :ry="radius" :fill="ellipseFill" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, useId } from "vue";

export interface MoonPhaseProps {
  /**
   * Phase value from 0.0 to 1.0
   * 0.0 = New Moon
   * 0.25 = First Quarter
   * 0.5 = Full Moon
   * 0.75 = Last Quarter
   * 1.0 = New Moon
   */
  phase: number;
  size?: number;
  className?: string;
  lightColor?: string;
  darkColor?: string;
}

const props = withDefaults(defineProps<MoonPhaseProps>(), {
  size: 80,
  className: "",
  lightColor: "#f8fafc",
  darkColor: "#111",
});

// Radius constant matching SVG coordinates
const radius = 48;

// Vue 3.5+ unique ID for SVG clip path (prevents collisions if rendering multiple instances)
const clipId = useId();

// Normalize phase to [0, 1)
const normalizedPhase = computed(() => ((props.phase % 1) + 1) % 1);

// Math calculations reactively computed
const isWaxing = computed(() => normalizedPhase.value < 0.5);

const sweep = computed(() => Math.cos(normalizedPhase.value * 2 * Math.PI));

const rx = computed(() => Math.abs(sweep.value) * radius);

const pathData = computed(
  () =>
    isWaxing.value
      ? `M 50 2 A ${radius} ${radius} 0 0 1 50 98 Z` // Right hemisphere
      : `M 50 2 A ${radius} ${radius} 0 0 0 50 98 Z`, // Left hemisphere
);

const ellipseFill = computed(() =>
  sweep.value > 0 ? props.darkColor : props.lightColor,
);

const ariaPercentage = computed(() => Math.round(normalizedPhase.value * 100));
</script>
