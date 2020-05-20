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


export default class CreateNewPassword extends React.Component{

    constructor(props){
      super(props);
      this.state={

        password: '',
        passwordErr: false,
        passwordErr_Text: '',

        cpassword: '',
        cpasswordErr: false,
        cpasswordErr_Text: ''
      }
    }

    // componentDidMount = () => {
    //   const actTypes = localStorage.getItem("actType");
    //   if (actTypes === "2") {
    //     this.props.history.push("Home");
    //   } else {
    //     this.props.history.push("/");
    //   }
    // };

    newPass = () => {

      let validate = false;

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
      
      if(this.state.password === this.state.cpassword)
      {
        if(validate === false)
        {
          fetch('http://localhost/ganeshgarment/reset_pass.php', {
            method: 'POST',
            headers:{
              'Accept': 'Application/json'
            },
            body: JSON.stringify({
              password: this.state.password,
              cpassword: this.state.cpassword
            })
          })
          .then(response => response.json())
          .then(responseJson => {
            if(responseJson === 'PasswordUpdated')
            {
              alert("Password Updated")
              this.props.history.push('/')
              // this.componentDidMount();
            }
            else{
              alert(responseJson)
            }
          })
        }
      }
      else
      {
        alert("Password Must be same")
      }
    }

    change = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
          [name]: value
      })
    }

   

    render() {
      return (
        <div className="mainDiv">
            <form>
                <div className="inputDiv">
                    <div className="logoDiv">
                        <img src={Logo} alt="logo"/>      
                    </div>
                    <div className="titleCP">
                    <p>Create New Password</p>
                    </div>
                    
                    <TextInputs type="text"
                                value={this.state.password}
                                name="password"
                                onChange={this.change}
                                lbl="Password"/> 
                                <p style={error}>{this.state.passwordErr_Text}</p>
                                

                   <TextInputs type="text"
                                value={this.state.cpassword}
                                name="cpassword"
                                onChange={this.change}
                                lbl="Confirm Password"/> 
                                <p style={error}>{this.state.cpasswordErr_Text}</p>

                    <Buttons title="Create" onClick={this.newPass}/>
                </div>
          </form>
        </div>
      )
    };
}