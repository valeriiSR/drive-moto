const config = {
  itemsCount: 16,
  adsDataUrl: 'https://6075786f0baf7c0017fa64ce.mockapi.io/products',
  imgesUrl: 'https://source.unsplash.com/random',
}


const itemFavoriteBtns = document.querySelectorAll(".item-favorite-btn");
const [...itemFavoriteBtn] = itemFavoriteBtns;
itemFavoriteBtn.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle("product-item__favorite--active");
  });
});