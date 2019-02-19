import React, { Component } from 'react'
import { createStore, compose, applyMiddleware } from 'redux'
import PropTypes from 'prop-types'
import reducers from '../duck/reducer'

import './Addmovie.scss';
import { connect } from 'react-redux';


class Addmovie extends Component {
  static propTypes = {
    store: PropTypes.objectOf.isRequired,
  }


    handleSubmit = (e) => {
      const store = createStore(
        reducers,
      )
      e.preventDefault();
      const name = this.getTitle.value;
      const image = this.getImage.value;
      const year = this.getYear.value;

      const Movie = {
        id: new Date(),
        name,
        image,
        year,
      }
      // console.log(Movie)
      store.dispatch({
        type: 'add',
        Movie,
      });
      this.getTitle.value = '';
      this.getImage.value = '';
      this.getYear.value = '';
    }


    render() {
      return (
        <div>
          <h1>Create Movie</h1>

          <input
            required
            type="text"
            ref={(input) => { this.getTitle = input; }}
          />
          <br /><br />
          <input
            required
            ref={(input) => { this.getImage = input; }}
          />
          <br /><br />
          <input
            required
            ref={(input) => { this.getYear = input; }}
          />
          <br /><br />
          <button type="submit" onClick={this.handleSubmit}>Add</button>
        </div>
      );
    }
}
const mapDispatchToProps = dispatch => ({
  onAdd: (state) => {
    const cleanState = { ...state };
    delete cleanState.isModalOpen;
    dispatch({
      type: 'add',
    });
  },
});

export default connect(null, mapDispatchToProps)(Addmovie)
