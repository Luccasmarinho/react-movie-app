import axios from "axios";
const token: string =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODk1ZWU5NDc0NTg5YzdmMTFiNWY2NzAxNTNlZTg0OSIsIm5iZiI6MTc0NDU3MTg1Mi4xMTgsInN1YiI6IjY3ZmMwZGNjYWFjZjdjZmIyNjk5NWRmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pY88UiZTvQOsh_3oebO_ehUsv8oNQghP-cX4qJLkOTQ";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  params: {
    language: "pt-BR",
  },
});
