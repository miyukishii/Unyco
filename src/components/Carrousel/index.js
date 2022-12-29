import { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import './style.css';

function Carrousel() {
  const { spotlights } = useContext(AppContext);
  const [ spotlight, setSpotlight ] = useState({});

  useEffect(() => {
    setSpotlight(spotlights[0])
  }, [spotlights]);

  const handleClick = (data) => {
    setSpotlight(data);
  }
  
  return (
    <section>
      <img src={(spotlight) && spotlight.image} alt='spotlight' className='spotlight-image-desktop'/>
      <div className='images-container'>
        <p className='title-images-container'>{(spotlight) && spotlight.title}</p>
        <p className='description-images-container'>{(spotlight) && spotlight.description}</p>
        <div className='carrousel'>
      { 
        (spotlights !== 'undefined') &&
        spotlights.map((item, index) => (
          <button key={index} onClick={() => handleClick(item)}><img src={item.image} alt={item.title} className="spotilight-image" /></button>
        ))
      }
      </div>
      </div>
    </section>
  )
}

export default Carrousel;