<script>
import Header from '~/components/Header/Header.vue';
import Footer from '~/components/Footer/Footer.vue';
import PageTopBtn from '~/components/PageTopBtn.vue';
export default {
  components: {
    Header,
    Footer,
    PageTopBtn
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
    <PageTopBtn></PageTopBtn>
  </div>
</template>

<style lang="scss" scoped>
main {
		min-height: calc(100vh - 450px);
}
</style>
