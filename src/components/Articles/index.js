import articles from "../../mocks/articles";

import './style.css';

function Articles() {
  return (
    <div className="articles">
      <p>Artículos relacionados</p>
      <div className="articles-container">
        {
          articles.map(({title, date}, index) => (
            <div key={index} className="article-info">
              <p>{title}</p>
              <p>{date}</p>
            </div>
           ))
        }
      </div>
      <button>
        Ler más en nuestro blog
      </button>
    </div>
  );
}
  
export default Articles;