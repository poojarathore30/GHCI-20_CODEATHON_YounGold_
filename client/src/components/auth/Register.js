import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import form_img from "../../img/welcome.PNG";
import img from "../../img/YG.PNG";
const Register = ({ setAlert, register, isAuthenticated }) => {
 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    age:'',
    domain:'',
    purpose:'',
    hobbies:[]
  });

  const { name, email, password, password2,age ,domain,purpose,hobbies} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onClick = (e) =>{
      hobbies.push(e.target.value)
      console.log(hobbies);
      setFormData({ ...formData, [e.target.name]:hobbies.push(e.target.value)  });
    }
   
 
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

 
  <p>Press CTRL and click above button to select multiple options at once.</p>
     

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
            <option value="computer_engineer/it">Computer Engineer/IT</option>
              <option value="mechanical_engineer">Mechanical Engineer</option>
              <option value="civil_engineer/construction">
                Civil Engineer/Construction
              </option>
              <option value="electrical_engineer">Electrical Engineer</option>
              <option value="electrical_&_electronics_engineer">
                Electrical and Electronics engineer
              </option>
              <option value="ec_engineer">EC engineer</option>
              <option value="military">Farming</option>
              <option value="fishing">Fishing</option>
              <option value="n/a">N/A</option>
              <option value="chef">Chef</option>
              <option value="lawyer/judge">Lawyer/Judge</option>
              <option value="military">Military</option>
              <option value="ministerial_activities">
                Ministerial Activities
              </option>
              <option value="administrative_services">
                Administrative Services
              </option>
              <option value="other_student/profession">
                Other Student/Profession
              </option>
              <option value="engineering_manager">Engineering Manager</option>
              <option value="hr">HR</option>
              <option value="psychiatrist">Psychiatrist</option>
              <option value="architect">Architect</option>
              <option value="sales/marketing">Sales/Marketing</option>
              <option value="doctor">Doctor</option>
              <option value="teacher">Teacher</option>
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
          <select name="hobbies" value={hobbies} multiple onClick={onClick} >
            <option>* Select your Hobbies</option>
            <option value="acting">acting</option>
              <option value="animal_care">animal_care</option>
              <option value="motivating">motivating</option>
              <option value="sports">sports</option>
              <option value="computer_programming">computer_programming</option>
              <option value="video_games">video_games</option>
              <option value="travel">travel</option>
              <option value="instrument">instrument</option>
              <option value="singingr">singing</option>
              <option value="dancing">dancing</option>
              <option value="movies">movies</option>
              <option value="listening_songs">listening_songs</option>
              <option value="badminton">badminton</option>
              <option value="table_tennis">Table Tennis</option>
              <option value="cooking">cooking</option>
              <option value="gardening">gardening</option>
              <option value="meditation/yoga">meditation/yoga</option>
              <option value="reading">reading</option>
              <option value="watching_web_series">watching_web_series</option>
              <option value="watching_tv">watching_tv</option>
              <option value="social_networking">social_networking</option>
              <option value="animes">animes</option>
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
