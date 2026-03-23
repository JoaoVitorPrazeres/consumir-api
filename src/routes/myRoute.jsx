import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function myRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;
  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }
  return <Route {...rest} component={Component} />;
}
myRoute.defaultProps = {
  isClosed: false,
};
myRoute.PropTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
