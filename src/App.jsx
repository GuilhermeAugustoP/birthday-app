import React from 'react';
import Logo from './img/logoApp.png'

function App() {
  return (
    <div>
      <div className='NavBar'>
        <img src={Logo} className='NavImg'></img>
      </div>
      <div className='BoxImg'>
        <img></img>
      </div>
      <div className='BoxTxt'>
        <p className='MeaCulpaStyleFont '>Feliz Aniversário, Fulano!</p>
      </div>
      <div className='BoxContacts'>

      </div>
      <div className='BoxFamous'>

      </div>

    </div>
    
  );
}

export default App;