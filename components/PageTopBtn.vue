
<script>
export default {
  mounted(){
    $(window).on('scroll resize', function(){
      if($(window).scrollTop() >= 500){
        $('.el-pageTop').fadeIn(250);
      }else{
        $('.el-pageTop').fadeOut(250);
      }
	  });
  },
  methods: {
    pageTopClick(){
      $("html, body").animate({scrollTop:0}, 500, 'swing');
    }
  },
}
</script>

<template>
  <div class="el-pageTop">
    <button @click="pageTopClick">
      <fa icon="chevron-up" class="fa-chevron-up" />
    </button>
  </div>
</template>

<style scope>
.el-pageTop{
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}
.el-pageTop button{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 62px;
  border: none;
  border-radius: 5px;
  border-bottom: 2px solid;
  border-color: #0099ae;
  background-color: #00aeef;
  transition: 0.25s;
  color: #fff;
  font-size: 20px;
}
</style>
