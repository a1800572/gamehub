import React from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import Dice from './components/Dice';
import Slots from './components/Slots';


//import Tabss from './navigation/Tabss';
import Menus from './navigation/Menus';


import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';
import lightBlue from '@material-ui/core/colors/lightBlue';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

const theme = createMuiTheme({
   palette: { primary: {main: grey[900], contrastText: '#FFFFFF'},
              secondary: {main: amber[300], contrastText: lightBlue[50]},
              text: {primary: grey[900], secondary: lightBlue[50 ] }, 
     background: {default: '#FFFFFF'}
    },
   typography: {fontFamily: ['Chilanka', 'Sans Serif']},
});

const credittransfers = [
    { id:   1,
      username: "gambler1",
      money: "500",
      credit: "5000",
    },
    { id:   2,
      username: "gambler2",
      money: "10",
      credit: "100",
    },
    { id:   3,
      username: "gambler3",
      money: "5000",
      credit: "50000",
    },
    { id:   4,
      username: "gambler4",
      money: "5",
      credit: "50",
    },
    { id:   5,
      username: "gambler5",
      money: "160",
      credit: "1600",
    },
];

//object list
//<List transfers = {credittransfers} />
//<Tabss transfers = {credittransfers}/>
function App() {
  return (
      <BrowserRouter>
    <MuiThemeProvider theme={ theme }>
    <div>
      <CssBaseline />
      <Menus />
          <Switch>
            <Route path='/lomake/' component={ Form } />
            <Route path='/list/' render={ (props) => <List {...props} transfers={ credittransfers }/> } />
            <Route path='/dice/' component={ Dice } />
            <Route path='/slots/' component={ Slots } />
          </Switch>
    </div>
    </MuiThemeProvider>
      </BrowserRouter>
  );
}

export default App;
