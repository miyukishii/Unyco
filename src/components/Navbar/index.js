import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import './style.css';

function Navbar({toggle, username, links}) {
  return (
    <nav className={ toggle ? 'header-menu-active' : 'header-menu'}>
        <div className='welcome-container'>
          <h1 className='welcome-message'>Hola, <span style={ {color: '#000000'} }>{username}</span></h1>
          <MdOutlineNotificationsActive color='grey' fontSize="2rem"/>
        </div>
        <div style={ {backgroundColor: "#D8D7CE", height:"0.07rem"} } />
        <ul className='links-list'>
          { 
            links.map((link, index) => (
              <li
                key={index}
                className='link'
              >{link}</li>
            ))
          }
        </ul>
        <div className='split'/>
        <p className='contact'>Contáctanos por whatsapp</p>
        <div className='contact-info'>
          <AiOutlineWhatsApp />
          <p className='contact-number-menu'>+34 653 46 73 60</p>
        </div>
        <div className='split'/>
        <p className='finish-session'>Cerrar sesión</p>
    </nav>
  );
}
  
export default Navbar;