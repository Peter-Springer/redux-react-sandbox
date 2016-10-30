import { connect } from 'react-redux';
import Header from '../components/Header';
import {Action} from '../actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    Click: () => {
      dispatch(Action())
    }
  }
}

const mapStateToProps = (state) => {
  const data = state.actionState.greeting;
  return {
    data
  }
};

let Head = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Head;
