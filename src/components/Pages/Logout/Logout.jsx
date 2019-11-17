import * as AuthActions from '../../../redux/Auth/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Logout = ({ logout, history }) => {
  logout();
  history.push('/login');
  return null;
};

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(AuthActions.logout, dispatch),
});

export default connect(null, mapDispatchToProps)(Logout);
