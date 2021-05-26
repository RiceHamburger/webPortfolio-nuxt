<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
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
    InsidePageTitle
  },
  methods: {
   classExtraction(item) {
      return item.tags.map(tag => tag);
   }
  },
  activated() {
      if (this.$fetchState.timestamp <= Date.now() - 600000) {
        this.$fetch()
      }
  },
  mounted() {
    this.$nextTick(function () {

      // let $portfolio_selectors = $('.portfolio-filter >li>a');

      // if ($portfolio_selectors.length) {
      //   let $portfolio = $('.portfolio-items');
      //   $portfolio.isotope({
      //     itemSelector: '.portfolio-item',
      //     layoutMode: 'fitRows'
      //   });
      //   $portfolio_selectors.on('click', function() {
      //       $portfolio_selectors.removeClass('active');
      //       $(this).addClass('active');
      //       let selector = $(this).attr('data-filter');
      //       $portfolio.isotope({ filter: selector });
      //       return false;
      //   });
      // }

    });
  },
}
</script>

<template>
  <div>
    <InsidePageTitle :pageTitle="pageTitle" :pageDescription="$t('gallery-title')"/>
    <h1 v-if="$fetchState.pending">loading</h1>
    <section id="portfolio" class="margin-bottom">
        <b-container>
            <div>
                <ul class="portfolio-filter text-center">
                    <li><a class="btn btn-default active" href="#" data-filter="*">All</a></li>
                    <li><a class="btn btn-default" href="#" data-filter=".illustration">Illustration</a></li>
                    <li><a class="btn btn-default" href="#" data-filter=".sketch">Sketch</a></li>
                    <li><a class="btn btn-default" href="#" data-filter=".Original">Original works</a></li>
                    <li><a class="btn btn-default" href="#" data-filter=".Derivative">Derivative works</a></li>
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
