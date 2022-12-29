import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';

import './style.css';

function Social() {
  return (
    <div className="social-medias">
      <p>únete a la comunidad</p>
      <div className="social-links">
        <a href="https://pt-br.facebook.com/">
          <FiFacebook className='social-icon'/>
        </a>
        <a href="https://www.instagram.com/">
          <FiInstagram className='social-icon'/> 
        </a>
        <a href="https://twitter.com">
          <FiTwitter className='social-icon'/>
        </a>
        <a href="https://www.youtube.com">
          <FiYoutube className='social-icon'/>
        </a>
      </div>
    </div>
  );
}
  
export default Social;