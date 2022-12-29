import { useContext, useEffect, useReducer, useState } from 'react';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdArrowDropDown } from 'react-icons/md';
import { BiUser } from 'react-icons/bi';
import logo from '../../assets/logo-unycos.svg';
import Navbar from '../Navbar';
import './style.css';

import {menuMobile} from '../../mocks/menu';

function Header() {
  const { email, username } = useContext(AppContext);
  const [ links, setLinks ] = useState([]);
  const [toggle, setToggle] = useReducer(
    toggle => !toggle,
    false,
  );

  const navigate = useNavigate();

  useEffect(() => {
    setLinks(menuMobile)
  }, []);

    return (
      <header>
        <div className='empty-space' />
        <img src={logo} alt="Unycos logo" className='logo' />
        {
          (email.length === 0)
            ? <button onClick={() => { navigate('/login') }} className="header-icon">
                <BiUser fontSize="1.5rem" color="grey" />
              </button>
            : <button onClick={setToggle} className="header-icon">
                <AiOutlineMenu fontSize="1.5rem" color="grey"/>
            </button>
        }
        <Navbar toggle={toggle} links={links} username={username} />
        <div className='menu-desktop'>
          <p>Cursos</p>
          {
          (email.length === 0)
            ? <>
                <p>Register</p>
                <button onClick={() => { navigate('/login') }}>
                  Log in
                </button>
              </>
            : <button onClick={setToggle}>
                <div className='dropdown'>
                {`Hola, ${username}`}
                <MdArrowDropDown fontSize="2rem"/>
                </div>
            </button>
        }
        </div>
      </header>
    );
  }
  
  export default Header;