import React, { useState } from "react";
import FormSignup from "./Form-signup.component";
import FormSuccess from "./Form-success";
import img1 from "../../images/foreman-girl-signup.jpg";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
          <img src={img1} className="form-img" alt="foreman" />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
