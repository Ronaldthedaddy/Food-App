import React from "react";
import "./forgot.css";
import tmlogo from "../images/tmlogo.png";
import foodlogo from "../images/foodlogo.png";
import arrow from "../images/arrow.png";
import letter from "../images/letter.png";
import phone from "../images/phone.png";
import { Link } from "react-router-dom";

import { AiFillCheckCircle } from "react-icons/ai";

export const forgot = () => {
  const forget = sessionStorage.getItem("forget");

  const data = [
    {
      img: letter,
      id: 1,
      name: "Reset via Email",
      d: 'email',
      text: "Link reset will be send to registered email",
      icon: <AiFillCheckCircle />,
    },
    {
      img: phone,
      id: 2,
      d: 'number',
      name: "Reset via Phone Number",
      text: "Link reset will be send to registered Phone Number",
      icon: <AiFillCheckCircle />,
    },
  ];

  const handleSendCode = (e) => {
e?.preventDefault();
if (sessionStorage.getItem("forget") === 'email') {
  window.location.assign('/resetemail')
}else{
  window.location.assign('/resetnumber')
}
  }
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
        <Link to="/" className="top">
          <div>
            <img src={arrow} className="arrow" alt="" />
          </div>
          <div className="back"> Back</div>
        </Link>

        <article className="forgot_box">
          <div className="forgot_text">Forgot Password</div>
          <div className="reset_text">
            Please select the option to send link reset password
          </div>

          <div className="bothreset">
            {data.map((item) => {
              return (
                <>
                  <div
                    className="reset_email"
                    key={item.id}
                    onClick={() => {
                      sessionStorage.setItem("forget", item.d);
                    }}
                    style={{
                      border: forget === item.d ? "3px solid #36AAD9" : "3px solid #A3A3A3",
                    }}
                  >
                    <div className="sub-reset_email">
                      <div>
                        <img src={item.img} className="letter" alt="" />
                      </div>
                      <div className="resets">
                        <div
                          className="resetvia_text"
                          style={{
                            color: forget === item.d? "#36AAD9" : "",
                          }}
                        >
                          {item.name}
                        </div>
                        <div className="link_text">
                          {item.text}
                        </div>
                      </div>
                    </div>

                    <div
                      className="radio_div"
                      style={{ color: forget === item.d ? "#36AAD9" : "" }}
                    >
                      {item.icon}
                    </div>
                  </div>
                </>
              );
            })}

            {/* <Link to="/reset"> */}
              {" "}
              <button onClick={handleSendCode} style={{border: 'none', width: '100%', cursor: 'pointer'}} className="sendlink">Send Code</button>{" "}
            {/* </Link> */}

            <div className="account">
              <div>Didn’t receive link? </div>
              <Link to="/forgot" className="login_link">
                Resend
              </Link>
            </div>

            <p className="timer">1 : 24</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default forgot;
