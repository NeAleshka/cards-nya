import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import CreateNewPass from "./pages/CreateNewPass";
import Error from "./pages/Error";
import Login from "./pages/Login";
import PageTest from "./pages/PageTest";
import Profile from "./pages/Profile";
import RecoveryPass from "./pages/RecoveryPass";
import SingUp from "./pages/SingUp";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/create-pass'} element={<CreateNewPass/>}/>
                <Route path={'/error'} element={<Error/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/test'} element={<PageTest/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/recovery-pass'} element={<RecoveryPass/>}/>
                <Route path={'/'} element={<SingUp/>}/>
            </Routes>
        </div>
    );
}

export default App;
