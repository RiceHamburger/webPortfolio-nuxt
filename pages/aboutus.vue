<script>
import InsidePageTitle from '~/components/InsidePageTitle.vue';
export default {
  head:{
    title: "About Me | NO-DATA"
  },
  data() {
    return {
      pageTitle:"About Me"
    }
  },
  components: {
    InsidePageTitle
  }
};
</script>

<template>
  <div>'
    <InsidePageTitle :pageTitle="pageTitle" :pageDescription="$t('about-title')"/>
    <section id="aboutMe" class="padding-top margin-bottom">
        <b-container>
            <b-row>
                <b-col md="7">
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
                                    <span>{{$t("contact-info")}}</span>
                                    <br><br>
                                    x79330@gmail.com</p>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col md="5">
                        <div class="our-skills">
                            <div class="single-skill">
                                <h3 class="topZ">Art</h3>
                                <div class="progress">
                                    <transition name="home">
                                      <div class="progress-bar progress-bar-primary progress-65">65%</div>
                                    </transition>
                                </div>
                            </div>
                            <div class="single-skill">
                                <h3>Program</h3>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary progress-82">82%</div>
                                </div>
                            </div>
                            <div class="single-skill">
                                <h3>Consolidation</h3>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary progress-54">54%</div>
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

<style lang="scss" scoped>

@mixin progress-animation($duration,$fillmode: fowards) {
  $name: progress-#{unique-id()};

  @keyframes #{$name} {
    @content;
  }

  animation-name: $name;
  animation-duration: $duration;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
}

.progress-65{
  @include progress-animation(1s) {
    0% {
        width: 0%;
    }

    100% {
        width: 65%;
    }
  }
}

.progress-82{
  @include progress-animation(1s) {
    0% {
        width: 0%;
    }

    100% {
        width: 82%;
    }
  }
}

.progress-54{
  @include progress-animation(1s) {
    0% {
        width: 0%;
    }

    100% {
        width: 54%;
    }
  }
}

</style>
