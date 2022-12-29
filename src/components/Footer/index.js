import logo from '../../assets/logo-unycos.svg';

import './style.css';

function Footer() {
  return (
    <footer>
      <div className="footer-links-mobile">
        <img src={logo} alt="logo" />
        <div className='footer-coin'>
          <p>USD ($)</p>
          <p>/</p>
          <p>EUR (€)</p>
        </div>
      </div>

      <div className='footer-links'>
        <img src={logo} alt="logo" />
        <div className='links-titles'>
        <p>Terminos y condiciones</p>
        <p>Política de privacidad</p>
        <p>Aviso legal</p>
        </div>
        <div className='footer-coin-desktop'>
          <p>USD ($)</p>
          <p>/</p>
          <p>EUR (€)</p>
        </div>
      </div>
    </footer>
  );
}
  
export default Footer;