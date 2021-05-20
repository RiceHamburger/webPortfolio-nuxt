<script>
export default {
  name: 'GameList',
   props:{
    projects: {
      type: Array,
      default(){
        return []
      }
    },
  },
  methods: {
    strToArray(str){
      return JSON.parse(str);
    }
  },
}
</script>

<template>
  <div>
    <section :id="'gamePortfolio_' + item.id" class="portfolio-information padding-top" v-for="item in projects" :key="item.id">
        <b-container>
            <b-row>
                <b-col sm="6" class="wow fadeIn">
                    <b-img :src="require('@/assets/img/portfolio/'+item.main_img)" fluid :alt="item.title"></b-img>
                </b-col>
                <b-col sm="6" class="wow fadeIn">
                    <div class="project-name overflow">
                        <h2>{{item.title}}</h2>
                        <ul class="nav navbar-nav navbar-default">
                            <li><span><i><fa icon="clock" /></i>{{item.create_time}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="project-info overflow">
                        <h3>Gameplay</h3>
                        <p :id="item.description"></p>
                    </div>
                    <div class="skills overflow">
                        <h3>Project in-charge</h3>
                        <ul class="nav navbar-nav navbar-default">
                            <li v-for="(charge, index) in strToArray(item.in_charge)" :key="index"><p><fa icon="gamepad" /><span :class="charge"></span></p></li>
                        </ul>
                    </div>
                    <div class="tools overflow">
                        <h3>Tools</h3>
                        <ul class="nav navbar-nav navbar-default">
                            <li><p><fa icon="file-code" /><span>{{item.tools}}</span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="movie overflow">
                        <h3>Video</h3>
                        <ul class="nav navbar-nav navbar-default">
                            <li><a class="video" data-fancybox :title="item.title" :href="item.video"><fa icon="play" /></a>
                            </li>
                        </ul>
                    </div>
                </b-col>

                <b-col sm="12">
                    <div :id="'team-carousel_'+item.id" class="carousel slide team-carousel" data-ride="carousel" data-wow-duration="400ms" data-wow-delay="400ms">
                        <div class="carousel-inner">
                            <b-row class="item active">
                                <b-col sm="3" cols="6" v-for="(img,index) in strToArray(item.imgs)" :key="index">
                                    <div class="team-single-wrapper">
                                        <div class="team-single">
                                            <div class="person-thumb">
                                                <b-img :src="require('@/assets/img/portfolio/'+img)" fluid alt=""></b-img>
                                            </div>
                                            <div class="social-profile">
                                                <ul class="nav nav-pills">
                                                    <li><a :href="require('@/assets/img/portfolio/'+img)" :data-fancybox="item.title"><fa icon="eye" /></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </b-col>
                            </b-row>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </section>
  </div>
</template>

<style>

</style>
