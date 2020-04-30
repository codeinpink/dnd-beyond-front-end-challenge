import React from 'react';
import Talent from './talent';
import style from './style.scss';

const MAX_POINTS = 6;

class TalentCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            talents: {
                'Talent Path 1': [false, false, false, false],
                'Talent Path 2': [false, false, false, false],
            },
            pointsSpent: 0
        };
    }

    render() {
        return(
            <main className="talent-calculator">
                <header>
                    <h1>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h1>
                </header>
                <div className="calculator">
                    <div className="talents">
                        {this.renderTalentPath('Talent Path 1', ['Stack', 'Silverware', 'Cake', 'Crown'])}

                        {this.renderTalentPath('Talent Path 2', ['Boat', 'Scuba', 'Lightning', 'Skull'])}
                    </div>
                    <div className="points-spent">
                        <h3><span>{this.state.pointsSpent}/{MAX_POINTS}</span> Points Spent</h3>
                    </div>
                </div>
            </main>
        );
    }

    renderTalentPath(pathTitle, talents) {
        const talentList = talents.map((talent, talentIndex) => {
            return(
                <li key={talent}>
                    <Talent
                        name={talent}
                        disabled={this.isTalentDisabled(pathTitle, talentIndex)}
                        selected={this.isTalentSelected(pathTitle, talentIndex)}
                        onLeftClick={(e) => this.handleLeftClick(e, pathTitle, talentIndex)}
                        onRightClick={(e) => this.handleRightClick(e, pathTitle, talentIndex)}
                        onKeyDown={(e) => this.handleKeyDown(e, pathTitle, talentIndex)}
                    ></Talent>
                </li>
            );
        });

        return(
            <div className="talent-path">
                <h3>{pathTitle}</h3>
                <ol>
                    {talentList}
                </ol>
            </div>
        );
    }

    isTalentDisabled(pathTitle, talentIndex) {
        if (this.state.pointsSpent === MAX_POINTS && !this.isTalentSelected(pathTitle, talentIndex)) {
            return true;
        }

        if (talentIndex === 0) {
            return false;
        }

        const path = this.state.talents[pathTitle];
        const previousSelected = path[talentIndex - 1] === true;
        return !previousSelected;
    }

    isTalentSelected(pathTitle, talentIndex) {
        return this.state.talents[pathTitle][talentIndex] === true;
    }

    handleLeftClick(event, pathTitle, talentIndex) {
        const points = this.state.pointsSpent;
        const path = this.state.talents[pathTitle];

        if (!path[talentIndex]) {
            this.setState({pointsSpent: points + 1});
            this.updateTalent(pathTitle, talentIndex, true);
        }
    }

    handleRightClick(event, pathTitle, talentIndex) {
        event.nativeEvent.preventDefault(); // prevent context menu from popping up
        const points = this.state.pointsSpent;
        const path = this.state.talents[pathTitle];

        if (path[talentIndex]) {
            this.setState({pointsSpent: points - 1});
            this.updateTalent(pathTitle, talentIndex, false);
        }
    }

    handleKeyDown(event, pathTitle, talentIndex) {
        if (event.key === 'Enter' || event.key === ' ') {
            event.nativeEvent.preventDefault();

            const points = this.state.pointsSpent;
            const path = this.state.talents[pathTitle];

            const talentAlreadySelected = path[talentIndex] === true;
            const newPoints = talentAlreadySelected ? points - 1 : points + 1;
            const newValue = talentAlreadySelected ? false : true;

            this.setState({pointsSpent: newPoints});
            this.updateTalent(pathTitle, talentIndex, newValue);
        }
    }

    updateTalent(pathTitle, talentIndex, newValue) {
        const talentsCopy = JSON.parse(JSON.stringify(this.state.talents));
        talentsCopy[pathTitle][talentIndex] = newValue;

        // Removing a talent should clear the rest of the talents that come after
        if (!newValue) {
            for (let i = talentIndex; i < talentsCopy[pathTitle].length; i++) {
                if (talentsCopy[pathTitle][i]) {
                    talentsCopy[pathTitle][i] = false;
                    this.setState((state) => {
                        return {pointsSpent: state.pointsSpent - 1};
                    });
                }
            }
        }

        this.setState({talents: talentsCopy});
    }
}

export default TalentCalculator;