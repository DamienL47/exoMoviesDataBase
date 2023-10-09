import { API_KEY_PARAM, BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const data = await fetch(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
      const response = await data.json();
      const movies = response.results;
      return movies;
    } catch (error) {
      console.log("Détail de l'erreur ", error);
    }
  }
  static async fetchRecommendations(tvShowId) {
    try {
      const data = await fetch(
        `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
      );
      const response = await data.json();
      const movies = response.results;
      return movies;
    } catch (error) {
      console.log("Détail de l'erreur ", error);
    }
  }
  static async fetchByTitle(title) {
    try {
      const data = await fetch(
        `${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`
      );
      const response = await data.json();
      const movies = response.results;
      return movies;
    } catch (error) {
      console.log("Détail de l'erreur ", error);
    }
  }
}
