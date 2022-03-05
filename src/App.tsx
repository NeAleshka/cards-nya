import React from 'react';
import './App.css';
import {Routes, Route, NavLink,Navigate} from 'react-router-dom'
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
           <NavLink style={{marginRight:'30px'}} to={'/sing-up'}>Sing Up</NavLink>
           <NavLink style={{marginRight:'30px'}} to={'/create-pass'}>create-pass</NavLink>
           <NavLink style={{marginRight:'30px'}} to={'/error'}>error</NavLink>
           <NavLink style={{marginRight:'30px'}} to={'/login'}>login</NavLink>
           <NavLink style={{marginRight:'30px'}} to={'/test'}>test</NavLink>
           <NavLink style={{marginRight:'30px'}} to={'/profile'}>profile</NavLink>
           <NavLink style={{marginRight:'30px'}} to={'/recovery-pass'}>recovery-pass</NavLink>
           <NavLink style={{marginRight:'30px'}} to={'/'}>recovery-pass</NavLink>
            <Routes>
                <Route path={'/create-pass'} element={<CreateNewPass/>}/>
                <Route path={'/error'} element={<Error/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/test'} element={<PageTest/>}/>
                <Route path={'/profile'} element={<Profile/>}/>
                <Route path={'/recovery-pass'} element={<RecoveryPass/>}/>
                <Route path={'/sing-up'} element={<SingUp/>}/>
                <Route path={'/'} element={<h2>Main</h2>}/>
                <Route path={'/*'} element={<Navigate to={'error'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
