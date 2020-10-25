import { atom } from 'recoil'
import {MovieModel} from "../actions/movie-actions";

export const movieList = atom({
  key: 'list',
  default: []
})

export const selectedMovie = atom({
  key: 'selectedMovie',
  default: MovieModel
})