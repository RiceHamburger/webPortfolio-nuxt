<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
import Loading from '~/components/Loading.vue';
import {apiGetGalleryData} from "~/api/index";
export default {
  head:{
    title: "Gallery | NO-DATA",
    script: [
      {
        type: 'module',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.js'
      }
    ]
  },
  data() {
    return {
      pageTitle:"Gallery",
      iso: null,
      galleries:[]
    }
  },
  async fetch() {
    try {
      const res = await apiGetGalleryData();
      let resetGalleryArray = [];
      res.data.forEach(element => {
          let gallery = {};
          gallery.id = element.id;
          gallery.title = element.title;
          gallery.img = element.img;
          gallery.img_s = element.img_s;
          gallery.tags = JSON.parse(element.tags);
          resetGalleryArray.push(gallery);
      });

      this.galleries = resetGalleryArray;
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
  methods: {
   classExtraction(item) {
      return item.tags.map(tag => tag);
   },
   isotope() {
      this.iso = new Isotope(".portfolio-items", {
        itemSelector: ".portfolio-item",
        layoutMode: 'fitRows'
      });
    },
    filter: function(slug) {
      let oldActive = $(".portfolio-filter >li>button.btn-primary").first();

      if (slug === oldActive.data("filter")) {
        return;
      }

      let currentActive = $(".portfolio-filter >li>button" + slug).first();

      currentActive.removeClass("btn-default").addClass("btn-primary");

      oldActive.removeClass("btn-primary").addClass("btn-default");

      this.iso.arrange({
        filter: slug
      });
    }
  },
  activated() {
      if (this.$fetchState.timestamp <= Date.now() - 600000) {
        this.$fetch()
      }
  },
  mounted() {
    this.$nextTick(function () {
      setTimeout(()=>{
        this.isotope();
      }, 1000);
    });
  },
}
</script>

<template>
  <div class="sideWrap">
    <InsidePageTitle :pageTitle="pageTitle" :pageDescription="$t('gallery-title')"/>
    <Loading :loading="$fetchState.pending" />
    <section id="portfolio" class="margin-bottom">
        <b-container>
            <div>
                <ul class="portfolio-filter text-center">
                    <li><button class="btn btn-primary" href="#" data-filter="*" @click="filter('*')">All</button></li>
                    <li><button class="btn btn-default illustration" href="#" data-filter=".illustration" @click="filter('.illustration')">Illustration</button></li>
                    <li><button class="btn btn-default sketch" href="#" data-filter=".sketch" @click="filter('.sketch')">Sketch</button></li>
                    <li><button class="btn btn-default Original" href="#" data-filter=".Original" @click="filter('.Original')">Original works</button></li>
                    <li><button class="btn btn-default Derivative" href="#" data-filter=".Derivative" @click="filter('.Derivative')">Derivative works</button></li>
                </ul>

                <b-row class="portfolio-items">
                    <b-col cols="6" sm="4" md="3" class="portfolio-item" :class="classExtraction(item)" v-for="item in galleries" :key="item.id">
                        <div class="portfolio-wrapper">
                            <div class="portfolio-single">
                                <div class="portfolio-thumb">
                                    <b-img :src="require('@/assets/img/illastration/'+item.img_s)" fluid :alt="item.title"></b-img>
                                </div>
                                <div class="portfolio-view">
                                    <ul class="nav nav-pills">
                                        <li><a :href="require('@/assets/img/illastration/'+item.img)" :data-fancybox="'example-set'" :data-title="item.title"><fa icon="eye" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="portfolio-info">
                                <h2>{{item.title}}</h2>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
    </section>
  </div>
</template>

<style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.3.5/jquery.fancybox.min.css';
</style>
