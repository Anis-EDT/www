import React from 'react'
import PropTypes from 'prop-types'
import './Movie.scss'
import { connect } from 'react-redux';
import MovieCard from '../moviecard'
import Addmovie from '../addmovie';


const MovieList = ({ movieList }) => (
  <div className="MovieList">
    {movieList.map(movie => <MovieCard movie={movie} />)}
    <Addmovie />
  </div>
)
const mapStateToProps = state => ({
  movieList: state.movieList,
})
export default connect(mapStateToProps)(MovieList)
