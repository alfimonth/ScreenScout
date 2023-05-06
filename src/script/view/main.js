import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const movieListElement = document.querySelector('movie-list');

  searchElement.addEventListener('keyup', event => {
    if (event.keyCode === 13) {
      onButtonSearchClicked();
    }
  });

  const onButtonSearchClicked = async () => {
    const shadowRoot = searchElement.shadowRoot;
    const loadingElement = shadowRoot.querySelector('#loading');
    console.log(loadingElement);
    console.log(searchElement);
    loadingElement.style.display = 'block';
    try {
      const result = await DataSource.searchMovie(searchElement.value);
      renderResult(result);
      document.querySelector('movie-list').scrollIntoView();
    } catch (message) {
      fallbackResult(message);
    } finally {
      loadingElement.style.display = 'none';
    }
  };

  const renderResult = results => {
    movieListElement.movies = results;
  };

  const fallbackResult = message => {
    movieListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;

};


export default main;