import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import { AuthProvider } from './components/auth';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage'
import ResetPassword from './pages/auth/ResetPassword';
import LoginPage from './pages/auth/LoginPage'
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage'
import AdminBlankPage from './pages/AdminBlankPage';
import EquipPage from './pages/Equipo';
import PageError from './pages/PageError404';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import React, { useState } from 'react';

function App(){

    const [conectado, setConectado] = useState(false);

    const acceder =(estado)=>{
        setConectado(estado);
    }

  return ( 
        <AuthProvider>

           <Router>
               <Routes>
                   <Route exact path='/login' element={<LoginPage/>} />
                   <Route exact path='/' element={ <DashboardPage/>} />
                   <Route exact path='/reset-password' element={<ResetPassword/>} />
                   <Route exact path='/profile' element={<ProfilePage/>} />
                   <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                   <Route exact path='/preference' element={<UserPreferencesPage/>} />
                   <Route exact path='/typography' element={<TypographyPage/>} />
                   <Route exact path='/blank-page' element={<AdminBlankPage/>} />
                   <Route exact path='/Equipo' element={<EquipPage/>} />
                   <Route exact path='*' element={<PageError/>} />

               </Routes>  
           </Router>
        </AuthProvider>
    /*    <Router>
            <Routes>
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/' element={<DashboardPage/>} />
                <Route exact path='/reset-password' element={<ResetPassword/>} />
                <Route exact path='/profile' element={<ProfilePage/>} />
                <Route exact path='/change-password' element={<ChangePasswordPage/>} />
                <Route exact path='/preference' element={<UserPreferencesPage/>} />
                <Route exact path='/typography' element={<TypographyPage/>} />
                <Route exact path='/blank-page' element={<AdminBlankPage/>} />
                <Route exact path='/Equipo' element={<EquipPage/>} />

            </Routes>  
        </Router>*/
    )
}

export default App;
