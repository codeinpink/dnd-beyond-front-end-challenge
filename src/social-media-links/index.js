import React from 'react';
import style from './style.scss';

class SocialMediaLinks extends React.Component {
    render() {
        return(
            <ul role="navigation" aria-label="Social Media" className="social-media-links">
                <li>
                    <a aria-label="Twitter" className="twitter" href=""></a>
                </li>
                <li>
                    <a aria-label="Facebook" className="facebook" href=""></a>
                </li>
                <li>
                    <a aria-label="Youtube" className="youtube" href=""></a>
                </li>
            </ul>
        );
    }
}

export default SocialMediaLinks;