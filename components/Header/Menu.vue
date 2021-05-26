<script>
export default {};
</script>

<template>
  <b-container class="navbar-inverse">
    <b-navbar toggleable="lg" variant="faded" type="light" class="navbar-header">
      <b-navbar-brand to="/"
        ><h1><img src="~assets/img/logo_1.png" alt="logo" /></h1>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto navbar-right">
          <li class="nav-item"><nuxt-link :to="localePath('/')">Home</nuxt-link></li>
          <li class="nav-item"><nuxt-link :to="localePath('/aboutus')">About</nuxt-link></li>
          <li class="nav-item"><nuxt-link :to="localePath('/gallery')">Gallery</nuxt-link></li>
          <li class="nav-item"><nuxt-link :to="localePath('/program')">Game</nuxt-link></li>
          <li class="nav-item"><nuxt-link :to="localePath('/web')">Web</nuxt-link></li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<style>

</style>
