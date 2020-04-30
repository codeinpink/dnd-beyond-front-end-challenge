import React from 'react';
import logo from '../../assets/logo.png';
import style from './style.scss';
import SearchBox from './search';
import MainMenu from './main-menu';
import SocialMediaLinks from '../social-media-links';

class Header extends React.Component {
    render() {
        return(
            <header className="top-header">
                <img src={logo} alt="Logo" role="presentation"></img>
                
                <div className="right">
                    <SocialMediaLinks></SocialMediaLinks>
                    <SearchBox></SearchBox>
                </div>
                
                <MainMenu></MainMenu>
            </header>
        );
    }
}

export default Header;