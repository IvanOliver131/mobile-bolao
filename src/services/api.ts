import axios from "axios";

export const api = axios.create({
  // 192.168.1.8 - meu IP
  baseURL: "http://192.168.1.8:3333",
});
