<template>
  <header id="header">
    <div class="pc-translation">
      <div class="container">
        <ul class="overflow">
          <li>
            <button name="zh-TW">
              <span>ZH-TW</span>
            </button>
          </li>
          <li>
            <button name="en">
              <span>EN</span>
            </button>
          </li>
          <li>
            <button name="jp">
              <span>JP</span>
            </button>
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
