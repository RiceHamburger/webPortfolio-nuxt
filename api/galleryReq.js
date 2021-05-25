import axios from "axios";

const gallery = axios.create({
  baseURL: "http://em.no-data.xyz/api/"
});

export const getgalleryData = () => gallery.get("/gallery");
