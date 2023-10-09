import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js'

import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';

function App() {

  const [currentUser, setCurrentUser] = useState({ name: 'Viktor', email: 'tolmach0221@ya.ru' });
  const [loggedIn, setLoggedIn] = useState(true);
  const [cardMovies, setcardMovies] = useState(false);
  const [cardSavedMovies, setCardSavedMovies] = useState(true);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>

          <Route path="/" element={
            <>
              <Header loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>
          } />

          <Route path="/movies" element={
            <>
              <Header loggedIn={loggedIn} />
              <Movies name="Movies" cardMovies={cardMovies} handleSearch="" />
              <Footer />
            </>
          } />

          <Route path="/saved-movies" element={
            <>
              <Header loggedIn={loggedIn} />
              <SavedMovies name="SavedMovies" cardSavedMovie={cardSavedMovies} />
              <Footer />
            </>
          } />

          <Route path="/profile" element={
            <>
              <Header loggedIn={loggedIn} />
              <Profile />
            </>
          } />

          <Route path="/signup" element={<Register nameForm='signup' handleLogin="" />} />

          <Route path="/signin" element={<Login nameForm='signin' handleRegister="" />} />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;