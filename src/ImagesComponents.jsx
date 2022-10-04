import React from 'react';
import Irwin from './img/trilha.jpg'
import './Images.css'

function ImgAspRatio () {
    return (
        <div className='container'>
            <img 
                alt='Foto do Aniversariante' 
                src={Irwin} 
                className='mainImg' 
            />
        </div>
    )
}


export default ImgAspRatio