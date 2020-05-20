import React from 'react';
import '../CSS/TextInput.css';

class TextInput extends React.Component{
    render(){
        return(
            <div className="boxinput">   
                <input  
                       value={this.props.value}
                       name={this.props.name}
                       maxLength={this.props.maxLength}
                       onChange={this.props.onChange}
                       required
                       className="form-control"
                    //    autoComplete="off"
                       style={this.props.style}
                       placeholder={this.props.placeholder}
                    />
            </div>
        )
    }
}

export default TextInput;