import React from 'react';
import style from './style.scss';

class Talent extends React.Component {
    render() {
        const classes = `talent talent-${this.props.name} ${this.props.selected ? 'selected' : ''}`;
        return(
            <button
                disabled={this.props.disabled}
                onClick={(e) => this.props.onLeftClick(e)}
                onContextMenu={(e) => this.props.onRightClick(e)}
                onKeyDown={(e) => this.props.onKeyDown(e)}
                className={classes}
                aria-label={this.props.name}
            ></button>
        );
    }
}

export default Talent;