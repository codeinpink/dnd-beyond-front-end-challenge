import React from 'react';
import style from './style.scss';

class MainMenu extends React.Component {
    render() {
        return(
            <nav className="main-menu">
                <ul>
                    <li><a href="#">Snowflakes</a></li>
                    <li><a href="#">Magnets</a></li>
                    <li>
                        <a href="#">Liquids</a>
                        <ul>
                            <li><a href="#">Flammable</a></li>
                            <li><a href="#">Combustable</a></li>
                            <li><a href="#">Flambustable</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MainMenu;