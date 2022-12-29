import './style.css';

function Banner() {
  return (
    <div className="banner">
      <p className="banner-title">Artículos relacionados</p>
      <div className="banner-description">
        <p>Detrás de cada éxito, hay una história.</p>
        <p>conoce en nuestro blog.</p>
      </div>
      <button>
        Ler más en nuestro blog
      </button>
    </div>
  );
}
  
export default Banner;