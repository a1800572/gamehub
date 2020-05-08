import React, {useState} from'react';

import IconButton from'@material-ui/core/IconButton';
import Menu from'@material-ui/core/Menu';
import MenuItem from'@material-ui/core/MenuItem';

import MenuIcon from '@material-ui/icons/Menu';
import ListIcon from '@material-ui/icons/List';
import CasinoIcon from '@material-ui/icons/Casino';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListItemIcon from'@material-ui/core/ListItemIcon';
import ListItemText from'@material-ui/core/ListItemText';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import { Link } from 'react-router-dom';

function Menus() {
    const[anchorMenu, setMenuOpen] = useState(null);
    const handleMenu= ( event) => { setMenuOpen(event.currentTarget); }
    const handleClose= () => { setMenuOpen(null);}
    
    
    const menu =
      <Menu
      anchorEl={anchorMenu}
      open={Boolean(anchorMenu)}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
        
       <MenuItem onClick={handleClose} component={ Link } to='/list'>
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary="Records" />
      </MenuItem>

      <MenuItem onClick={handleClose} component={ Link } to='/lomake'>
          <ListItemIcon><AttachMoneyIcon /></ListItemIcon>
          <ListItemText primary="Transfer money" />
      </MenuItem>

      <MenuItem onClick={handleClose} component={ Link } to='/dice'>
          <ListItemIcon><CasinoIcon /></ListItemIcon>
          <ListItemText primary="Dice Game" />
      </MenuItem>

      <MenuItem onClick={handleClose} component={ Link } to='/slots'>
          <ListItemIcon><CasinoIcon /></ListItemIcon>
          <ListItemText primary="Slot machine" />
      </MenuItem>

      
    </Menu>;
    
    return(
        <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={ handleMenu } color='inherit' ><MenuIcon /></IconButton>
            { menu }
          </Toolbar>
        </AppBar>
      </div>
    )
}
export default Menus;