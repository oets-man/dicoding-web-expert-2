class FavoriteMovieShowPresenter {
  constructor({ view, favoriteMovies }) {
    this._view = view;
    this._favoriteMovies = favoriteMovies;
    this.#showFavoriteMovies();
  }

  async #showFavoriteMovies() {
    const movies = await this._favoriteMovies.getAllMovies();
    this.#displayMovies(movies);
  }

  #displayMovies(movies) {
    this._view.showFavoriteMovies(movies);
  }
}

export default FavoriteMovieShowPresenter;
