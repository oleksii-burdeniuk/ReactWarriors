import React from 'react';
import { API_KEY, API_URL } from './api/api';
import './App.css';
import MovieItem from './components/movies/movieItem/movieItem';
import MovieTabs from './components/movieTabs';
import Paginator from './components/paginator';
import cn from 'classnames'
import PaginatorFunctional from './components/movies/paginator/paginatorFunctional';
import Header from './components/header/headerComponent';
import Movies from './components/movies/movies';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movie: [],
      moviesWillWatch: [],
      sort_by: 'popularity.desc',
      page: 1,
      adult: false,
    }
  }
  removeMovie = (movie) => {
    let updateMovies = this.state.movie.filter((item) => {
      return item.id !== movie.id
    })
    this.setState({
      movie: updateMovies
    })
  }
  getMovies = () => {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort_by}&page=${this.state.page}&include_adult=${this.state.adult}`).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        movie: data.results
      })
    })
  }

  componentDidMount() {
    this.getMovies()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.sort_by !== prevState.sort_by || this.state.page !== prevState.page) {
      this.getMovies()
    }
  }
  addMovieToWillWatch = (movie) => {
    let updateMoviesWillWatch = [...this.state.moviesWillWatch, movie]
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }
  removeMovieToWillWatch = (movie) => {
    let updateMoviesWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id
    })
    this.setState({
      moviesWillWatch: updateMoviesWillWatch
    })
  }
  updateSortBy = (value) => {
    this.setState({
      sort_by: value

    })
  }
  switchPage = (value) => {
    this.setState({
      page: value,
    })
  }

  render() {
    return (<div className='headContainer'>
      <Header />
      <Movies movie={this.state.movie} removeMovie={this.removeMovie}
        addMovieToWillWatch={this.addMovieToWillWatch} removeMovieToWillWatch={this.removeMovieToWillWatch} switchPage={this.switchPage} page={this.state.page} />
    </div>
    )
  }
}

export default App;
