<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

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
  components: {
    Hooper,
    Slide,
    HooperPagination
  }
}
</script>

<template>
  <div>
    <section :id="'gamePortfolio_' + item.id" class="portfolio-information padding-top" v-for="item in projects" :key="item.id">
        <b-container>
            <b-row>
                <b-col sm="6" data-aos="fade-in">
                    <b-img :src="require('@/assets/img/portfolio/'+item.main_img)" fluid :alt="item.title"></b-img>
                </b-col>
                <b-col sm="6" data-aos="fade-in">
                    <div class="project-name overflow">
                        <h2>{{item.title}}</h2>
                        <ul class="listWrap">
                            <li><span><fa icon="clock" />{{item.create_time}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="project-info overflow">
                        <h3>Gameplay</h3>
                        <p>{{$t(item.description)}}</p>
                    </div>
                    <div class="skills overflow">
                        <h3>Project in-charge</h3>
                        <ul class="listWrap">
                            <li v-for="charge in item.in_charge" :key="charge"><p><fa icon="gamepad" /><span>{{$t(charge)}}</span></p></li>
                        </ul>
                    </div>
                    <div class="tools overflow">
                        <h3>Tools</h3>
                        <ul class="listWrap">
                            <li><p><fa icon="file-code" /><span>{{item.tools}}</span></p>
                            </li>
                        </ul>
                    </div>
                    <div class="movie overflow">
                        <h3>Video</h3>
                        <ul class="listWrap">
                            <li><a class="video" data-fancybox :title="item.title" :href="item.video"><fa icon="play" /></a>
                            </li>
                        </ul>
                    </div>
                </b-col>

                <b-col sm="12">
                    <hooper :infiniteScroll="true" :id="'team-carousel_'+item.id" class="team-carousel" data-aos-duration="400" data-aos-delay="400">
                        <slide v-for="(imgArr,index) in item.imgs" :key="index">
                            <b-row>
                                <b-col sm="3" cols="6" v-for="img in imgArr" :key="img">
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
                        </slide>
                        <hooper-pagination slot="hooper-addons" v-if="item.imgs.length > 1"></hooper-pagination>
                    </hooper>
                </b-col>
            </b-row>
        </b-container>
    </section>
  </div>
</template>

<style>

</style>
