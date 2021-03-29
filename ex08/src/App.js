import React, { Component } from 'react';
import Table from './Table';
class App extends Component {
    render() {
        const characters = [{
                firstName: 'Lary',
                lastName: 'Page',
            },
            {
                firstName: 'Ada',
                lastName: 'Turing',
            },
        ]
        return ( <
            div className = "container" >
            <
            Table charactersData = { characters }
            /> <
            /div>
        )
    }
}
export default App;