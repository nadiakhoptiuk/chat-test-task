import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function PrivateRoute({ children, redirect = '/login' }) {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirect} replace />;
}

PrivateRoute.propTypes = {
  redirect: PropTypes.string,
};
