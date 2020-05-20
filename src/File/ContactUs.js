import React, { Component } from 'react';
import '../CSS/ContactUs.css';
import '../CSS/Login.css';
import Buttons from '../Components/Buttons';
import Navigation from '../Navigation';
import TextInputs from '../Components/TextInput';

const error = {
  color: 'red',
  fontSize: '10px',
  letterSpacing: '1px',
}

const textareas = {
  height: '200px',
  width: '350px',
  padding: '10px',
  letterSpacing: '1px',
}


export default class componentName extends Component {

  constructor(){
    super()
      this.state = {
        c_name: '',
        c_nameErr: false,
        c_nameErr_Text: '',

        c_email: '',
        c_emailErr: false,
        c_emailErr_Text: '',

        c_message: '',
        c_messageErr: false,
        c_messageErr_Text: ''
    }
  }

  send = (e) => {
    e.preventDefault();

    let validate = false;

    if (this.state.c_name === '') {
      validate = true;
      this.setState(
        {
          c_nameErr: true,
          c_nameErr_Text: 'Enter Your Name'
        }
      )
    }
    else if (!/^[A-Za-z]{3,30}$/.test(this.state.c_name)) {
      validate = true;
      this.setState(
        {
          c_nameErr: true,
          c_nameErr_Text: 'Name must be contain Capital and Smaller Letter'
        }
      )
    }
    else {
      this.setState(
        {
          c_nameErr: false,
          c_nameErr_Text: ''
        }
      )
    }

    if (this.state.c_email === '') {
      validate = true;
      this.setState(
        {
          c_emailErr: true,
          c_emailErr_Text: 'Enter Your E-Mail'
        }
      )
    }
    else if (!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.c_email))) {
      validate = true;
      this.setState(
        {
          c_emailErr: true,
          c_emailErr_Text: 'Enter Valid E-Mail'
        }
      )
    }
    else {
      this.setState(
        {
          c_emailErr: false,
          c_emailErr_Text: ''
        }
      )
    }

    
    if (this.state.c_message === '') {
      validate = true;
      this.setState(
        {
          c_messageErr: true,
          c_messageErr_Text: 'Please Type a Message'
        }
      )
    }
    else if (!/^[A-Za-z]{10,200}$/.test(this.state.c_message)) {
      validate = true;
      this.setState(
        {
          c_messageErr: true,
          c_messageErr_Text: 'write atleast 20 words'
        }
      )
    }
    else {
      this.setState(
        {
          c_messageErr: false,
          c_messageErr_Text: ''
        }
      )
    }

    if(validate === false)
    {     
        fetch('http://localhost/ContactUs/contactus.php', {
          method: 'POST',
          headers:{
            'Accept': 'Application/json'
          },
          body: JSON.stringify({
              c_name: this.state.c_name,
              c_email: this.state.c_email,
              c_message: this.state.c_message
          })
        })
        .then(response => response.json())
        .then(responseJson => {
          alert(`Mr. ${responseJson} your message has been received :) `)
        })
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
      <>
      <Navigation/>
      <div className="CUmainDiv">
        <form>
            <div className="CUinputDiv">

                    <TextInputs type="text"
                                value={this.state.c_name}
                                name="c_name"
                                onChange={this.change}
                                placeholder="Username"/> 
                                <p style={error}>{this.state.c_nameErr_Text}</p>

                    <TextInputs type="text"
                                value={this.state.c_email}
                                name="c_email"
                                onChange={this.change}
                                placeholder="E-mail"/> 
                                <p style={error}>{this.state.c_emailErr_Text}</p>

                    <textarea  type="text"
                                value={this.state.c_message}
                                name="c_message"
                                onChange={this.change}
                                style={textareas}
                                placeholder="Type a message..."/> 
                                <p style={error}>{this.state.c_messageErr_Text}</p>

                    <Buttons title="send" onClick={this.send}/>
                  <br/> 
                </div>
          </form>
        <div className="mapMainDiv">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1062.0094565503202!2d70.45526206411317!3d21.535812069718318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39580368e103d179%3A0x87b48d4037b1e153!2sGanesh%20Garment!5e0!3m2!1sen!2sin!4v1588939021328!5m2!1sen!2sin" className="a"></iframe> */}
        </div>
      </div>
      </>
    );
  }
}
