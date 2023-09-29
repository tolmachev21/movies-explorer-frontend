import './App.css';
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx';
import { useState } from 'react';
import NavTab from '../Main/NavTab/NavTab';
import Promo from '../Main/Promo/Promo';
import Techs from '../Main/Techs/Techs';


function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="App">
      <Header loggedIn={loggedIn} />
      <NavTab />
      <Promo />
      <Techs />
      <Footer />
    </div>
  );
}

export default App;
