import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Guides from './Pages/Guides';
import Contact from './Pages/Contact';
import DestinationDetails from './Components/DestinationDetails';
import Bookingform from './Components/Bookingform';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Payment from './Components/Payment';
import ChatBox from './Components/ChatBox';
import AdminPanel from './Adminpanel/AdminPanel';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/guides' element={<Guides />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/destination/:id' element={<DestinationDetails />} />
        <Route path='/book' element={<Bookingform />} />
        <Route path='/payment' element={<Payment />} />

        <Route path='/admin/*' element={<AdminPanel/>} />
      </Routes>
      <ChatBox />

    </div>
  );
}

export default App;
