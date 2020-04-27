import React from 'react';
import style from './style.scss';

class SearchBox extends React.Component {
    render() {
        return(
            <div className="search-box">
                <ul role="search">
                    <li>
                        <input type="text" placeholder="Search" aria-label="Search"></input>
                    </li>
                    <li>
                        <button type="submit">Submit</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SearchBox;