const templateButtonFavorite = () => `
    <button	aria-label="favoritkan restorant ini" id="btn-favorite"	class="favorite-btn">
      <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
    `;

const templateButtonUnfavorite = () => `
    <button aria-label="Hapus dari daftar favorit" id="btn-favorite" class="favorite-btn">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export { templateButtonFavorite, templateButtonUnfavorite };
