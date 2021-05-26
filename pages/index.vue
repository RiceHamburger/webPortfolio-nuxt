<script>
export default {
  mounted(){
    //首頁專用
    $('.main-slider').addClass('animate-in');
    //移除讀取顯示
    $('.preloader').remove();
  }
}
</script>

<template>
  <div>
    <section id="home-slider">
        <b-container>
            <b-row>
                <div class="main-slider">
                    <img src="@/assets/img/home/slider/house.png" class="slider-house" alt="slider image">
                    <img src="@/assets/img/home/slider/birds1.png" class="slider-birds1" alt="slider image">
                    <img src="@/assets/img/home/slider/birds2.png" class="slider-birds2" alt="slider image">
                    <img src="@/assets/img/home/slider/people.png" class="slider-hill" alt="slider image">
                    <div class="slide-text">
                        <h1>Game + Create = Life</h1>
                        <p>{{$t("in-short")}}</p>
                        <nuxt-link :to="localePath('/aboutus')" class="btn btn-common">ABOUT ME</nuxt-link>
                    </div>
                </div>
            </b-row>
        </b-container>
        <div class="preloader">
          <fa icon="sun" class="fa-spin" />
        </div>
    </section>
    <!--slider-->
    <section id="services" class="margin-bottom">
        <b-container>
            <b-row>
                <b-col sm="4" class="text-center padding" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="30">
                    <div class="single-service">
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="30">
                            <img src="@/assets/img/home/icon1.png" alt="">
                        </div>
                        <h2>Gallery</h2>
                        <p>{{$t("art-in-short")}}</p>
                        <nuxt-link :to="localePath('/gallery')" class="btn btn-common">Link</nuxt-link>
                    </div>
                </b-col>
                <b-col sm="4" class="text-center padding" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="60">
                    <div class="single-service">
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="60">
                            <img src="@/assets/img/home/icon2.png" alt="">
                        </div>
                        <h2>Game</h2>
                        <p>{{$t("program-in-short")}}</p>
                        <nuxt-link :to="localePath('/program')" class="btn btn-common">Link</nuxt-link>
                    </div>
                </b-col>
                <b-col sm="4" class="text-center padding" data-aos="fade-in" data-aos-duration="1000" data-aos-delay="90">
                    <div class="single-service">
                        <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="90">
                            <img src="@/assets/img/home/icon3.png" alt="">
                        </div>
                        <h2>Web</h2>
                        <p>{{$t("web-in-short")}}</p>
                        <nuxt-link :to="localePath('/web')" class="btn btn-common">Link</nuxt-link>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
    <!--content-->
  </div>
</template>

<style>
</style>
