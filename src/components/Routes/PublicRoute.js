import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/auth/authSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  redirect = '/chat',
}) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirect} replace /> : children;
}

PublicRoute.propTypes = {
  redirect: PropTypes.string,
  restricted: PropTypes.bool,
};
