import { useState } from 'react';
import './style.css';

function ContactForm() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmitBtn = (e) => {
    e.preventDefault();
  };

  return (
      <div className="form-question">
        <p>Obtén más información</p>
        <form className='contact-form'>
        <input
          type="text"
          placeholder="Nombre completo"
          name="fullname"
          onChange={ ({target}) =>setFullname(target.value) }
          value={ fullname }
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          name="email"
          onChange={ ({target}) =>setEmail(target.value) }
          value={ email }
        />
        <select
          required
          name="country"
          value={country}
          onChange={ ({target}) =>setCountry(target.value) }
        >
          <option value="" default disabled className='option-disabled'>País / Código país</option>
          <option value="Brazil">Brasil(+55)</option>
          <option value="United States">Estados Unidos(+1)</option>
          <option value="Canada">Canadá(+1)</option>
          <option value="Peru">Perú(+51)</option>
        </select>
        <input
          type="tel"
          placeholder="Teléfono"
          name="phone"
          onChange={ ({target}) =>setPhone(target.value) }
          value={ phone }
        />

        <div className='checkbox-info'>
          <input type="checkbox" id="accept-terms" name="accept-terms" value="accept-terms" />
          <label htmlFor="accept-terms">Acepto las <span>condiciones de uso</span> y <span>protección de datos</span>.</label>
        </div>
        <div className='checkbox-info'>
          <input type="checkbox" id="accept-sales" name="accept-sales" value="accept-sales" />
          <label htmlFor="accept-sales">Me gustaría recibir información sobre nuevos cursos, ofertas y promociones</label>
        </div>
        </form>
        <button
          type="button"
          className='send-button'
          onClick={ handleSubmitBtn }
        >
          Enviar
        </button>
      </div>
  );
}
  
export default ContactForm;