import {Link, Route, Routes} from 'react-router-dom'
import Home from './components/home';
import Challenge01 from './components/challenge01';
import Challenge02 from './components/challenge02';
import Challenge03 from './components/challenge03';
import './App.scss';

function App() {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/challenge01'>Challange01</Link>
        <Link to='/challenge02'>Challange02</Link>
        <Link to='/challenge03'>Challange03</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/challenge01' element={<Challenge01/>}/>
        <Route path='/challenge02' element={<Challenge02/>}/>
        <Route path='/challenge03' element={<Challenge03/>}/>
      </Routes>
    </>
  );
}

export default App;
