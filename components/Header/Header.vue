<template>
  <header id="header">
    <div class="pc-translation">
      <div class="container">
        <ul class="overflow">
          <li>
            <nuxt-link :to="switchLocalePath('zh-tw')">
              <span>ZH-TW</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('en')">
              <span>EN</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link :to="switchLocalePath('jp')">
              <span>JP</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
    <Menu></Menu>
  </header>
</template>

<script>
import Menu from './Menu.vue';
export default {
  components:{
    Menu
  }
};
</script>

<style>
</style>
