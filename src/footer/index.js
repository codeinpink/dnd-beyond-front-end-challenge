import React from 'react';
import style from './style.scss';
import SocialMediaLinks from '../social-media-links';

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <nav aria-label="Categories">
                    <ul>
                        <li>
                            <a href="#">Snowflakes</a>
                        </li>
                        <li>
                            <a href="#">Magnets</a>
                        </li>
                        <li>
                            <a href="#">Liquids</a>
                        </li>
                    </ul>
                </nav>
                <SocialMediaLinks></SocialMediaLinks>
            </footer>
        );
    }
}

export default Footer;