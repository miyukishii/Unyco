import { IoIosArrowForward } from 'react-icons/io';
import { TiStarOutline } from 'react-icons/ti';

import highlights from "../../mocks/highlights";
import './style.css';

function Highlights() {
    return (
      <div className="highlights">
        <p className="highlights-title">Destaques del curso</p>
        <div className="highlights-items">
         {
            highlights.map(({number, title}, index) => (
              <div key={index} className="highlights-info">
                <div>
                 <h3>{number}</h3>
                  <p>{title}</p>
                </div>
                <IoIosArrowForward color="white" />
              </div>
            ))
         }
        </div>
        <button>Ver programa completo</button>
        <div>
          <div className='highlight-message'>
            <TiStarOutline color="#C5AF19" fontSize="7rem" />
            <h3>Los estudiantes le dan a Unycos una calificación promedio de 4.7 de 5 estrellas.</h3>
          </div>
          <p className='highlight-description'>100% de garantía de satisfacción. 30 días de garantía de devolución de dinero.</p>
        </div>
      </div>
    );
  }
  
  export default Highlights;