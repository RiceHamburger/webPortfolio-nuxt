import axios from "axios";

const web = axios.create({
  baseURL: "http://em.no-data.xyz/api/"
});

export const getwebData = () => web.get("/webDev");
