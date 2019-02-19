import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import moviess from './movies'
import MovieList from './movielist'
import Header from './header'
import './Home.scss'

import Addmovie from './addmovie'

class Home extends Component {
  static propTypes = {
    // addMovie : PropTypes.any.isRequired
  }


  state = {
    // movies: [],
    SearchValue: '',
    movie: '',

  }

/*

  onInputChange = (movie) => {
    this.setState({
      movie,
    })
  }


  addMovie = (movie) => {
    console.log(movie)
    const { movies } = this.state
    const newMovie = [...movies, movie]
    this.setState({
      movies: newMovie,
    })
  }

*/
Myinput = value => this.setState({
  SearchValue: value,
})

render() {
  const { SearchValue, movie } = this.state;

  const filtredMovie = moviess.filter(
    x => x.name.toLowerCase().includes(SearchValue),
  )

  const {
    pic,
  } = this.props
  return (
    <div className="App">
      <Header Myinput={this.Myinput} />
      <MovieList list={
        filtredMovie
      }
      />
      <Addmovie />

    </div>
  );
}
}
export default Home
