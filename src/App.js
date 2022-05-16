import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration';
import Footer from './Components/Shared/Footer/Footer';
import Navbar from './Components/Shared/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyAppointments from './Components/Pages/Dashboard/MyAppointments';
import MyReview from './Components/Pages/Dashboard/MyReview';
import MyHistory from './Components/Pages/Dashboard/MyHistory';

function App() {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="history" element={<MyHistory></MyHistory>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Registration></Registration>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
