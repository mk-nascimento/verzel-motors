import api from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const TIMEOUT = Number(import.meta.env.VITE_TIMEOUT || 5000);

export default api.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
  url: "docs",
  headers: {
    common: {
      Accept: "application/json",
      ["Access-Control-Allow-Origin"]: "192.168.10.107",
      ["Content-Type"]: "application/x-www-form-urlencoded",
    },
  },
});
