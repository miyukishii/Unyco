import { AiOutlineWhatsApp } from 'react-icons/ai';

import './style.css';

function Contact() {
  return (
    <div className="contact-container">
      <p>¿Dudas? Contáctanos por whatsapp</p>
        <a href="https://wa.me/34653467360">
          <div className="contact-number">
            <AiOutlineWhatsApp />
            <p>+34 653 46 73 60</p>
          </div>
        </a>
    </div>
  );
}
  
export default Contact;