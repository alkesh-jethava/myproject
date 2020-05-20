import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div style={{marginTop: '15px'}}>
      <div aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{cursor:"pointer"}}>
         <h4><FiUser style={{color: '#fff'}}/></h4>
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link className="link" to="/EditProfile"><MenuItem>Edit Profile</MenuItem></Link>
        <Link className="link" to="/ChangePassword"><MenuItem>Change Password</MenuItem></Link>
        <Link className="link" to="/" ><MenuItem onClick={() => localStorage.removeItem('actType')}>Logout</MenuItem></Link>
      </Menu>
    </div>
  );
}