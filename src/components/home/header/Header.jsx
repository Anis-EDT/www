
import React from 'react'
import PropTypes from 'prop-types'
import './Header.scss'

const Header = ({ Myinput }) => (
  <div className="main-header">
        Search bar <input className="search" onChange={e => (Myinput(e.target.value))} />
  </div>
)

Header.propTypes = {
  Myinput: PropTypes.string.isRequired,
}
export default Header
