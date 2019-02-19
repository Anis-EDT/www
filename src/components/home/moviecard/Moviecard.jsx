import React from 'react'
import PropTypes from 'prop-types'
import './Moviecard.scss'

function Stars({ rank }) {
  const stars = (`${'*'.repeat(rank)}00000`).substr(0, 5);

  return (
    <div>
      {stars.split('').map((el, i) => {
        if (el === '*') {
          return <i className="fas fa-star" />;
        }
        return <i className="far fa-star" />;
      })}
    </div>
  );
}
Stars.propTypes = {
  rank: PropTypes.number.isRequired,
}

const Moviecard = ({ Movies }) => (
  <div className="moviecard">
    <div className="boxes">
      <img className="images" alt="movie" src={Movies.image} />,{' '}
      <h1 className="title"> {Movies.name} </h1>,{' '}
      <Stars className="rank" rank={Movies.rating} />{' '}
    </div>
  </div>
);
Moviecard.propTypes = {
  Movies: PropTypes.objectOf.isRequired,
}

export default Moviecard
