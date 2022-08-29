import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="manu-area">
        <nav className="menu">
            {/*<i className="fa fa-home">*/}
            <Link to="/">
                <i className="fa fa-home"></i> Ínicio
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários
            </Link>
            <Link to="/disciplinas">
                <i className="fa fa-books"></i> Disciplinas
            </Link>
        </nav>
    </aside>