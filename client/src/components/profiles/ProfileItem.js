import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import im from "./noProfile.png"
const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills,
    roomcode
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar?avatar:im} alt='' className='round-img' />
      <div>
        <h2>{name}</h2>
        <h3>Room Code : <span className='roomcode'>{roomcode}</span></h3>
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
