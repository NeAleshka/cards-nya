import React from 'react'
import {NavLink,Outlet} from "react-router-dom";


export const Layout = () => {
    return (
        <div>
            <NavLink style={{marginRight:'30px'}} to={'/sing-up'}>Sing Up</NavLink>
            <NavLink style={{marginRight:'30px'}} to={'/login'}>login</NavLink>
            <NavLink style={{marginRight:'30px'}} to={'/profile'}>profile</NavLink>
            <Outlet/>
        </div>
    )
}

/*   <NavLink style={{marginRight:'30px'}} to={'/recovery-pass'}>recovery-pass</NavLink>
            <NavLink style={{marginRight:'30px'}} to={'/create-pass'}>create-pass</NavLink>
            <NavLink style={{marginRight:'30px'}} to={'/error'}>error</NavLink>
            <NavLink style={{marginRight:'30px'}} to={'/test'}>test</NavLink>*/