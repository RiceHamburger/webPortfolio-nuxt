<script>
  export default {
    props:{
      loading: false
    }
  }
</script>

<template lang="html">
  <div class="preloader" v-if="loading">
    <fa icon="sun" class="fa-spin" />
  </div>
</template>

<style scoped>
  .preloader {
    position: absolute;
    top: 130px;
    z-index: 999;
    height: calc(100vh - 450px);
  }
</style>
