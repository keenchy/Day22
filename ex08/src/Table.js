import React, { Component } from 'react';

const TableBody = () => {
    return <tbody / >
}

import React, { Component } from 'react';

const TableBody = () => {
    return <tbody / >
}

const TableHeader = () => {
    return <tbody / >
}

class Table extends Component {
    render() {
        const { characterData } = this.props;

        return ( <
            table >
            <
            TableHeader / >
            <
            TableBody characterData = { characterData }
            /> < /
            table >
        )
    }
}
export default Table;