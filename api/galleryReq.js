import axios from "axios";

const gallery = axios.create({
  baseURL: ""
});

export const getgalleryData = () => gallery.get("/gallery");
