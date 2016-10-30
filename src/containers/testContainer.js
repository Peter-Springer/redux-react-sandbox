import { connect } from 'react-redux';
import Header from '../components/Header';

const mapStateToProps = (state) => ({ actionTestReducer: state});

export default connect(mapStateToProps)(Header);
