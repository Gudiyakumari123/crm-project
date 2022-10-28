import React, { Fragment } from "react";
import "./Login.scss";

import Logo from "../../Assets/Images/logo.png";
// import Logo from "../../Images/logo.png";

import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }

  render() {
    return (
      <Fragment>
      
        {/* Animated Login Start */}
        <div className="login-container">
          {/* <h2>Weekly Coding Challenge #1: Sign in/up Form</h2> */}

          <div className="container" id="container">
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <figure>
                  <img src={Logo} alt="" />
                </figure>
                <span>or use your email for registration</span>
                <div className="form__field">
                  <i className="bx bx-user"></i>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form__field">
                  <i className="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form__field">
                  <i className="bx bx-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <Link to="/" className="btn-signin">
                  Sign Up
                </Link>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <figure>
                  <img src={Logo} alt="" />
                </figure>
                {/* <span>or use your account</span> */}
                <div className="form__field">
                  <i className="bx bx-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <div className="form__field">
                  <i className="bx bx-lock-alt"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <a href="#">Forgot your password?</a>
                <Link to="/home" className="btn-signin">
                  Sign In
                </Link>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button className="btn-signin ghost" id="signIn">
                    Sign In
                  </button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>

                  <p>Enter your personal details and start journey with us</p>

                  <button className="btn-signin ghost" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="phone__container">
          <div className="header">
            <figure>
              <img src={Logo} alt="" />
            </figure>

            <div className="container">
              <img
                src="https://c.tenor.com/FtGd7MNyIqkAAAAM/construction-crane.gif"
                alt=""
              />
            </div>
            <Link to="/home" className="btn btn-home">
              Go to Home
            </Link>
          </div>
        </div>
        {/* Animated Login End */}
      </Fragment>
    );
  }
}
export default Login;

