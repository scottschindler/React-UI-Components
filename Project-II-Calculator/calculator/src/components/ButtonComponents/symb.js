import React from 'react';

const symbols = [
    {symb: 'CLEAR'},
    {symb: 'X'},
    {symb: '-'},
    {symv: '/'},
    {text: '+'},
    {text: '='},

  ]

function SymbComp() {
    return (

        <div className="class-list">
          {symbols.map(textfromMap => (
             <SymbolButtons numbers={textfromMap} key={textfromMap.symb} />
          ))}
        </div>
     
    );
  }

  const SymbolButtons = props => {
    console.log(props.numbers);
    return (


  <div className="static_for_now">{props.symb.text}</div>

    );
  };

export default SymbComp;  