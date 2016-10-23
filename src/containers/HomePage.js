import {GQL, pokemonQuery} from '../util/GraphQL';
import { connect } from 'react-redux';
import Home from '../components/Home';


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    query: () => {
      GQL.query(pokemonQuery)
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return state;
}

const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomePage;
