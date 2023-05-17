import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.URL_BASE,
});

export default apiClient;
