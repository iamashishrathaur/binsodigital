import PropTypes from 'prop-types';

const Preloader = ({ isActive }) => {
  return (
    <div className={`preloader ${isActive ? 'active' : ''}`}>
      {/* Preloader content */}
    </div>
  );
};

Preloader.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default Preloader;
