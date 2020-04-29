import React from 'react';
import style from './style.scss';

class Announcement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <article className="announcement">
                <header>
                    <h2>{ this.props.title }</h2>
                    <p>by <a href="#">Shannon</a> at <time datetime={ this.props.dateTime }>{ this.props.displayTime }</time></p>
                </header>
                <div className="content">
                    <p>Chocolate apple pie sugar plum cake pie sweet roll cheesecake.
                    Jujubes halvah jelly cotton candy croissant lemon drops sweet cheesecake danish.
                    Cookie chupa chups bonbon pudding. Sweet fruitcake icing.</p>
                    <p>Danish sweet roll sweet croissant toffee chocolate bar pie. Chocolate cake caramels jujubes.
                    Jujubes chocolate bar tootsie roll candy canes candy pastry sesame snaps.</p>
                    <button>Read More</button>
                </div>
            </article>
        );
    }
}

export default Announcement;