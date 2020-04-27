import React from 'react';
import style from './style.scss';

class Talent extends React.Component {
    render() {
        const classes = `talent talent-${this.props.name}`;
        return(
            <button
                disabled={this.props.disabled}
                onClick={() => this.props.onClick()}
                className={classes}
                aria-label={this.props.name}
            ></button>
        );
    }
}

export default Talent;