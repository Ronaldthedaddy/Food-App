/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./SignUp.css";
import tmlogo from "../images/tmlogo.png";
import foodlogo from "../images/foodlogo.png";
import axios from "axios";
import padlock from "../images/padlock.png";
import envelope from "../images/envelope.png";
import person from "../images/person.png";
import phone from "../images/phonelogo.png";
import { Link } from "react-router-dom";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export const SignUp = () => {
  const [Email, setEmail] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  
  const [loading, setLoading] = useState(false);

  const [inputPass, setInputPass] = useState("password");
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
    setInputPass(inputPass === "password" ? "text" : "password");
  };

  const [inputPassTwo, setInputPassTwo] = useState("password");
  const [showTwo, setShowTwo] = useState(false);

  const handleShowTwo = () => {
    setShowTwo(!showTwo);
    setInputPassTwo(inputPassTwo === "password" ? "text" : "password");
  };

const handleSignup = async (e) => {
  e.preventDefault();
  setLoading(true);

  const AddModal = await axios
  .post("http://89.38.135.41:7654/api/auth/staff-signup",{
          email: Email,
          phone: Phone,
          firstName: FirstName,
          lastName: LastName,
          password: Password,
          confirmPassword: ConfirmPassword,
  })
  
  .then((response) => {
    if (response?.data?.status) {
      setLoading(false);
      window.location.assign("/");
      console.log(response);
    } else {
      setLoading(false);
    }
  })
  .catch((e) => {
    setLoading(false);
    
  });
};
console.log("");

  return (
    // Main container

    <main path="/" className="main_cont">

<section className="first_cont">
        <img src={tmlogo} alt="" />
        <div className="food_logo">
          <img src={foodlogo} className="foodlogo34" alt="" />
        </div>

        <div className="down_text">
          <div>
            <b>Order your</b> <span>favorite lunch</span>
          </div>
          <span>&</span>
          <span>Enjoy  other <b>Services</b></span>

          <p className='curve'></p>
          

        </div>
        
      </section>

      {/* Second container, right side */}

      <section className="second_cont">
        <div className="food_logo26">
          <img src={tmlogo} className="foodlogo2" alt="" />
        </div>

        <span className="details_text">
          {" "}
          Please fill in your details to get started
        </span>

        <label className="first_name"> Email Address </label>
        <div className="name">
          <div className="person">
            <img src={envelope} className="email_img" alt="" />{" "}
          </div>

          <div className="placeholder">
            <input
              className="input"
              type=""
              placeholder="Adelekepeters@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <br></br>

        <label className="first_name"> Phone Number</label>
        <div className="name">
          <div className="person">
            <img src={phone} className="phonelogo" alt="" />{" "}
          </div>
          <div className="placeholder">
            <input
              className="input2"
              type=""
              placeholder="Enter Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
        </div>
        <br></br>

        <label className="first_name"> First Name</label>
        <div className="name">
          <div className="person">
            <img src={person} className="person_img" alt="" />{" "}
          </div>
          <div className="placeholder">
            <input
              className="input"
              type=""
              placeholder="Enter your first name"
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
          </div>
        </div>

        <label className="last_name"> Last Name</label>
        <div className="name">
          <div className="person">
            <img src={person} className="person_img" alt="" />{" "}
          </div>
          <div className="placeholder">
            <input
              className="input"
              type=""
              placeholder="Enter your last name"
              onChange={(e) => setLastName(e.target.value)}
            ></input>
          </div>
        </div>

        <label className="password"> New Password</label>
        <div className="email">
          <div className="envelope">
            <img src={padlock} className="email_img" alt="" />{" "}
          </div>
          <div className="placeholder">
            <input
              className="input"
              type={inputPass}
              placeholder="New password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="eye" onClick={handleShow}>
              {show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
            </button>
          </div>
        </div>

        <label className="password"> Confirm New Password</label>
        <div className="email">
          <div className="envelope">
            <img src={padlock} className="email_img" alt="" />{" "}
          </div>
          <div className="placeholder">
            <input
              className="input"
              type={inputPassTwo}
              placeholder="Confirm New password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="eye" onClick={handleShowTwo}>
              {showTwo ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>

        <button className="register_btn" onClick={handleSignup} >
          {" "}
          <b className="register_text">
             {loading ? "Loading..." : "Register"}
          </b>{" "}
        </button>

        <div className="account">
          <div>Already have an account? </div>
          <Link to="/login" className="login_link">
            Login
          </Link>
        </div>
      </section>

      {/* End of second container */}
    </main>

    //  End  of main container
  );
};

export default SignUp;
