import React from 'react';
import style from './style.scss';

class MainMenu extends React.Component {
    render() {
        return(
            <nav aria-label="Main Navigation" className="main-menu">
                <ul>
                    <li>
                        <i className="snowflakes-icon" aria-hidden="true"></i>
                        <a href="#">Snowflakes</a>
                    </li>
                    <li>
                        <i className="magnets-icon" aria-hidden="true"></i>
                        <a href="#">Magnets</a>
                    </li>
                    <li className="nested-menu">
                        <i className="liquids-icon" aria-hidden="true"></i>
                        <a href="#">Liquids</a>
                        <ul className="menu">
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