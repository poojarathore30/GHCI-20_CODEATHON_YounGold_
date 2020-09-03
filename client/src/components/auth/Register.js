import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import form_img from "../../img/welcome.PNG";
import img from "../../img/LOGO.png";
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    age:'',
    domain:'',
    purpose:'',
    hobbies:''
  });

  const { name, email, password, password2,age ,domain,purpose,hobbies} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password,age,domain,purpose,hobbies });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
    <div className="login-div">
   
    <div className="form-div">
    <div style={{textAlign:'center', margin:'0',padding:'0'}}><img src={img} className='logo-img ' ></img></div>
    <p className="lead">
   Sign-Up 
  </p>
  <form className="form" onSubmit={onSubmit}>
  <div className="form-group">
    <input
      type="text"
      placeholder="Name"
      name="name"
      value={name}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <input
      type="email"
      placeholder="Email Address"
      name="email"
      value={email}
      onChange={onChange}
    />
    <small className="form-text">
      This site uses Gravatar so if you want a profile image, use a
      Gravatar email
    </small>
  </div>
  <div className="form-group">
    <input
      type="password"
      placeholder="Password"
      name="password"
      value={password}
      onChange={onChange}
    />
  </div>
  <div className="form-group">
    <input
      type="password"
      placeholder="Confirm Password"
      name="password2"
      value={password2}
      onChange={onChange}
    />
  </div>
  

 <div className="form-group">
  <input
    type="text"
    placeholder="Age"
    name="age"
    value={age}
    onChange={onChange}
  />
</div>
<div className="form-group">
          <select name="domain" value={domain} onChange={onChange}>
            <option>* Select your Professional Domain</option>
            <option value="Engineer">Engineer</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Doctor">Doctor</option>
            <option value="Farming">Farming</option>
            <option value="Fishing">Fishing</option>
            <option value="Administrative services">Administrative services</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Teacher">Teacher</option>
            <option value="Sales/Marketing">Sales/Marketing</option>
            <option value="Military">Miitary</option>
            <option value="Ministral activiies">Ministral activiies</option>
            <option value="HR">HR</option>
            <option value="lawyer/judge">lawyer/judge</option>
            <option value="Business">Business</option>
            <option value="N/A">N/A</option>
          </select>
          <small className="form-text">
            Give us an idea of your career Domain
          </small>
        </div>

        <div className="form-group">
        <select name="purpose" value={purpose} onChange={onChange}>
          <option>* Select Purpose ?</option>
          <option value="Get help">Get help</option>
          <option value="Give help">Give help</option>
          <option value="Both">Both</option>
        </select>
      </div>
 
      <div className="form-group">
          <select name="hobbies" value={hobbies} onChange={onChange}>
            <option>* Select your Hobbies</option>
            <option value="Acting">Acting</option>
            <option value="Animal Care">Animal Care</option>
            <option value="Social networking">Social networking</option>
            <option value="Motivating">Motivating</option>
            <option value="Travelling">Travelling</option>
            <option value="Computer Programming">Computer Programming</option>
            <option value="Singing">Singing</option>
            <option value="Dancing">Dancing</option>
            <option value="Teacher">Teacher</option>
            <option value="Table Tennis">Table Tennis</option>
            <option value="Badminton">Badminton</option>
            <option value="Cricket">Cricket</option>
            <option value="Watching Movies">Watching Movies</option>
          </select>
          <small className="form-text">
            Give us an idea of your interests
          </small>
        </div>







  <input type="submit" className="btn btn-primary" value="Register" />
</form>
<p className="my-1">
    Already have an account? <Link to="/login">Sign In</Link>
  </p>
    </div>
    <div className="image-div">
    <img src={form_img}></img>
  </div>
  </div>
     
    </Fragment>

  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
