import {apiGetProjectData} from "~/api/index";

export default {
  async handleApiData({commit}){
    try {
      const res = await apiGetProjectData();
      commit('setApiData',{data:res.data});
    } catch (error) {
      //錯誤處理
      console.log('錯誤處理',error);
      // this.$notify({
      //   group:"project",
      //   title: 'Api',
      //   text: error
      // });
    }
  }
};
