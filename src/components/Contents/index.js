import contents from "../../mocks/contents";

import './style.css';

function Contents() {
    return (
      <div className="contents">
        <p>Contenido exclusivo</p>
        <div className="contents-icons">
         {
            contents.map(({title, icon}, index) => (
              <div key={index} className="contents-info">
                <img src={icon} alt={title} />
                <p>{title}</p>
              </div>
            ))
         }
        </div>
        <button>
          Mas información
        </button>
      </div>
    );
  }
  
  export default Contents;