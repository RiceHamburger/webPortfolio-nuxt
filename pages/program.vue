<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
import GameList from '~/components/GameList/GameList.vue';
export default {
  head:{
    title: "Project | NO-DATA",
    script: [
      {
        type: 'module',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js'
      }
    ]
  },
  data() {
    return {
      pageTitle:"Project"
    }
  },
  fetch() {
    return this.$store.dispatch("Projects/handleApiData");
  },
  components: {
    InsidePageTitle,
    GameList
  },
  computed: {
    projects () {
      return this.$store.state.Projects.projects
    }
  }
}
</script>

<template>
  <div>
    <InsidePageTitle :pageTitle="pageTitle"/>
    <GameList :projects="projects"/>
  </div>
</template>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css';
</style>
