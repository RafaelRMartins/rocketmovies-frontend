import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmovies-backend-api.herokuapp.com"
});
