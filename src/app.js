import React from 'react';
import Header from './header';
import Announcement from './announcement';
import TalentCalculator from './talent-calculator';
import Footer from './footer';

class App extends React.Component {
    render() {
        return(
            <div>
                <Header></Header>
                <h1>Hello World</h1>
                <Announcement title="Important News Item" dateTime="2020-04-26 19:30" displayTime="7:30 pm"></Announcement>
                <TalentCalculator></TalentCalculator>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;