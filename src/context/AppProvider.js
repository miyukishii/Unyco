import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spotlights, setSpotlights] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const API_URL = 'https://api.beta.unycos.com/u/courses/spotlights/natacion/?x-mejor-key=unycos';
      const response = await fetch(API_URL);
      const data = await response.json();
      setSpotlights(data.spotlights);
    };

    fetchAPI();
  }, []);

  return (
    <AppContext.Provider
      value={ {
        password,
        email,
        username,
        spotlights,
        setUsername,
        setEmail,
        setPassword,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
