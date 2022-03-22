import React from 'react'
import {NavLink,Outlet} from "react-router-dom";


export const LayoutProfile = () => {

const linkStyle=({isActive}:any)=>({marginRight:'30px',textDecoration:'none',cursor:'pointer',color:
        isActive?'blue':"black"
})
    return (
        <div>
            <NavLink style={linkStyle} to={'/profile'} end={true}>profile</NavLink>
            <NavLink style={linkStyle} to={'/profile/packs-list'} end={true}>Packs List</NavLink>
            <Outlet/>
        </div>
    )
}
