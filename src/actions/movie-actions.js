// @flow
import * as React from 'react';
import { IActions } from './interfaces/IActions';
import { movies_listings as Listings } from '../dataStore/staticData/MovieListings';
import { CreateUUID } from '../utils/utilities';

type _movieModel = {
  +ID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
};

export const MovieModel = (result): _movieModel => {
  debugger
  const m: _movieModel = {
    ID: result.ID || CreateUUID(),
    Title: result.Title,
    Year: result.Year,
    Rated: result.Rated,
    Released: result.Released,
    Runtime: result.Runtime,
    Genre: result.Genre,
    Director: result.Director,
  }
  return m
}

class MovieActions implements IActions<_movieModel> {
  async select() {
    const results = Listings   // CALL TO API => await axios.get(...)

    const movies =results.map(movie => {
      return MovieModel(movie)
    })

    return movies
  }
  selectById(string) {
    return undefined;
  }
  insert() {
    return undefined;
  }
  update(id, model) {
    return undefined;
  }
  delete(id) {
    return undefined;
  }
}

export default MovieActions

