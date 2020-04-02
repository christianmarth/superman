<template>
<div class="relative bg-black">
  <img src="https://picsum.photos/500/1000" class="object-center object-none w-full h-48 opacity-75" alt="">
  <div class="centered">Centered</div>
</div>
</template>
<script>
export default {

}
</script>
<style lang="css" scoped>
.centered {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
