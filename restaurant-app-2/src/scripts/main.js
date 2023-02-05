import '../components/list-card';
import '../components/load-spinner';
import alertify from 'alertifyjs';
import data from './data-source';

const main = () => {
  const container = document.querySelector('#card-container');
  const start = async () => {
    try {
      const results = await data.getRestaurant();
      const { restaurants } = results;

      restaurants.forEach((restaurant, index) => {
        const spinner = document.createElement('load-spinner');
        const card = document.createElement('list-card');
        setTimeout(() => {
          container.appendChild(spinner);
          container.appendChild(card);
          setTimeout(() => {
            container.removeChild(spinner);
            card.item = restaurant;
          }, 500);
        }, 500 * index);
      });
    } catch (error) {
      alertify.alert('Maaf', 'Fitur ini masih dalam pengembangan!');
    }
  };

  window.addEventListener('load', start);
};

export default main;
