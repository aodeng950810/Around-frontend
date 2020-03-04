import React from 'react';
import logo from '../assets/logo.svg';
import { Icon } from 'antd'
import '../styles/Topbar.css'

export function Topbar(props) {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title"> Around </h1>
            {
                props.isLoggedIn ?
                    <a onClick={props.handleLogout} className="logout">
                        <Icon type="logout" />
                        {' '}Logout
                    </a> :
                    null
            }
        </header>
    );
}