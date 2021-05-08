<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
export default {
  data() {
    return {
      pageTitle:"About Me"
    }
  },
  components: {
    InsidePageTitle
  },
  mounted() {
    //技能進度條
    $.each($('div.progress-bar'), function() {
        $(this).css('width', $(this).attr('data-transition') + '%');
    });
  },
};
</script>

<template>
  <div>
    <InsidePageTitle :pageTitle="pageTitle"/>
    <section id="aboutMe" class="padding-top margin-bottom">
        <b-container>
            <b-row>
                <div class="col-md-7 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <b-row>
                            <div class="col-md-5">
                                <b-img src="~assets/img/aboutus/android.jpg" fluid alt=""></b-img>
                            </div>
                            <div class="col-md-7">
                                <h3 class="top-zero">SKILLS</h3>
                                <p>Flash / Photoshop / Illustrator / After Effects / Unity3D /
                                    Action Script3.0 / C / C++ / C# / HTML5 / CSS3(SCSS) / PHP / JavaScript / JQuery / Vue.js / Nuxt.js</p><br>
                                <h3 class="top-zero">CONTACT</h3>
                                <p>
                                    <span id="contact-info"></span>
                                    <br><br>
                                    x79330@gmail.com</p>
                            </div>
                        </b-row>
                    </div>
                    <div class="col-md-5 wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
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
                    </div>
            </b-row>
        </b-container>
    </section>
    <!--content-->
  </div>
</template>

<style>
</style>
