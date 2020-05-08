import React, { useState, useEffect } from 'react';
import { makeStyles} from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles=  makeStyles(
    {
        button: {
        backgroundColor: 'red',
        color: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#FFE166',
        borderRadius: 90,
        width: 100,
        left: 280,
        top: 540,
        position: 'absolute'
        },
        
        cbutton: {
        backgroundColor: 'red',
        color: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#FFE166',
        width: 100,
        right: 15,
        top: 540,
        position: 'absolute'
        },
        
        bbutton: {
        backgroundColor: 'red',
        color: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#FFE166',
        width: 100,
        left: 95,
        top: 540,
        position: 'absolute'
        },
        
        plusbutton: {
        backgroundColor: 'red',
        color: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#FFE166',
        left: 200,
        top: 540,
        position: 'absolute'
        },
        
        minusbutton: {
        backgroundColor: 'red',
        color: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#FFE166',
        left: 25,
        top: 540,
        position: 'absolute'
        },
        
        container: {
        backgroundImage: 'url(/casino1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width:'100%'},
        
        dcontainer: {
        backgroundImage: 'url(/desert.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: 15,
        width: 650,
        height: 590,
        marginLeft: 50,
        top: 100,
        left: 325,
        position: 'absolute',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black'
        },
        
        dice: {
        width: 82,
        height: 82, 
        },
        
        
        rules: {
        backgroundColor: 'lightgray',
        },
        
        column1: {
        width: 90,
        position: 'absolute',
        top: 10,
        left: 15,
        backgroundColor: 'white',
        borderRadius: 5,
        borderStyle: 'groove',
        borderWidth: 4,
        borderColor: 'gold'
        },
        
        column2: {
        width: 90,
        position: 'absolute',
        top: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        left: 110,
        borderStyle: 'groove',
        borderWidth: 4,
        borderColor: 'gold'
        },
        
        column3: {
        width: 90,
        position: 'absolute',
        top: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        left: 205,
        borderStyle: 'groove',
        borderWidth: 4,
        borderColor: 'gold'
        },
        
        column4: {
        width: 90,
        position: 'absolute',
        top: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        left: 300,
        borderStyle: 'groove',
        borderWidth: 4,
        borderColor: 'gold'
        },
        
        column5: {
        width: 90,
        position: 'absolute',
        top: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        left: 395,
        borderStyle: 'groove',
        borderWidth: 4,
        borderColor: 'gold'
        },
        
        reelcontainer: {
        backgroundImage: 'url(/sand.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 300,
        top: 230,
        position: 'absolute',
        width: 500,
        borderRadius: 5,
        left: 75,
        borderStyle: 'groove',
        borderWidth: 4,
        borderColor: 'gold',
        },
        
        messagecontainer: {
        backgroundColor: '#F2D16B',
        position: 'absolute',
        margin: 3,
        height: 15,
        width: 200,
        left: 220,
        color: 'Black',
        justifyContent:'center',
        alignItems:'center',
        display: 'flex',
        borderStyle: 'groove',
        borderWidth: 4,
        borderColor: 'gold',
        borderRadius: 15
        },
        
        linescontainer: {
        backgroundColor: 'blue',
        top: 345,
        left: 25,
        width: 600,
        height: 75,
        position: 'absolute',
        borderRadius:10,
        borderStyle: 'groove',
        borderColor: 'gold',
        alignItems:'center',
        display: 'flex'
        },
        
        ltext: {
            color: 'gold',
            fontSize: 30,
            fontWeight: 'bold'
        }
    }
    )

function Slots() {
  const classes = useStyles();
    
  //audio muista lehentää reelstop 
  const reelstop = new Audio('/audio/reelstop.wav');
  const win = new Audio('/audio/win.wav');
    
  const [message, setMessage] = useState('');
  const [wallet, setWallet] = useState(10000);
  const [bet, setBet] = useState(100);
    
    //middle line
  const [firstWheelResult, setFirstWheelResult] = useState(22);
  const [secondWheelResult, setSecondWheelResult] = useState(3);
  const [thirdWheelResult, setThirdWheelResult] = useState(4);
  const [fourthWheelResult, setFourthWheelResult] = useState(20);
  const [fifthWheelResult, setFifthWheelResult] = useState(21);
    
  const firstTopLineImage = require(`../assets/betterslotassets/${firstWheelResult-1}.png`);
  const secondTopLineImage = require(`../assets/betterslotassets/${secondWheelResult-1}.png`);
  const thirdTopLineImage = require(`../assets/betterslotassets/${thirdWheelResult-1}.png`);
  const fourthTopLineImage = require(`../assets/betterslotassets/${fourthWheelResult-1}.png`);
  const fifthTopLineImage = require(`../assets/betterslotassets/${fifthWheelResult-1}.png`);
    
  const firstwinLineImage = require(`../assets/betterslotassets/${firstWheelResult}.png`);
  const secondwinLineImage = require(`../assets/betterslotassets/${secondWheelResult}.png`);
  const thirdwinLineImage = require(`../assets/betterslotassets/${thirdWheelResult}.png`);
  const fourthwinLineImage = require(`../assets/betterslotassets/${fourthWheelResult}.png`);
  const fifthwinLineImage = require(`../assets/betterslotassets/${fifthWheelResult}.png`);
    
  const firstBottomLineImage = require(`../assets/betterslotassets/${firstWheelResult+1}.png`);
  const secondBottomLineImage = require(`../assets/betterslotassets/${secondWheelResult+1}.png`);
  const thirdBottomLineImage = require(`../assets/betterslotassets/${thirdWheelResult+1}.png`);
  const fourthBottomLineImage = require(`../assets/betterslotassets/${fourthWheelResult+1}.png`);
  const fifthBottomLineImage = require(`../assets/betterslotassets/${fifthWheelResult+1}.png`);
    
  function risebet(){
      setBet(bet+100);
  }

  function lowerbet(){
      setBet(bet-100);
  }

  function spin() {
    setWallet(wallet-bet);
    
    //hidastettu generointi rullat generoidaan 0.1 sekunnin välein
    //timeout functiossa bugi monistaa rullan lukuja //korjaa --kesken
    //setTimeout(function(){
    setFirstWheelResult(Math.floor(Math.random() * 30) + 1);
    //reelstop.play();
    //}, 100);
    //setTimeout(function(){
    setSecondWheelResult(Math.floor(Math.random() * 30) + 1);
    //reelstop.play();
    //}, 200);
    //setTimeout(function(){
    setThirdWheelResult(Math.floor(Math.random() * 30) + 1);
    //reelstop.play();
    //}, 300);
    //setTimeout(function(){
    setFourthWheelResult(Math.floor(Math.random() * 30) + 1);
    //reelstop.play();
    //}, 400);
    //setTimeout(function(){
    setFifthWheelResult(Math.floor(Math.random() * 30) + 1);
    reelstop.play();
    //}, 500);
  }
    
        useEffect(() => {
            console.log(firstWheelResult);
      // geneerinen lista [,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,]
      //keskimmäisellä linjalla vain jokereita
    if (firstWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 middle line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            
        //ylärivillä pelkästään jokereita
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 top line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            
        //alarivillä jokereita
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 bottom line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            
    //   -1 -1 -1
    //line \/\/
    //     1  1
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 zigzag line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            
    //         -1        
    //        /  \
    //       1    1
    //line  /      \
    //    +1        +1
    //jokers
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 pyramid line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
    
    //line jokers
    // -1
    //   \
    //    1-1-1
    //         \
    //          +1
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 top to bottom line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            
            //-1        -1      -1
            //  \      /  \     /
            //   \    /    \   /
            //    \  /      \ /
            //     +1       +1
            //jokers
else if (firstWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 large zigzag line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
        
            //         -1
            //        /
            //   1-1-1
            //  /
            //+1
            //jokers
else if (firstWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 bottom to top line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            
            //jokers
            //       -1
            //      /  \
            //     /    \
            //+1--+1    +1--+1
else if (firstWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 sharp pyramid line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            //     -1
            //     / \
            //1   /   \   1
            // \ /     \ /
            // +1      +1
            //jokers
    else if (firstWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 middle to bottom to top line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
      }
            //-1            -1
            // \            /
            //  \          /
            //   +1--+1--+1
            //jokers
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 U shape line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
    }
            // -1  -1
            //   \ /  \
            //    1    1
            //          \
            //jokers    +1
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 top to middle to bottom line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
    }
            //    -1      -1
            //    / \     / \
            //   /   \   /   \
            //  /     \ /     \
            // +1     +1      +1
            //jokers
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 M shape line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
    }
            //jokers
            //    1--1--1
            //   /       \
            // +1        +1
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 A shape line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
    }
            
            // -1
            //  \
            //   \   1   1
            //    \ / \ /
            //    +1  +1
            //jokers
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        secondWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        thirdWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fourthWheelResult+1 in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,]) &&
        fifthWheelResult in ([,,,,,5,,,,,,,,,,,,,,,,,,,24,,,,,,,])){
    setMessage('5x Jokers Won 5000 top to bottom to middle line');
    setWallet(wallet+5000);
    win.play();
    setTimeout(function(){
    setMessage('');
    }, 3000);
    }
            
      //keskimmäisellä linjalla vain ruukkuja
    else if (firstWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 middle line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
            }
            
       //ylärivillä voin ruukkuja
    else if (firstWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 top line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
            }
            
        //alarivillä vain ruukkuja
    else if (firstWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 bottom line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
            }
            
        //   -1 -1 -1
        //line \/\/
        //     1  1
        //ruukkuja
    else if (firstWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 zigzag line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
            }
        
        //         -1        
        //        /  \
        //       1    1
        //line  /      \
        //    +1        +1
        //ruukkuja
      else if (firstWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 pyramid line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
            }
            
        //line jars
        // -1
        //   \
        //    1-1-1
        //         \
        //          +1
    else if (firstWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 top to bottom line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
            }
            
            //-1        -1      -1
            //  \      /  \     /
            //   \    /    \   /
            //    \  /      \ /
            //     +1       +1
            //ruukkuja
    else if (firstWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 large zigzag line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
            //         -1
            //        /
            //   1-1-1
            //  /
            //+1
            //jars
    else if (firstWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 bottom to top line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
            //jars
            //       -1
            //      /  \
            //     /    \
            //+1--+1    +1--+1
    else if (firstWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 sharp pyramid line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
            //     -1
            //     / \
            //1   /   \   1
            // \ /     \ /
            // +1      +1
            //jars
    else if (firstWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 middle to bottom to top line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
            //-1            -1
            // \            /
            //  \          /
            //   +1--+1--+1
            //jars
    else if (firstWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 U shape line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
            // -1  -1
            //   \ /  \
            //    1    1
            //          \
            //jars      +1
    else if (firstWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 top to middle to bottom line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            //    -1      -1
            //    / \     / \
            //   /   \   /   \
            //  /     \ /     \
            // +1     +1      +1
            //jars
    else if (firstWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 M shape line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
            //jars
            //    1--1--1
            //   /       \
            // +1        +1
    else if (firstWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 A shape line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
            // -1
            //  \
            //   \   1   1
            //    \ / \ /
            //    +1  +1
            //jars
    else if (firstWheelResult-1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             secondWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             thirdWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fourthWheelResult+1 in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,]) &&
             fifthWheelResult in ([,,,3,,5,,7,,9,10,,,,14,,,17,,,,,,,24,,,,,29,,])){
        setMessage(' 5x jars Won 100 top to bottom to middle line');
        setWallet(wallet+100);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
            
      //keskimmäisellä linjalla vain kissoja
    else if (firstWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 middle line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //ylärivillä vain kissoja
    else if (firstWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 top line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //alarivillä vain kissoja
    else if (firstWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 bottom line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
    //   -1 -1 -1
    //line \/\/
    //     1  1
    //kissoja
    else if (firstWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 zigzag line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //         -1        
        //        /  \
        //       1    1
        //line  /      \
        //    +1        +1
        //kissoja
        else if (firstWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             secondWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31])){
        setMessage('5x Cat Won 300 pyramid line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //line cats
            // -1
            //   \
            //    1-1-1
            //         \
            //          +1
        else if (firstWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31])){
        setMessage('5x Cat Won 300 top to bottom line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1        -1      -1
            //  \      /  \     /
            //   \    /    \   /
            //    \  /      \ /
            //     +1       +1
            //kissoja
    else if (firstWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             thirdWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             fifthWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 large zigzag line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //         -1
            //        /
            //   1-1-1
            //  /
            //+1
            //kissoja
    else if (firstWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             secondWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 bottom to top line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //cats
            //       -1
            //      /  \
            //     /    \
            //+1--+1    +1--+1
    else if (firstWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             secondWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             thirdWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             fifthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31])){
        setMessage('5x Cat Won 300 sharp pyramid line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //     -1
            //     / \
            //1   /   \   1
            // \ /     \ /
            // +1      +1
            //kissoja
    else if (firstWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             thirdWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             fifthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 middle to bottom to top line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1            -1
            // \            /
            //  \          /
            //   +1--+1--+1
            //kissoja
    else if (firstWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             thirdWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             fifthWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 U shape line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1  -1
            //   \ /  \
            //    1    1
            //          \
            //kissoja   +1
    else if (firstWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31])){
        setMessage('5x Cat Won 300 top to middle to bottom line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //    -1      -1
            //    / \     / \
            //   /   \   /   \
            //  /     \ /     \
            // +1     +1      +1
            //kissoja
    else if (firstWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             secondWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             fourthWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31])){
        setMessage('5x Cat Won 300 M shape line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //kissoja
            //    1--1--1
            //   /       \
            // +1        +1
    else if (firstWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             secondWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             thirdWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fifthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31])){
        setMessage('5x Cat Won 300 A shape line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1
            //  \
            //   \   1   1
            //    \ / \ /
            //    +1  +1
            //kissoja
    else if (firstWheelResult-1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             secondWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             thirdWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,]) &&
             fourthWheelResult+1 in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,31]) &&
             fifthWheelResult in ([,,2,,,5,,,,,,,,13,,,16,,18,,,,,,24,25,,27,,,,])){
        setMessage('5x Cat Won 300 top to bottom to middle line');
        setWallet(wallet+300);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
      
    //keskimmäisellä linjalla vain koruja
    else if (firstWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 middle line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
    //ylärivillä vain koruja
    else if (firstWheelResult-1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult-1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult-1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult-1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult-1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 top line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            //alarivillä vain koruja
        else if (firstWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 bottom line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
           //   -1 -1 -1
           //line \/\/
           //     1  1
           //koruja
        else if (firstWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 zigzag line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //         -1        
        //        /  \
        //       1    1
        //line  /      \
        //    +1        +1
        //koruja
    else if (firstWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 pyramid line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //line koruja
            // -1
            //   \
            //    1-1-1
            //         \
            //          +1
    else if (firstWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 top to bottom line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1        -1      -1
            //  \      /  \     /
            //   \    /    \   /
            //    \  /      \ /
            //     +1       +1
            //koruja
    else if (firstWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 large zigzag line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //         -1
            //        /
            //   1-1-1
            //  /
            //+1
            //koruja
    else if (firstWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 bottom to top line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //koruja
            //       -1
            //      /  \
            //     /    \
            //+1--+1    +1--+1
        else if (firstWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 sharp pyramid line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //     -1
            //     / \
            //1   /   \   1
            // \ /     \ /
            // +1      +1
            //koruja
    else if (firstWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 middle to bottom to top line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1            -1
            // \            /
            //  \          /
            //   +1--+1--+1
            //koruja
     else if (firstWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 U shape line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1  -1
            //   \ /  \
            //    1    1
            //          \
            //koruja    +1
    else if (firstWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 top to middle to bottom line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //    -1      -1
            //    / \     / \
            //   /   \   /   \
            //  /     \ /     \
            // +1     +1      +1
            //koruja
    else if (firstWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 M shape line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //koruja
            //    1--1--1
            //   /       \
            // +1        +1
    else if (firstWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 A shape line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1
            //  \
            //   \   1   1
            //    \ / \ /
            //    +1  +1
            //koruja
    else if (firstWheelResult-1 in ([0,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             secondWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             thirdWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fourthWheelResult+1 in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,]) &&
             fifthWheelResult in ([,,,,,5,6,,8,,,,,,,,,,,19,,,22,,24,,26,,,,,])){
        setMessage('5x jewelry Won 1000 top to bottom to middle line');
        setWallet(wallet+1000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
      
    //keskimmäisellä linjalla vain lintuja
    else if (firstWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 middle line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
    }
        
    //ylärivillä vain lintuja
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 top line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
    
        //alarivillä vain lintuja
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 bottom line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //   -1 -1 -1
        //line \/\/
        //     1  1
        //lintuja
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 zigzag line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //         -1        
        //        /  \
        //       1    1
        //line  /      \
        //    +1        +1
        //lintuja
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 pyramid line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //line lintuja
            // -1
            //   \
            //    1-1-1
            //         \
            //          +1
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 top to bottom line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1        -1      -1
            //  \      /  \     /
            //   \    /    \   /
            //    \  /      \ /
            //     +1       +1
            //lintuja
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 large zigzag line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //         -1
            //        /
            //   1-1-1
            //  /
            //+1
            //lintuja
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 bottom to top line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //lintuja
            //       -1
            //      /  \
            //     /    \
            //+1--+1    +1--+1
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 sharp pyramid line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //     -1
            //     / \
            //1   /   \   1
            // \ /     \ /
            // +1      +1
            //lintuja
    else if (firstWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 middle to bottom to top line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1            -1
            // \            /
            //  \          /
            //   +1--+1--+1
            //lintuja
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 U shape line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1  -1
            //   \ /  \
            //    1    1
            //          \
            //lintuja    +1
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 top to middle to bottom line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //    -1      -1
            //    / \     / \
            //   /   \   /   \
            //  /     \ /     \
            // +1     +1      +1
            //lintuja
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 M shape line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //lintuja
            //    1--1--1
            //   /       \
            // +1        +1
    else if (firstWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 A shape line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1
            //  \
            //   \   1   1
            //    \ / \ /
            //    +1  +1
            //lintuja
    else if (firstWheelResult-1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             secondWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             thirdWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fourthWheelResult+1 in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,]) &&
             fifthWheelResult in ([,,,,,5,,,,,,11,12,,,,,,,,,,,,24,,,,28,,30,])){
        setMessage('5x birds Won 600 top to bottom to middle line');
        setWallet(wallet+600);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
    //ei ylärivillä eikä alarivillä
    //keskimmäisellä linjalla vain jackpotteja ei jokereita
    else if (firstWheelResult == 23 &&
             secondWheelResult == 23 &&
             thirdWheelResult == 23 &&
             fourthWheelResult == 23 &&
             fifthWheelResult == 23){
        setMessage('Jackpot 25000 middle line');
        setWallet(wallet+25000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
         
      
    //keskimmäisellä linjalla vain anubis
    else if (firstWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 middle line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
    //ylärivillä vain anubis
    else if (firstWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 top line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
    //alarivillä vain anubis
    else if (firstWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 bottom line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //   -1 -1 -1
        //line \/\/
        //     1  1
        //anubis
    else if (firstWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 zigzag line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //         -1        
        //        /  \
        //       1    1
        //line  /      \
        //    +1        +1
        //anubis
    else if (firstWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 pyramid line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //line anubis
            // -1
            //   \
            //    1-1-1
            //         \
            //          +1
    else if (firstWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 top to bottom line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1        -1      -1
            //  \      /  \     /
            //   \    /    \   /
            //    \  /      \ /
            //     +1       +1
            //anubis
    else if (firstWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 large zigzag line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //         -1
            //        /
            //   1-1-1
            //  /
            //+1
            //anubis
    else if (firstWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 bottom to top line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //anubis
            //       -1
            //      /  \
            //     /    \
            //+1--+1    +1--+1
    else if (firstWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 sharp pyramid line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //     -1
            //     / \
            //1   /   \   1
            // \ /     \ /
            // +1      +1
            //anubis
    else if (firstWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 middle to bottom to top line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1            -1
            // \            /
            //  \          /
            //   +1--+1--+1
            //anubis
    else if (firstWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 U shape line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1  -1
            //   \ /  \
            //    1    1
            //          \
            //anubis    +1
    else if (firstWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 top to middle to bottom line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //    -1      -1
            //    / \     / \
            //   /   \   /   \
            //  /     \ /     \
            // +1     +1      +1
            //anubis
    else if (firstWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 M shape line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //anubis
            //    1--1--1
            //   /       \
            // +1        +1
    else if (firstWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 A shape line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1
            //  \
            //   \   1   1
            //    \ / \ /
            //    +1  +1
            //anubis
    else if (firstWheelResult-1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             thirdWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,]) &&
             fifthWheelResult in ([,1,,,,5,,,,,,,,,,15,,,,,20,,,,24,,,,,,,])){
        setMessage('5x anubis Won 800 top to bottom to middle line');
        setWallet(wallet+800);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
    
    //keskimmäisellä linjalla vain cleopatroja
    else if (firstWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 middle line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
    //ylärivillä vain cleopatroja
    else if (firstWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 top line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
    //alarivillä vain cleopatroja
    else if (firstWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 bottom line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //   -1 -1 -1
        //line \/\/
        //     1  1
        //cleopatroja
    else if (firstWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 zigzag line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
        //         -1        
        //        /  \
        //       1    1
        //line  /      \
        //    +1        +1
        //cleopatra
    else if (firstWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 pyramid line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //line cleopatra
            // -1
            //   \
            //    1-1-1
            //         \
            //          +1
    else if (firstWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 top to bottom line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1        -1      -1
            //  \      /  \     /
            //   \    /    \   /
            //    \  /      \ /
            //     +1       +1
            //cleopatra
    else if (firstWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 large zigzag line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //         -1
            //        /
            //   1-1-1
            //  /
            //+1
            //cleopatra
    else if (firstWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 bottom to top line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //cleopatra
            //       -1
            //      /  \
            //     /    \
            //+1--+1    +1--+1
    else if (firstWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 sharp pyramid line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //     -1
            //     / \
            //1   /   \   1
            // \ /     \ /
            // +1      +1
            //cleopatra
    else if (firstWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 middle to bottom to top line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //-1            -1
            // \            /
            //  \          /
            //   +1--+1--+1
            //cleopatra
    else if (firstWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 U shape line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1  -1
            //   \ /  \
            //    1    1
            //          \
            //cleopatra +1
    else if (firstWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 top to middle to bottom line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //    -1      -1
            //    / \     / \
            //   /   \   /   \
            //  /     \ /     \
            // +1     +1      +1
            //cleopatra
    else if (firstWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 M shape line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            //cleopatra
            //    1--1--1
            //   /       \
            // +1        +1
    else if (firstWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 A shape line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            // -1
            //  \
            //   \   1   1
            //    \ / \ /
            //    +1  +1
            //cleopatra
    else if (firstWheelResult-1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             secondWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             thirdWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fourthWheelResult+1 in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,]) &&
             fifthWheelResult in ([,,,,4,5,,,,,,,,,,,,,,,,21,,,24,,,,,,,])){
        setMessage('5x Cleopatra Won 4000 top to bottom to middle line');
        setWallet(wallet+4000);
        win.play();
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            
            
    else {
    setMessage('Better luck next time');
        setTimeout(function(){
        setMessage('');
        }, 3000);
      }
            // wallettia ja messagea ei voida lisätä listaan koska niiden kuuntelu + settimeout functio aiheutaa ikuisen loopin
            // eslint-disable-next-line
            }, [firstWheelResult,secondWheelResult,thirdWheelResult,fourthWheelResult,fifthWheelResult]);

  return (
      <div className={ classes.container}>
        <Card className={ classes.dcontainer}>
        <CardContent className={ classes.rules}>
        {'5xJars 100'}
        <br/>
        {'5xCats 300'}
        <br/>
        {'5xPharao 5000'}
        <br/>
        {'5xjewelry 1000'}
        <br/>
        {'5xJackpot 25000'}
        <br/>
        {'5xAnubis 800'}
        <br/>
        {'5xCleopatra 4000'}
        </CardContent>
      
        <CardContent className={ classes.messagecontainer}>
        {message}
        </CardContent>
        
        <CardContent className={ classes.linescontainer}>
        <p className={ classes.ltext}>15</p>
        </CardContent>
      
        <CardContent className={ classes.reelcontainer}>
        <CardMedia className={ classes.column1}>
        <img src={firstTopLineImage} className={ classes.dice} alt='' />
        <img src={firstwinLineImage} className={ classes.dice} alt='' />
        <img src={firstBottomLineImage} className={ classes.dice} alt='' />
        </CardMedia>
      
        <CardMedia className={ classes.column2}>
        <img src={secondTopLineImage} className={ classes.dice} alt='' />
        <img src={secondwinLineImage} className={ classes.dice} alt='' />
        <img src={secondBottomLineImage} className={ classes.dice} alt='' />
        </CardMedia>
        
        <CardMedia className={ classes.column3}>
        <img src={thirdTopLineImage} className={ classes.dice} alt='' />
        <img src={thirdwinLineImage} className={ classes.dice} alt='' />
        <img src={thirdBottomLineImage} className={ classes.dice} alt='' />
        </CardMedia>
      
        <CardMedia className={ classes.column4}>
        <img src={fourthTopLineImage} className={ classes.dice} alt='' />
        <img src={fourthwinLineImage} className={ classes.dice} alt='' />
        <img src={fourthBottomLineImage} className={ classes.dice} alt='' />
        </CardMedia>
      
        <CardMedia className={ classes.column5}>
        <img src={fifthTopLineImage} className={ classes.dice} alt='' />
        <img src={fifthwinLineImage} className={ classes.dice} alt='' />
        <img src={fifthBottomLineImage} className={ classes.dice} alt=''  />
        </CardMedia>
        </CardContent>
        
        
        <Button onClick={spin} className={ classes.button}>Play</Button>
        <Button className={ classes.cbutton}>Credit:{wallet}</Button>
        <Button className={ classes.bbutton}>Bet:{bet}</Button>
        <Button onClick={risebet} className={ classes.plusbutton}>+</Button>
        <Button onClick={lowerbet} className={ classes.minusbutton}>-</Button>
        
        </Card>
      </div>
    
  );
}

export default Slots;