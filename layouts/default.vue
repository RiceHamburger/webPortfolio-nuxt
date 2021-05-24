<script>
import Header from '~/components/Header/Header.vue';
import Footer from '~/components/Footer/Footer.vue';
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<template>
  <div>
    <Header></Header>
    <Nuxt keep-alive />
    <Footer></Footer>
  </div>
</template>

<style>
</style>
