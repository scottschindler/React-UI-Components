import React from 'react';
import './Button.css';


const numbers = [
    {text: 0},
    {text: 1},
    {text: 2},
    {text: 3},
    {text: 4},
    {text: 5},
    {text: 6},
    {text: 7},
    {text: 8},
    {text: 9},
  ]


function numbersOnCalc() {
    return (

        <div className="class-list">
          {numbers.map(textfromMap => (
             <NumbersButtons numbers={textfromMap} key={textfromMap.text} />
          ))}
        </div>
     
    );
  }

  const NumbersButtons = props => {
    console.log(props.numbers);
    return (


  <div className="static_for_now">{props.numbers.text}</div>

    );
  };

export default numbersOnCalc;  