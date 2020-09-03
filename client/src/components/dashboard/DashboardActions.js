import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='profile-btns'>
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
      <i class="fas fa-plus-circle"></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light'>
      <i class="fas fa-plus-circle"></i> Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
      <i class="fas fa-plus-circle"></i> Education
      </Link>
    </div>
    </div>
  );
};

export default DashboardActions;
