import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const MusicCard = ({ info }) => {
  return (
    <Link to="/#">
      <div className='border-2 border-white rounded'>
        <div>
        <img  src={info.image} alt={info.name} />
        </div>
        <div className='bg-white text-gray-900 px-2 py-1'>
          <small>{info.name}</small>
        </div>
      </div>
    </Link>
  );
};

MusicCard.propTypes = {
  info: PropTypes.exact({
    link: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};
export default MusicCard;
