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
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/aboutus">About</b-nav-item>
          <b-nav-item to="/gallery">Gallery</b-nav-item>
          <b-nav-item to="/program">Project</b-nav-item>
          <b-nav-item to="/other">Web Design</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<style>

</style>
