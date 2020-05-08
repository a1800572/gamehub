import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ListIcon from '@material-ui/icons/List';
import CasinoIcon from '@material-ui/icons/Casino';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


import List from '../components/List';
import Form from '../components/Form';
import Dice from '../components/Dice';
import Slots from '../components/Slots';

function Tabss (props) {
  const[value, setValue] = useState(0);

  const handleChange = (event, val) => {
  setValue(val);
  }

  return (
  <div>
    <AppBar position='static'>
      <Tabs value={ value} onChange={ handleChange} >
        <Tab label='Transaction' icon={<ListIcon />} />
        <Tab label='Transfer money' icon={<AttachMoneyIcon />}  />
        <Tab label='Dice' icon={<CasinoIcon />}  />
        <Tab label='Slot machine' icon={<CasinoIcon />} />
      </Tabs>
    </AppBar>
    { value === 0 && <List transfers = {props.transfers} /> }
    { value === 1 && <Form/> }
    { value === 2 && <Dice/> }
    { value === 3 && <Slots/> }
  </div>
  );
}

export default Tabss;
