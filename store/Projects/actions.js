import {apiGetProjectData} from "~/api/index";

export default {
  async handleApiData({commit}){
    try {
      const res = await apiGetProjectData();
      let resetProjetsArray = [];

      res.data.forEach(element => {
        let project = {};
        project.id = element.id;
        project.title = element.title;
        project.create_time = element.create_time;
        project.description = element.description;
        project.in_charge = JSON.parse(element.in_charge);
        project.tools = element.tools;
        project.video = element.video;
        project.main_img = element.main_img;

        // imgs処理
        let imgsArray = JSON.parse(element.imgs);
        let num = 4;
        let paragraphs = (imgsArray.length / num) < 1 ? 1 : (imgsArray.length / num);
        let nowArrayIndex = 0;
        let newImgsArray = [];
        for (let para_Index = 0; para_Index < paragraphs; para_Index++) {
          let tempArray = [];
          for (let index = 0; index < num && nowArrayIndex < imgsArray.length; index++) {
            tempArray.push(imgsArray[nowArrayIndex]);
            nowArrayIndex++;
          }
          newImgsArray.push(tempArray);
        }

        project.imgs = newImgsArray;
        resetProjetsArray.push(project);
      });

      commit('setApiData',{data:resetProjetsArray});
    } catch (error) {
      //錯誤處理
      console.log('錯誤處理',error);
      return error;
    }
  }
};
