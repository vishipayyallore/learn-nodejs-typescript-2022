import React from "react";

const divStyle = {
    color: 'blue',
    paddingLeft: 20,
    border: 'solid',
    margin: 20
};

export class App extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <h1>Hi There !</h1>
            </div>
        );
    }
}