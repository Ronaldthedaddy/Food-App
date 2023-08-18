/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Reset.css";
import tmlogo from "../images/tmlogo.png";
import foodlogo from "../images/foodlogo.png";
import padlock from "../images/padlock.png";
import arrow from "../images/arrow.png";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

export const Reset = () => {
  const [resetToken, setResetToken] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://89.38.135.41:7654/api/auth/reset-password",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            resetToken: resetToken,
            newPassword: newPassword,
            confirmPassword: confirmPassword,
          }),
        }
      );

      const data = await response.json();

      if (data.status) {
        setLoading(false);

        // If data.status is true, redirect to '/home'
        navigate("/");
      } else {
        setLoading(false);
        // Handle the case where data.status is false or not present
        setError("Password reset failed");
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred while resetting the password");
    }
  };

  const [inputPassThree, setInputPassThree] = useState("password");
  const [showThree, setShowThree] = useState(false);

  const handleShowThree = () => {
    setShowThree(!showThree);
    setInputPassThree(inputPassThree === "password" ? "text" : "password");
  };

  const [inputPassFour, setInputPassFour] = useState("password");
  const [showFour, setShowFour] = useState(false);

  const handleShowFour = () => {
    setShowFour(!showFour);
    setInputPassFour(inputPassFour === "password" ? "text" : "password");
  };

  const [inputPassFive, setInputPassFive] = useState("password");
  const [showFive, setShowFive] = useState(false);

  const handleShowFive = () => {
    setShowFive(!showFive);
    setInputPassFive(inputPassFive === "password" ? "text" : "password");
  };

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
        <Link to="/resetemail" className="top">
          <div>
            <img src={arrow} className="arrow" alt="" />
          </div>
          <div className="back"> Back</div>
        </Link>

        <article className="reset_box">
          <div className="forgot_text">Reset Password</div>
          <div className="reset_text">Here you have to reset password</div>

          <div>{error}</div>

          <div className="bothpassword">
            <label className="password"> Token</label>
            <div className="email">
              <div className="envelope">
                <img src={padlock} className="email_img" alt="" />{" "}
              </div>
              <div className="placeholder">
                <input
                  className="input"
                  type={inputPassFive}
                  placeholder="Enter token here"
                  onChange={(e) => setResetToken(e.target.value)}
                />
                <button className="eye" onClick={handleShowFive}>
                  {showFive ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
                </button>
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
                  type={inputPassThree}
                  placeholder="New password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button className="eye" onClick={handleShowThree}>
                  {showThree ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}{" "}
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
                  type={inputPassFour}
                  placeholder="Confirm New password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button className="eye" onClick={handleShowFour}>
                  {showFour ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>
            </div>
            <div>
              {" "}
              <b className="sendlink2" onClick={handleReset}>
                {loading ? "loading..." : "Reset Password"}
              </b>{" "}
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Reset;
