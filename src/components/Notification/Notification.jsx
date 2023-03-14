import PropTypes from 'prop-types';

export const Notification = props => {
  return (
    <div>
      <h3>{props.message}</h3>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
