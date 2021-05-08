<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
export default {
  data() {
    return {
      pageTitle:"Project"
    }
  },
  components: {
    InsidePageTitle
  },
}
</script>

<template>
  <div>
    <InsidePageTitle :pageTitle="pageTitle"/>
  </div>
</template>

<style>

</style>
