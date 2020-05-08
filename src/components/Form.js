import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const useStyles=  makeStyles(
    {
       container:{
        backgroundImage: 'url(/casino1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width:'100%',
        },
    formcontainer:{
        height: 300,
        width: 400,
        backgroundColor: '#ff5722',
        borderRadius: '7.5px',
        padding: 45,
        top: 200,
        left: 400,
        position: 'absolute',
        marginLeft: 50,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black'
        },
        button: {
        backgroundColor: '#212121',
        color: 'yellow',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        margin: 5
        },
        input: {
        margin:10,
        backgroundColor: 'white',
        borderRadius:2,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black'
        }
    }
    )

function Form () {
  const classes = useStyles();
  const [user, setValues] = useState({
      username: '',
      money: '',
      credit: '',
  });

  const [error, setError] = useState('');

  const muuta = (e) => {
     setValues({
       ...user,
       [e.target.name]: e.target.value
     });
     setError('');
   };

  const lisaaHenkilo = (e) => {
    e.preventDefault();

    setValues({
      username: '',
      money: '',
      credit: user.money*10,
    });
      if (user.money.length === 0){
    setError('Valuutta ei voi olla tyhjä');
      }
      else {
    setError('Lompakkoon lisättiin');
      }
  }

  return (
    <div className={ classes.container}>
      <div className={ classes.formcontainer}>
    <form>
        <label htmlFor='username'>Username </label>
        <Input type='text' name='username' value={ user.username} onChange={ (e) => muuta(e) } className={ classes.input}/><br />
      
        <label htmlFor='money'>Money </label>
        <Input type='number' name='money' value={ user.money } onChange={ (e) => muuta(e) } className={ classes.input} /><br />
            
        <Button onClick={ (e) => lisaaHenkilo(e) } className={ classes.button} >Lisää</Button>
    </form>
    <p>{error+' '+user.credit}</p>
    </div>
    </div>
  );
}

export default Form;
