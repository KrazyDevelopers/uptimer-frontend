import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer, Header } from './components';
import {  Home, Login, Logout } from './pages';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      <Footer />
    </Fragment>
  )
}

export default App
