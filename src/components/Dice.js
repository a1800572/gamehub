import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles=  makeStyles(
    {
        button: {
        backgroundColor: 'red',
        color: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#FFE166'},
        
        container: {
        backgroundImage: 'url(/casino1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width:'100%'},
        
        dcontainer: {
        backgroundColor: '#ff5722',
        padding: 45,
        width: 400,
        marginLeft: 50,
        top: 200,
        left: 400,
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black'},
        
        dice: {
        margin:10,
        width: 125,
        height: 125
        },
        
        input: {
        margin:10,
        backgroundColor: 'white',
        borderRadius:5,
        borderStyle: 'solid',
        borderWidth: 1,
        }
    }
    )

function Dice() {
  const classes = useStyles();
    
    
  const [bet, setBet] = useState('');
  const [message, setMessage] = useState('');
    
    
  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`../assets/diceassets/${firstDieResult}.png`);
  const secondDieImage = require(`../assets/diceassets/${secondDieResult}.png`);
    
  const handleSubmit = (e) => {
      e.preventDefault();
  }

  function rollDice() {
    setFirstDieResult(Math.floor(Math.random() * 6) + 1);
    setSecondDieResult(Math.floor(Math.random() * 6) + 1);
      
    if (firstDieResult+secondDieResult == bet){
    setMessage('You win');
      }
      else {
    setMessage('You lose');
      }
  }

  return (
      <div className={ classes.container}>
        <Card className={ classes.dcontainer}>
        <CardMedia>
        <img src={firstDieImage} className={ classes.dice} alt="Die one" />
        <img src={secondDieImage} className={ classes.dice} alt="Die two" />
        </CardMedia>
        {'Dice Total:'}
        {firstDieResult + secondDieResult}
        <br />
        <form onSubmit={handleSubmit}>
        <label>Users dice goal:{bet}
        <br/>
        <Input type="text" value={bet} onChange={e => setBet(e.target.value)} className={ classes.input}/>
        </label>
        <Button type="submit" onClick={rollDice} className={ classes.button}>Roll Dices</Button>
        </form>
        {message}
      
      </Card>
        </div>
    
  );
}

export default Dice;