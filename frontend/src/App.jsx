import './App.css';
import LandingPage from './pages/LandingPage';
import Store from './pages/Store';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/footer';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserCart from './pages/userCart';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/store' element={<Store/>}/> 
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/userCart' element={<UserCart/>}/>
      </Routes>
    </>

  )
}

export default App
