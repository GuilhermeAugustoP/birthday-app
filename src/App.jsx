import React from 'react';
import Logo from './img/logoApp.png'
import ImgAspRatio from './ImagesComponents';

function App() {
  return (
    <>
    <div className='NavBar'>
      <img alt= 'Logo do aplicativo'src={Logo} className='NavImg'></img>
    </div>
    <div className='rightContent'>
     <ImgAspRatio/>
    </div>
      </>

    
    
  );
}

export default App;