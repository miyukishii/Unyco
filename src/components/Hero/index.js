import { useEffect, useState } from 'react';

import './style.css';
import mobile from '../../assets/Hero.png';
import desktop from '../../assets/Hero-desktop.png';
import modules from '../../assets/icon-modulos.svg';
import videos from '../../assets/icon-videos.svg';

function Hero() {
  const [ screenWidth, setScreenWidth ] = useState();

  function displayWindowSize(){
    var w = document.documentElement.clientWidth;
    setScreenWidth(w);
}
  window.addEventListener("resize", displayWindowSize);
  

  useEffect(() => {
    displayWindowSize();
  }, []);

  console.log(screenWidth);
  return (
    <main>
      <img src={(screenWidth > 1440) ? desktop : mobile} alt="Nadadora profisisonal em piscipa esportiva" className='main-hero'/>
      <div className='main-info'>
          <p className='title'>Mireia Belmonte</p>
          <p className='subtitle'><span style={{ color: '#666666' }}>enseña</span> natación</p>
          <button className='info-button'>Solicitar información</button>
      </div>
      <div className='icons-container'>
        <div>
            <img src={modules} alt="module icon" className='icon' />
            <p>12 módulos</p>
        </div>
        <div>
          <img src={videos} alt="video icon" className='icon' />
          <p>+3,5 horas</p>
        </div>
        <button className='info-button info-button-desktop'>Mas información</button>
      </div>
      <div className='extra-info'>
        <p>Aprende natación con una campeona olímpica</p>
        <button className='main-button questions-button'>Preguntas Frecuentes</button>
      </div>
    </main>
  )
}

export default Hero;