import React from 'react';
import Talent from './talent';
import style from './style.scss';

class TalentCalculator extends React.Component {
    render() {
        return(
            <div className="talent-calculator">
                <h2>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h2>

                {this.renderTalentPath('Talent Path 1', ['Stack', 'Silverware', 'Cake', 'Crown'])}

                {this.renderTalentPath('Talent Path 2', ['Boat', 'Scuba', 'Lightning', 'Skull'])}
            </div>
        );
    }

    renderTalentPath(title, talents) {
        const talentList = talents.map(talent => {
            return(
                <li key={talent}>
                    <Talent
                        name={talent}
                        disabled={true}
                        onClick={() => this.handleClick()}
                    ></Talent>
                </li>
            );
        });

        return(
            <div className="talent-path">
                <h3>{title}</h3>
                <ol>
                    {talentList}
                </ol>
            </div>
        );
    }

    handleClick() {
        console.log('handleClick');
    }
}

export default TalentCalculator;