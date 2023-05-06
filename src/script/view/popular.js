import DataSource from '../data/data-source.js';
const pop = async () => {
    const popularListElement = document.querySelector('popular-list');
    const renderResult = results => {
        popularListElement.movies = results;
    };
    try {
        const popularMovies = await DataSource.searchMovie('','movie/popular');
        console.log(popularMovies);
        renderResult(popularMovies);
    } catch (error) {
        console.log(error);
    }
};

export default pop; 

