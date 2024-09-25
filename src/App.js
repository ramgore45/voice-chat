import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/common/Navbar';
import { Home } from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import { Login } from './pages/Login';

function App() {
  return (
    <div className="w-screen min-h-screen text-white bg-[#121212]">
      <div className='w-9/12 mx-auto'>
        <Navbar/>
      </div>
      <div className='h-full w-full'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
