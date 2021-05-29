<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
import Loading from '~/components/Loading.vue';
import {apiGetWebData} from "~/api/index";
export default {
  head:{
    title: "Front-End Development | NO-DATA",
  },
  data() {
    return {
      pageTitle:"Front-End Development",
      webs:[]
    }
  },
  async fetch() {
    try {
      const res = await apiGetWebData();
      let resetWebArray = [[],[],[]];

      res.data.forEach((element, index) => {
        let thisRound = index%3;
        let webData = {};
        webData.id = element.id;
        webData.title = element.title;
        webData.description = element.description;
        webData.img = element.img;
        webData.url = element.url;
        resetWebArray[thisRound].push(webData);
      });

      this.webs = resetWebArray;
    } catch (error) {
      //錯誤處理
      console.log('錯誤處理',error);
      this.$notify({
        group:"app",
        title: 'Api error',
        type: 'error',
        duration: 10000,
        text: error
      });
    }
  },
  components: {
    InsidePageTitle,
    Loading
  },
  activated() {
      if (this.$fetchState.timestamp <= Date.now() - 600000) {
        this.$fetch()
      }
  }
}
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle :pageTitle="pageTitle" :pageDescription="$t('web-title')"/>

    <Loading :loading="$fetchState.pending" />
    <section id="other-work">
        <b-container>
            <b-row>
              <b-col cols="12" sm="4" md="4" v-for="(items,index) in webs" :key="index">
                <div class="workW" v-for="item in items" :key="item.id">
                  <div class="work-img"><img :src="require('@/assets/img/webWork/'+item.img)" class="grow"/></div>
                  <div class="work-title"><a :href="item.url" target="_blank">{{$t(item.title)}}</a></div>
                  <div>{{$t(item.description)}}</div>
                </div>
              </b-col>
            </b-row>
        </b-container>
    </section>
  </div>
</template>

<style>

</style>
