import axios from 'axios';
class DataSource {
  static async searchMovie(keyword, url = 'search/movie') {
    const searchPromise = axios.get(`https://api.themoviedb.org/3/${url}`, {
      params: {
        api_key: '6229751a3ece13df681d0cee3b8699a8',
        query: keyword,
      },
    });

    const genresPromise = axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      params: {
        api_key: '6229751a3ece13df681d0cee3b8699a8',
        language: 'en-US',
      },
    });

    try {
      const [searchResponse, genresResponse] = await Promise.all([searchPromise, genresPromise]);

      const movies = searchResponse.data.results.map((movie) => ({
        ...movie,
        genre: movie.genre_ids.map((genreId) =>
          genresResponse.data.genres.find((genre) => genre.id === genreId).name
        ).join(', '),
      }));
      return movies;
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          throw 'Data tidak ditemukan';
        } else {
          throw 'Terjadi kesalahan pada server';
        }
      } else if (error.request) {
        throw 'Tidak ada respon dari server';
      } else {
        throw 'Terjadi kesalahan dalam mengirimkan permintaan';
      }
    }
  }
}

export default DataSource;