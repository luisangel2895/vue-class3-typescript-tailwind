import axios from "axios";
import { ParamsMovie } from "../types/param-movie";
import { PageMovies } from "../types/page-movies";

const urlAPI = "https://api.themoviedb.org/3/search/movie";

// params
const params: ParamsMovie = {
  api_key: "de881a89e78931c9518ef40e62514de0",
  language: "en-US",
  page: 1,
  include_adult: false,
  query: "",
};

export const getMovies = async (word?: string): Promise<PageMovies> => {
  if (!word) {
    word = "matrix";
  }
  params.query = word;
  const { data } = await axios.get<PageMovies>(`${urlAPI}`, { params });
  return data;
};
