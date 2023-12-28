
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './omponents/Header';
import Home from './omponents/Home';
import AboutUs from './omponents/AboutUs';
import Contacts from './omponents/Contacts';
import Hizmet from './omponents/Hizmet';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
    <Routes>
      <Route path='/' >
        <Route index element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/hakkimizda' element={<AboutUs/>} />
        <Route path='/hizmetimiz' element={<Hizmet/>} />
        <Route path='/iletisim' element={<Contacts/>} />
      </Route>          
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
