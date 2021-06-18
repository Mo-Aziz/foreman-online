import React from "react";
import {Link} from "react-router-dom";
import useForm from "./useForm";
import validateInfo from "./validateInfo";
import "./Form.css";


const FormSignup = ({SubmitForm}) => {
    const {handleChange, values, handleSubmit, errors} =useForm(validateInfo ,SubmitForm);
  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} >
        <h1>Get started with us today by filling the information below.</h1>
        <div className="form-inputs">
          <label htmlFor="firstname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="form-input"
            placeholder="Enter your first name"
            value={values.firstname}
            onChange={handleChange}
          />
          {errors.firstname && <p>{errors.firstname}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="lastname" className="form-label">
            Last Name
          </label>
          <input
            id="lastname"
            type="text"
            name="lastname"
            className="form-input"
            placeholder="Enter your last name"
            value={values.lastname}
            onChange={handleChange}
          />
              {errors.lastname && <p>{errors.lastname}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
              {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Enter Password
          </label>
          <input
            id="password"
            type="text"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
              {errors.password && <p>{errors.password}</p>}
        </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">
            Confirm your password
          </label>
          <input
            id="pasword2"
            type="password"
            name="password"
            className="form-input"
            placeholder="Confirm Your password"
            value={values.password}
            onChange={handleChange}
          />
              {errors.password2 && <p>{errors.password2}</p>}
          
        </div>
        <button className="form-input-btn" type="submit"> Sign Up</button>
          <span className="form-input-login">Already have an account? Log in{" "}<Link to="#">here</Link></span>
      </form>
    </div>
  );
};

export default FormSignup;
