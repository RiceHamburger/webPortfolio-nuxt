import axios from "axios";

const project = axios.create({
  baseURL: "http://em.no-data.xyz/api/"
});

export const getprojectData = () => project.get("/project");
