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
                            <b-col md="5" class="aboutimg">
                                <b-img src="@/assets/img/aboutus/android.jpg" fluid alt=""></b-img>
                            </b-col>
                            <b-col md="7">
                                <h3 class="top-zero">SKILLS</h3>
                                <p>
                                  HTML5 / CSS3(SCSS) / PHP / JavaScript(TypeScript) / JQuery / React.js / Vue.js / Next.js / Nuxt.js / 
                                  Flash / Photoshop / Illustrator / After Effects / Unity3D / Action Script3.0 / C / C++ / C#
                                </p>
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
                                      <div class="progress-bar progress-bar-primary progress-14">14%</div>
                                    </transition>
                                </div>
                            </div>
                            <div class="single-skill">
                                <h3>Program</h3>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary progress-86">86%</div>
                                </div>
                            </div>
                            <div class="single-skill">
                                <h3>Consolidation</h3>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-primary progress-75">75%</div>
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

.progress-14{
  @include progress-animation(1s) {
    0% {
        width: 0%;
    }

    100% {
        width: 14%;
    }
  }
}

.progress-86{
  @include progress-animation(1s) {
    0% {
        width: 0%;
    }

    100% {
        width: 86%;
    }
  }
}

.progress-75{
  @include progress-animation(1s) {
    0% {
        width: 0%;
    }

    100% {
        width: 75%;
    }
  }
}

</style>
