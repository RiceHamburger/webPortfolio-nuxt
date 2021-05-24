<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
export default {
  head:{
    title: "About Me | NO-DATA"
  },
  data() {
    return {
      pageTitle:"About Me",
    }
  },
  components: {
    InsidePageTitle
  },
  mounted() {
    this.$progressAni.doProgress();
  },
  middleware(context) {
      if(process.client){
        context.app.router.beforeEach((to, from, next) => {
          if(from.name === 'aboutus'){
            context.$progressAni.resetProgress();
          }
          next();
        });

        context.app.router.afterEach((to, from) => {
          if(to.name === 'aboutus'){
            setTimeout(() => {
              context.$progressAni.doProgress();
            }, 150);
          }
        })
      }
    }
};
</script>

<template>
  <div>
    <InsidePageTitle :pageTitle="pageTitle"/>
    <section id="aboutMe" class="padding-top margin-bottom">
        <b-container>
            <b-row>
                <b-col md="7" class="wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <b-row>
                            <b-col md="5">
                                <b-img src="@/assets/img/aboutus/android.jpg" fluid alt=""></b-img>
                            </b-col>
                            <b-col md="7">
                                <h3 class="top-zero">SKILLS</h3>
                                <p>Flash / Photoshop / Illustrator / After Effects / Unity3D /
                                    Action Script3.0 / C / C++ / C# / HTML5 / CSS3(SCSS) / PHP / JavaScript / JQuery / Vue.js / Nuxt.js</p><br>
                                <h3 class="top-zero">CONTACT</h3>
                                <p>
                                    <span id="contact-info"></span>
                                    <br><br>
                                    x79330@gmail.com</p>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col md="5" class="wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <div class="our-skills">
                            <div class="single-skill">
                                <h3 class="topZ">Art</h3>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  data-transition="65">65%</div>
                                </div>
                            </div>
                            <div class="single-skill">
                                <h3>Program</h3>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  data-transition="82">82%</div>
                                </div>
                            </div>
                            <div class="single-skill">
                                <h3>Consolidation</h3>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary six-sec-ease-in-out" role="progressbar"  data-transition="40">54%</div>
                                </div>
                            </div>
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
