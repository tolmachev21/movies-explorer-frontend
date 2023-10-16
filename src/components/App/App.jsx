import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext.js'

import mainApi from '../../utils/MainApi.js';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.jsx';

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

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [cardSavedMovies, setCardSavedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorForm, setErrorForm] = useState(false);
  const [numberErrorForm, setNumberErrorForm] = useState('')
  const [successfully, setSuccessfully] = useState(false);

  useEffect(() => {
    if (loggedIn) {
      Promise.all([mainApi.getUserInfo(localStorage.token), mainApi.getSavedMovies(localStorage.token)])
        .then(([userInfo, moviesInfo]) => {
          setCardSavedMovies(moviesInfo);
          setCurrentUser(userInfo);
          setLoggedIn(true);
        })
        .catch((err) => {
          localStorage.clear();
          console.error(`Ошибка при получении информации о пользователе и сохраненных карточек ${err}`);
        })
    }
  }, [loggedIn]);

  useEffect(() => {
    if (localStorage.token) {
      mainApi.getUserData(localStorage.token)
        .then(() => {
          setLoggedIn(true);
        })
        .catch(err => {
          setLoggedIn(false);
          console.error(`Ошибка авторизации при повторном входе ${err}`)
        })
    } else {
      setLoggedIn(false);
    }
  }, [navigate]);

  function handleExitUser() {
    localStorage.clear();
    setLoggedIn(false);
    navigate('/');
  };

  function handleUpdateUser(data) {
    setLoading(true);
    mainApi.editUserInfo(data, localStorage.token)
      .then((res) => {
        setSuccessfully(true);
        setCurrentUser(res);
      })
      .catch((err) => {
        setErrorForm(true);
        setNumberErrorForm(err.replace(/\D/g, ""))
        console.error(`Ошибка при редактировании профиля ${err}`)
      })
      .finally(() => { setLoading(false) })
  };

  function handleRegister(data) {
    setLoading(true);
    mainApi.registration(data)
      .then((res) => {
        mainApi.authorization(data)
          .then((res) => {
            localStorage.setItem('token', res.token);
            setLoggedIn(true);
            navigate('/movies');
          })
          .catch((err) => {
            setErrorForm(true);
            console.error(`Ошибка при авторизации ${err}`);
          })
          .finally(() => { setLoading(false) })
      })
      .catch(err => {
        setErrorForm(true);
        setNumberErrorForm(err.replace(/\D/g, ""));
        console.error(`Ошибка при регистрации ${err}`);
      })
      .finally(() => { setLoading(false) })
  };

  function handleLogin(data) {
    setLoading(true);
    console.log(data)
    mainApi.authorization(data)
      .then((res) => {
        localStorage.setItem('token', res.token);
        setLoggedIn(true);
        navigate('/movies');
      })
      .catch((err) => {
        setErrorForm(true);
        console.error(`Ошибка при авторизации ${err}`)
      })
      .finally(() => { setLoading(false) })
  };

  function deleteMovie(movieId) {
    mainApi.deleteMovie(movieId, localStorage.token)
      .then(() => {
        setCardSavedMovies(cardSavedMovies.filter((movie) => {
          return movie._id !== movieId;
        }));
      })
      .catch((err) => {
        console.error(`Ошибка при удалении фильма ${err}`);
      })
  };

  function savedMovies(film) {
    const isSave = cardSavedMovies.some(movie => film.id === movie.movieId);
    const isPressMovie = cardSavedMovies.filter((movie) => {
      return movie.movieId === film.id;
    })
    if (isSave) {
      deleteMovie(isPressMovie[0]._id)
    } else {
      mainApi.addMovie(film, localStorage.token)
        .then((res) => {
          setCardSavedMovies([res, ...cardSavedMovies]);
        })
        .catch((err) => {
          console.error(`Ошибка при сохраненнии фильма ${err}`);
        })
    };
  };

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
              <ProtectedRoute
                element={Movies}
                loggedIn={loggedIn}
                cardSavedMovies={cardSavedMovies}
                setErrorForm={setErrorForm}
                errorForm={errorForm}
                savedMovies={savedMovies}
              />
              <Footer />
            </>
          } />

          <Route path="/saved-movies" element={
            <>
              <Header loggedIn={loggedIn} />
              <ProtectedRoute
                element={SavedMovies}
                loggedIn={loggedIn}
                cardSavedMovies={cardSavedMovies}
                setErrorForm={setErrorForm}
                errorForm={errorForm}
                deleteMovie={deleteMovie}
              />
              <Footer />
            </>
          } />

          <Route path="/profile" element={
            <>
              <Header loggedIn={loggedIn} />
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                successfully={successfully}
                setSuccessfully={setSuccessfully}
                handleUpdateUser={handleUpdateUser}
                handleExitUser={handleExitUser}
                loading={loading}
                setErrorForm={setErrorForm}
                errorForm={errorForm}
                setNumberErrorForm={setNumberErrorForm}
                numberErrorForm={numberErrorForm}
              />
            </>
          } />

          <Route path="/signup" element={
            <Register
              nameForm='signup'
              handleRegister={handleRegister}
              loading={loading}
              setErrorForm={setErrorForm}
              errorForm={errorForm}
            />}
          />

          <Route path="/signin" element={
            <Login
              nameForm='signin'
              handleLogin={handleLogin}
              loading={loading}
              setErrorForm={setErrorForm}
              errorForm={errorForm}
            />}
          />

          <Route path="*" element={<NotFound />} />

        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;