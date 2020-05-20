import React from 'react';
import MaterialTable from 'material-table';
import Navigation from '../Navigation';
import {} from 'react-icons/md';

export default class MaterialTableDemo extends React.Component {

  constructor(props){
    super(props);
    this.state={
     columns: [
      { title: 'ID', field: 'id'},
      { title: 'Name', field: 'user_name' },
      { title: 'Email', field: 'email' },
      { title: 'Mobile', field: 'mobile', },
    ],
    data: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost/ganeshgarment/Customer.php')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        data: responseJson
      })
    })
  }

render(){
  return (  
    <>
    <Navigation/>
    <div style={{display: 'flex', justifyContent: 'center', margin: '80px 0px'}}>
    <MaterialTable style={{height: 'auto', width: '70%', padding: '40px'}} title="CUSTOMERS" columns={this.state.columns} data={this.state.data}/>
    </div>
    </>
  );
    }
}


