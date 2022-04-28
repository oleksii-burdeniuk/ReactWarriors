import React from 'react';
import { API_KEY, API_URL } from './api/api';
import './App.css';
import MovieItem from './components/movieItem';
import MovieTabs from './components/movieTabs';




class App extends React.Component {
  constructor() {
    super()
    this.state = {
      movie: [],
      moviesWillWatch: [],
      sort_by: 'popularity.desc'
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
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY}&sort_by=${this.state.sort_by}`).then((response) => {
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
    if (this.state.sort_by !== prevState.sort_by) {
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
  render() {
    return (
      <div className='container'>
        <MovieTabs sort_by={this.state.sort_by} updateSortBy={this.updateSortBy} />
        <div className='movieContainer'>
          {this.state.movie.map((movie) => {
            return (
              <MovieItem key={movie.id} movie={movie} removeMovie={this.removeMovie}
                addMovieToWillWatch={this.addMovieToWillWatch} removeMovieToWillWatch={this.removeMovieToWillWatch} />
            )
          })}
        </div>
        <div >
          <p> will watch: {this.state.moviesWillWatch.length}</p>
        </div>

      </div>
    )
  }
}

export default App;
