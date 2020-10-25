// @flow
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import MovieActions, { MovieModel } from '../actions/movie-actions'
import MovieItem from "./MovieItem";
import { movieList as MovieList, movieClickCount, selectedMovie as SelectedMovie } from './MovieAtoms'


const HomePage = props => {
  const [listState, setListState] = useRecoilState(MovieList)
  const [selectedMovie, setSelectedMovie] = useRecoilState(SelectedMovie)

  useEffect(async () => {
    const movie = new MovieActions()
    let movieResult = await movie.select()
    debugger
    setListState([
      ...movieResult
    ])

  }, [])

  const movieClick = id => {
    debugger
    const item = listState.filter(x => x.ID === id)
    setSelectedMovie(item[0])
  }

  return(
    <div className="flex flex-column home-content">
      <div className="flex flex-row pt2">
        Recoil Example List
      </div>
      <div className="flex flex-row pt2">
        <ul>
          {listState.map((listItem, key) => {
            let m = MovieModel(listItem)
            return <li key={key} onClick={() => movieClick(m.ID)}>{m.Title}</li>
          })}
        </ul>
      </div>
      <MovieItem />
    </div>
  )
}

export default HomePage