import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'react-toastify/dist/ReactToastify.css'
import '@fontsource-variable/dancing-script';
import '@fontsource-variable/rubik';
import '@fontsource-variable/kode-mono';
import './index.css';
import Login from './Login';
import SignUp from './SignUp';
import App from './App';
import { ThemeProvider } from './Contexts/ThemeContext';
import ListClubs from './ListClubs';
import NotFound from './NotFound';
import Club from './Club';
import Event from './Event';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Events from './Events';
import ManageClub from './Components/ManageClub';
import CreateEvent from './CreateEvent';
import EditEvent from './EditEvent';
import { ToastContainer } from 'react-toastify';
import SplashScreen from './SplashScreen';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/*" element={<NotFound/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/home" element={<App/>} />
          <Route path='/clubs' element={<ListClubs/>} />
          <Route path='/club' element={<Club/>} />
          <Route path='/club/:clubName' element={<Club/>} />
          <Route path='/event' element={<Event/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/event/:eventName' element={<Event/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/profile/:username' element={<Profile/>} />
          <Route path='/profile/edit' element={<EditProfile/>} />
          <Route path='/search/:searchTerm' element={<Events/>} />
          <Route path='/manage/club' element={<ManageClub/>} />
          <Route path='/event/create' element={<CreateEvent/>} />
          <Route path='/event/edit' element={<EditEvent/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </ThemeProvider>
  </StrictMode>,
)
