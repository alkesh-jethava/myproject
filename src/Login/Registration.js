import React from 'react';
import Logo from '../Images/Logo.png';
import '../CSS/Login.css';
import TextInputs from '../Components/TextInput';
import Buttons from '../Components/Buttons';

const error = {
  color: 'red',
  fontSize: '10px',
  marginTop: '0px',
  letterSpacing: '1px'
}

export default class Registration extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

      user_name: '',
      user_nameErr: false,
      user_nameErr_Text: '',

      email: '',
      emailErr: false,
      emailErr_Text: '',

      mobile: '',
      mobileErr: false,
      mobileErr_Text: '',

      password: '',
      passwordErr: false,
      passwordErr_Text: '',

      cpassword: '',
      cpasswordErr: false,
      cpasswordErr_Text: '',

      accountType: 2
    }
  }

  componentDidMount = () => {
    const actTypes = localStorage.getItem("actType");
    if (actTypes === "2") {
      this.props.history.push("Home");
    } else {
      this.props.history.push("/");
    }
  };

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }



  login = (e) => {
    e.preventDefault();

    let validate = false;

// **************************username******************************

    if (this.state.user_name === '') {
      validate = true;
      this.setState(
        {
          user_nameErr: true,
          user_nameErr_Text: 'Enter Your Name'
        }
      )
    }
    else if (!/^[A-Za-z]{3,30}$/.test(this.state.user_name)) {
      validate = true;
      this.setState(
        {
          user_nameErr: true,
          user_nameErr_Text: 'Name must be contain Capital and Smaller Letter'
        }
      )
    }
    else {
      this.setState(
        {
          user_nameErr: false,
          user_nameErr_Text: ''
        }
      )
    }

  // ************************************Email**************************

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

    // ***********************************Mobile**************************************

    if (this.state.mobile === '') {
      validate = true;
      this.setState(
        {
          mobileErr: true,
          mobileErr_Text: 'Enter Your Mobile Number'
        }
      )
    }
    else if (!/^[0-9]{10}$/.test(this.state.mobile)) {
      validate = true;
      this.setState(
        {
          mobileErr: true,
          mobileErr_Text: 'Enter Valid Mobile Number'
        }
      )
    }
    else {
      this.setState(
        {
          mobileErr: false,
          mobileErr_Text: ''
        }
      )
    }

    // ********************************passwords***********************************

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

    if (this.state.cpassword === '') {
      validate = true;
      this.setState(
        {
          cpasswordErr: true,
          cpasswordErr_Text: 'Enter Your Confirm Password'
        }
      )
    }
    else if (!/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/.test(this.state.cpassword)) {
      validate = true;
      this.setState(
        {
          cpasswordErr: true,
          cpasswordErr_Text: 'Enter Valid Confirm Password'
        }
      )
    }
    else {
      this.setState(
        {
          cpasswordErr: false,
          cpasswordErr_Text: ''
        }
      )
    }

    if (validate === false) {
      alert("check your mail to activate your account")
      fetch('http://localhost/ganeshgarment/regis.php', {
        method: 'POST',
        headers: {
          'Accept': 'Application/json',
        },
        body: JSON.stringify({
          user_name: this.state.user_name,
          email: this.state.email,
          mobile: this.state.mobile,
          password: this.state.password,
          cpassword: this.state.cpassword,
          accountType: this.state.accountType
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          localStorage.setItem('login', responseJson)
          console.log(responseJson)
          this.componentDidMount();
        })
    }

  }

  render() {
    return (
      <div className="mainDiv">
        <form >
          <div className="inputDivR">
            <div className="logoDiv">
              <img src={Logo} alt="logo" />
            </div>
            <div className="titleUP">
              <h3>SIGN UP</h3>
            </div>
            <div>
              <TextInputs type="text"
                          value={this.state.user_name}
                          name="user_name"
                          onChange={this.change}
                          placeholder="Username" 
                          />
                        <p style={error}>{this.state.user_nameErr_Text}</p>

              <TextInputs type="text"
                          value={this.state.email}
                          name="email"
                          onChange={this.change}
                          placeholder="Email" 
                          />
                        <p style={error}>{this.state.emailErr_Text}</p>

              <TextInputs type="text"
                          value={this.state.mobile}
                          name="mobile"
                          onChange={this.change}
                          placeholder="Mobile" />
                        <p style={error}>{this.state.mobileErr_Text}</p>

              <TextInputs type="text"
                          value={this.state.password}
                          name="password"
                          onChange={this.change}
                          placeholder="Password" />
                        <p style={error}>{this.state.passwordErr_Text}</p>

              <TextInputs type="text"
                          value={this.state.cpassword}
                          name="cpassword"
                          onChange={this.change}
                          placeholder="Confirm Password" />
                        <p style={error}>{this.state.cpasswordErr_Text}</p>

              <Buttons title="sign up" style={{marginTop: '0px'}}
                        onClick={this.login} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
