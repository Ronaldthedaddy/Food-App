/* eslint-disable no-unused-vars */
import "./Reset.css";
import tmlogo from "../images/tmlogo.png";
import foodlogo from "../images/foodlogo.png";
import arrow from "../images/arrow.png";
import envelope from "../images/envelope.png";
import { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export const ResetEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  //   const handleReset = async (email) => {
  //     console.log(email);
  //     try {
  //       setLoading(true);

  //       const response = await fetch(
  //         `http://89.38.135.41:7654/api/auth/forgot-password?email=${email}`,
  //         {
  //           method: "POST",
  //           headers: { "Content-Type": "application/json" },
  //           body: JSON.stringify(email),
  //         }
  //       );

  //       const data = await response.json();
  //       setLoading(false);

  //       console.log(data);
  //     } catch (error) {
  //       // Handle any errors that occurred during the API request
  //       console.error("Error occurred:", error);
  //       setLoading(false);
  //     }
  //   };

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    // if (
    //   inputValue.state === ""
    // ) {
    //   setLoading(false);
    // //   return toast.error(`Ensure all input fields are filled`);
    // }

    const AddModal = await axios
      .post(`http://89.38.135.41:7654/api/auth/forgot-password?email=${email}`, {
        email: email,
      })

      .then((response) => {
        if (response?.data?.status) {
          setLoading(false);
          window.location.assign("/reset");
        } else {
          setLoading(false);
        }
      })
      .catch((e) => {
        setLoading(false);
        
      });
  };
  console.log("egdghw");

  return (
    <main className="main_cont">
      
      {/* First container (left side) */}
      <section className="first_cont">
        <img src={tmlogo} alt="" />
        <div className="food_logo">
          <img src={foodlogo} className="foodlogo" alt="" />
        </div>

        <div className="down_text">
          <div>
            <b>Order your</b> <span>favorite lunch</span>
          </div>
          <span>&</span>
          <span>
            Enjoy other <b>Services</b>
          </span>

          <p className="curve"></p>
        </div>
      </section>

      {/* Second container (right side) */}

      <section className="second_cont">
        <Link to="/forgot" className="top">
          <div>
            <img src={arrow} className="arrow" alt="" />
          </div>
          <div className="back"> Back</div>
        </Link>

        <div className="forgot_text">Reset Email</div>
        <div className="reset_text">Here you have to reset password</div>

        <label className="first_name2"> Email Address </label>
        <div className="name">
          <div className="person">
            <img src={envelope} className="email_img" alt="" />{" "}
          </div>
          <div className="placeholder">
            {" "}
            <input
              className="input"
              type="email"
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e?.target?.value)}
            />{" "}
          </div>
        </div>
        <br></br>

        <button className="register_btn" onClick={handleReset}>
          {" "}
          <b className="register_text">
            {loading ? "Loading..." : "Reset Password"}
          </b>{" "}
        </button>
      </section>
    </main>
  );
};

export default ResetEmail;
