import PropTypes from 'prop-types';

const studentShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  isDead: PropTypes.bool.isRequired,
});

export default { studentShape };
