import logo from './logo.svg';
import ja from './ja.png'
import './App.css';

import React, { useState } from 'react';
import Text from './componets/text/text.component'
import Type from './componets/type/type.component';

function App() {
  const [state, setState] = useState({ name: '' });
  const x = (name) => setState({name: name});

  let text;
  if (state.name === '') {
    text = (
      <div className="d">
        <Text />
        <Type state={x.bind(this)}/>
      </div>
    );
  }
  else {
    text = <h3>Olá {state.name}! Você conseguiu disponibilizar a aplicação corretamente :)</h3>
  }
  
  return (
    <div className="App">
      <div>
        <img className="App-logo" src={ja} />
      </div>
      {text}
    </div>
  );
}

export default App;
