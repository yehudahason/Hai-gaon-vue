<template>
  <div class="footer-container">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="moon-container">
      <svg viewBox="0 0 100 100" width="80" height="80">
        <defs>
          <mask id="moon-mask">
            <rect width="100" height="100" fill="black" />

            <!-- {/* illuminated part */} -->
            <circle cx="50" cy="50" r="50" fill="white" />

            {/* animated shadow */}
            <ellipse cx="50" cy="50" rx="50" ry="50" fill="black">
              <animate
                attributeName="rx"
                values="
                50;
                35;
                0;
                35;
                50;
                35;
                0;
                35;
                50"
                dur="34s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="cx"
                values="
                50;
                65;
                100;
                65;
                50;
                35;
                0;
                35;
                50"
                dur="34s"
                repeatCount="indefinite"
              />
            </ellipse>
          </mask>
        </defs>

        <circle cx="50" cy="50" r="50" fill="white" mask="url(#moon-mask)" />
      </svg>
    </div>
  </div>
</template>

<script></script>

<style></style>
