import React from 'react'
import { useRecoilValue } from 'recoil'
import { selectedMovie } from './MovieAtoms'
import {MovieModel} from "../actions/movie-actions";

export default (() => {
  const movieSelected = useRecoilValue(selectedMovie)
  let m = MovieModel(movieSelected)
  return (
      <div className="flex flex-column w-100 outline">
        <div className="flex flex-row">
          Movie Selected: {m.Title}
        </div>
        <div className="flex flex-row">
          Year: {m.Year}
        </div>
        <div className="flex flex-row">
          Released: {m.Released}
        </div>
        <div className="flex flex-row">
          Rated: {m.Rated}
        </div>
        <div className="flex flex-row">
          Genre: {m.Genre}
        </div>
        <div className="flex flex-row">
          Runtime: {m.Runtime}
        </div>
        <div className="flex flex-row">
          Director: {m.Director}
        </div>
      </div>
  )
})