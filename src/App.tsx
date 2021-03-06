import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from 'react-router-dom'
import CreateNewPass from "./pages/CreateNewPass";
import Error from "./pages/Error";
import Login from "./pages/Login";
import PageTest from "./pages/PageTest";
import Profile from "./pages/Profile";
import RecoveryPass from "./pages/RecoveryPass";
import SingUp from "./pages/SingUp";
import {Layout} from "./components/Layout";
import ProfileInformation from "./pages/Profile/ProfileInformation/ProfileInformation";
import {CheckMail} from "./pages/CheckMail";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Login/>}/>
                    <Route path={'/create-pass/:token'} element={<CreateNewPass/>}/>
                    <Route path={'/error'} element={<Error/>}/>
                    <Route path={'/check-mail'} element={<CheckMail/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/test'} element={<PageTest/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/recovery-pass'} element={<RecoveryPass/>}/>
                    <Route path={'/sing-up'} element={<SingUp/>}/>
                    <Route path={'/profile/information'} element={<ProfileInformation/>}/>
                    <Route path={'/*'} element={<Navigate to={'error'}/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
