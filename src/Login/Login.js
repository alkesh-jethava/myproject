import React from "react";
import Logo from "../Images/Logo.png";
import "../CSS/Login.css";
import TextInputs from "../Components/TextInput";
import Buttons from "../Components/Buttons";
import { NavLink } from "react-router-dom";

const error = {
  color: 'red',
  fontSize: '10px',
  letterSpacing: '1px'
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailErr: false,
      emailErr_Text: '',

      password: "",
      passwordErr: false,
      passwordErr_Text: ''
    };
  }
  componentDidMount = () => {
    const actTypes = localStorage.getItem("actType");
    if (actTypes === "2") {
      this.props.history.push("Home");
    } else {
      this.props.history.push("/");
    }
  };

  login = (e) => {
    e.preventDefault();

    let validate = false;


    if (this.state.email === '') {
      validate = true;
      this.setState(
        {
          emailErr: true,
          emailErr_Text: 'Enter Your E-Mail'
        }
      )
    }
    else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email))) {
      validate = true;
      this.setState(
        {
          emailErr: true,
          emailErr_Text: 'Enter Valid E-Mail'
        }
      )
    }
    else {
      this.setState(
        {
          emailErr: false,
          emailErr_Text: ''
        }
      )
    }

    if (this.state.password === '') {
      validate = true;
      this.setState(
        {
          passwordErr: true,
          passwordErr_Text: 'Enter Your Password'
        }
      )
    }
    else if (!/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/.test(this.state.password)) {
      validate = true;
      this.setState(
        {
          passwordErr: true,
          passwordErr_Text: 'Enter atleast 6 letter'
        }
      )
    }
    else {
      this.setState(
        {
          passwordErr: false,
          passwordErr_Text: ''
        }
      )
    }

    if(validate === false)
    {
      fetch("http://localhost/ganeshgarment/login.php", {
        method: "POST",
        headers: {
          Accept: "Application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.status === "1") {
            localStorage.setItem("actType", responseJson.user.accountType);
             this.componentDidMount();
            this.props.history.push("Home");

          } else {
            alert(responseJson);
            this.props.history.push("/");
          }
        });
    }
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="mainDiv">
        <form>
          <div className="inputDiv">
            <div className="logoDiv">
              <img src={Logo} alt="logo" />
            </div>

            <div className="titleIN">
              <h3>SIGN IN</h3>
            </div>

            <TextInputs type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.change}
                        placeholder="Email"/> 
                        <p style={error}>{this.state.emailErr_Text}</p>
            
            <TextInputs type="text"
                        value={this.state.password}
                        name="password"
                        onChange={this.change}
                        placeholder="Password"/>
                        <p style={error}>{this.state.passwordErr_Text}</p>

            <div className="fpDiv">
              <NavLink to="/ForgotPassword" className="fp">
                Forgot Password ?
              </NavLink>
            </div>
         
            <Buttons title="Login" onClick={this.login} />

            <Buttons title="sign up" onClick={() => this.props.history.push("Registration")}/>

          </div>
        </form>
      </div>
    );
  }
}
