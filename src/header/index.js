import React from 'react';
import logo from '../../assets/logo.png';
import style from './style.scss';
import SearchBox from './search';
import MainMenu from './main-menu';

class Header extends React.Component {
    render() {
        return(
            <header>
                <img src={logo} alt="Logo" role="presentation"></img>
                <SearchBox></SearchBox>
                <MainMenu></MainMenu>
            </header>
        );
    }
}

export default Header;