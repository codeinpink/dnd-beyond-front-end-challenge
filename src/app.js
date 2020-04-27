import React from 'react';
import Announcement from './announcement';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <Announcement title="Important News Item" dateTime="2020-04-26 19:30" displayTime="7:30 pm"></Announcement>
            </div>
        );
    }
}

export default App;