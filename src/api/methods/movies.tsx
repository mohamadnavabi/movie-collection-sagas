import Api from '../index';
import Constants from '../Constants';

// Get All Movies
const getMovies = (token: string) => {
  return Api(Constants.MOVIE, null, 'get', token);
}

// search Movie with Name
const searchMovie = (params: object) => {
  return Api(`${Constants.MOVIE}?search=${params.searchFor}`, null, 'get', params.token);
}

// Get Movie With Category
const getMovieWithCategory = (params: object) => {
  return Api(`${Constants.MOVIE}?tags=${params.category}`, null, 'get', params.token);
}

export { getMovies, searchMovie, getMovieWithCategory };