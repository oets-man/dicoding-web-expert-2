const templateButtonFavorite = () => `
    <button	aria-label="Favoritkan restoran ini" id="btn-favorite"	class="favorite-btn">
      <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
    `;

const templateButtonUnfavorite = () => `
    <button aria-label="Hapus restoran ini dari daftar favorit" id="btn-favorite" class="favorite-btn">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;

export { templateButtonFavorite, templateButtonUnfavorite };
