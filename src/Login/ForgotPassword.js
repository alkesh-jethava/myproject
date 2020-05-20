import React from 'react';
import Logo from '../Images/Logo.png';
import '../CSS/Login.css';
import TextInputs from '../Components/TextInput';
import Buttons from '../Components/Buttons';

const error = {
  color: 'red',
  fontSize: '10px',
  letterSpacing: '1px'
}


export default class ForgotPassword extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      emailErr: false,
      emailErr_Text: ''
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

  
  forgot = () => {

    let validate = false

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
    if(validate === false)
    { 
      fetch('http://localhost/ganeshgarment/verify_email.php', {
        method: 'POST',
        headers:{
          'Accept': 'Application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(responseJson => {
        if(responseJson === 'SEND')
        {
          this.props.history.push('CreateNewPassword')
          this.componentDidMount();
        }
        else{
          alert(responseJson)
        }
      })
    }
  }

  render() {
    return (
        <div className="mainDiv">
        <from>
        <div class="inputDiv">
            <div className="logoDiv">
                <img src={Logo} alt="logo"/>      
            </div>
            <div className="titleVE">
              <h3>VERIFY EMAIL</h3>
              </div>
                  <TextInputs type="text"
                              value={this.state.email}
                              name="email"
                              onChange={this.change}
                              lbl="email"/>
                                 <p style={error}>{this.state.emailErr_Text}</p>
                <Buttons title="Verify" onClick={this.forgot}/>
            </div>
      </from>
    </div>
    );
  }
}
