import { connect } from 'react-redux'
import { toggleSpinAnimation } from './duck/operations'

import Home from './Home'

// const mapStateToProps = ({ home }) => ({ shouldSpin: home.shouldSpin })
const mapDispatchToProps = { toggleSpinAnimation }


const mapStateToProps = state => ({
  movies: state,
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
