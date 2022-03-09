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
import {authLogOut} from "./redux/reducers/authReducer";
import {useDispatch} from "react-redux";
import ProfileInformation from "./pages/Profile/ProfileInformation/ProfileInformation";

function App() {
    const dispatch = useDispatch()
    return (
        <div className="App">
            <button onClick={() => dispatch(authLogOut())}>logOut</button>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<h2>Main</h2>}/>
                    <Route path={'/create-pass'} element={<CreateNewPass/>}/>
                    <Route path={'/error'} element={<Error/>}/>
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
