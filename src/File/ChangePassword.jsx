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
      password: '',
      passwordErr: false,
      passwordErr_Text: ''
    }
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
        [name]: value
    })
  }

  
  forgot = () => {

    let validate = false

    
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
        fetch('http://localhost/ganeshgarment/changePassword.php', {
          method: 'POST',
          headers:{
            'Accept': 'Application/json'
          },
          body: JSON.stringify({
            password: this.state.password
          })
        })
        .then(response => response.json())
        .then(responseJson => {
          if(responseJson === 1)
          {
              this.props.history.push('/CreateNewPassword')
          }
          else
          {
              alert("Please try again")
          }
        })
    }
  }

  render() {
    return (
        <div className="mainDiv">
        <form>
        <div className="inputDiv">
            <div className="logoDiv">
                <img src={Logo} alt="logo"/>      
            </div>
            <div className="titleVE">
              <h5>Enter Your Old Password</h5>
              </div>
              <TextInputs type="text"
                          value={this.state.password}
                          name="password"
                          onChange={this.change}
                          placeholder="Password" />
                        <p style={error}>{this.state.passwordErr_Text}</p>
                <Buttons title="Verify" onClick={this.forgot}/>
            </div>
      </form>
    </div>
    );
  }
}
