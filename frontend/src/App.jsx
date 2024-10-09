import './App.css';
import LandingPage from './pages/LandingPage';
import Store from './pages/Store';
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
    </>

  )
}

export default App
