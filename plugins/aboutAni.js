export default({app},inject)=>{
  inject("progressAni",{
    doProgress(){
      //技能進度條
      $.each($('div.progress-bar'), function() {
        $(this).css('width', $(this).attr('data-transition') + '%');
      });
    },
    resetProgress(){
      $.each($('div.progress-bar'), function() {
        $(this).css('width', '10%');
      });
    },
  });
}
