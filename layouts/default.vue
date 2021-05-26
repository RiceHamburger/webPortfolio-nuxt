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
    <main>
      <Nuxt keep-alive />
    </main>
    <notifications group="app"  position="top center"/>
    <Footer></Footer>
  </div>
</template>

<style lang="scss" scoped>
main {
		min-height: calc(100vh - 450px);
}
</style>
