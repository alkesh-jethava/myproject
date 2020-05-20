// import React from 'react';
// import TextInput from '../Components/TextInput';

// export default class EditProfile extends React.Component {

//   constructor(props){
//     super(props);
//     this.state={
//       user_name: '',
//     }
//   }

//   render() {
//     return (
//       <>
//         <TextInputs type="text"
//                     value={this.state.user_name}
//                     name="user_name"
//                     onChange={this.change}
//                     placeholder="Change Username"/>
//                   <p style={error}>{this.state.user_nameErr_Text}</p>

//         <TextInputs type="text"
//                     value={this.state.email}
//                     name="email"
//                     onChange={this.change}
//                     placeholder="Email"
//                   />
//                   <p style={error}>{this.state.emailErr_Text}</p>

//         <TextInputs type="text"
//                     value={this.state.mobile}
//                     name="mobile"
//                     onChange={this.change}
//                     placeholder="Mobile" />
//                   <p style={error}>{this.state.mobileErr_Text}</p>

//         <TextInputs type="text"
//                     value={this.state.password}
//                     name="password"
//                     onChange={this.change}
//                     placeholder="Password" />
//                   <p style={error}>{this.state.passwordErr_Text}</p>

//         <TextInputs type="text"
//                     value={this.state.cpassword}
//                     name="cpassword"
//                     onChange={this.change}
//                     placeholder="Confirm Password" />
//                   <p style={error}>{this.state.cpasswordErr_Text}</p>

//         <Buttons title="sign up" style={{ marginTop: '0px' }}
//                   onClick={this.login} />
//       </>
//     )
//   }
// }

import React, { Component } from 'react';

export default class EditProfile extends Component {
  render() {
    return (
      <div> Edit Profile </div>
    );
  }
}
