import './Logo.css'
import React from 'react'
import logo from '../../assets/imgs/Logo.png'

export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="logo" />
        </a>
    </aside>
