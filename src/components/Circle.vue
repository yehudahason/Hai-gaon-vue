<template>

<div class="footer-container">
      <div class="circle1"></div>
      <div class="circle2"></div>
</div>

</template>

<script>

</script>

<style>

.footer-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
  margin: 100px auto;
}

.circle1 {
  position: absolute;
  left: 60px;
  height: 100px;
  width: 100px;
  background-color: rgb(195, 188, 56);
  border-radius: 23px;
  transform: rotate(45deg);
  animation: rotate1 24s linear infinite;
}

.circle2 {
  position: absolute;
  left: 60px;
  height: 100px;
  width: 100px;
  background-color: rgb(195, 188, 56);
  border-radius: 23px;
  animation: rotate2 24s linear infinite;
}


@keyframes rotate1 {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate2 {
  from {
    transform: rotate(45deg);
  }

  to {
    transform: rotate(405deg);
  }
}

</style>
