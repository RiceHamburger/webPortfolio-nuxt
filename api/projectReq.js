import axios from "axios";

const project = axios.create({
  baseURL: ""
});

export const getprojectData = () => project.get("/project");
