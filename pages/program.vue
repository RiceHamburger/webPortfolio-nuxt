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
      pageTitle:"Project",
      loading: true
    }
  },
  fetch() {
    return this.$store.dispatch("Projects/handleApiData").then((res)=>{
      if(res === undefined){
        this.loading = false;
      }else{
        this.$notify({
          group:"app",
          title: 'Api error',
          type: 'error',
          duration: 10000,
          text: res
        });
      }
    });
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
  <div class="sideWrap">
    <InsidePageTitle :pageTitle="pageTitle" :pageDescription="$t('program-title')"/>
    <Loading :loading="loading" />
    <GameList :projects="projects"/>
  </div>
</template>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css';
</style>
