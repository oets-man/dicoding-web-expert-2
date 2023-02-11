class FavoriteMovieSearchPresenter {
  constructor({ favoriteMovies, view }) {
    this._view = view;
    this.#listenToSearchRequestByUser();
    this._favoriteMovies = favoriteMovies;
  }

  #listenToSearchRequestByUser() {
    this._view.runWhenUserIsSearching((latestQuery) => {
      this.#searchMovies(latestQuery);
    });
  }

  async #searchMovies(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundMovies;

    if (this.latestQuery.length > 0) {
      foundMovies = await this._favoriteMovies.searchMovies(this.latestQuery);
    } else {
      foundMovies = await this._favoriteMovies.getAllMovies();
    }
    this.#showFoundMovies(foundMovies);
  }

  #showFoundMovies(movies) {
    this._view.showFavoriteMovies(movies);
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteMovieSearchPresenter;
