import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { signin } from "../../firebase/firebase.utils";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I have already an account</h2>
        <span className="subtitle">Sign in with your email or password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            id="email"
            label={"Email"}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            id="password"
            type="password"
            value={this.state.password}
            required
            label={"Password"}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signin} type="reset" isGoogleSignIn>
              Sign in with Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
