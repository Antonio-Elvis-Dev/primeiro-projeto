import React, { Component } from "react";


class Equipe extends Component {
    render() {
        return (
            <div>
                <h2>
                    olá {this.props.nome}
                </h2>
                <h3>Cargo: {this.props.cargo}</h3>
            </div>
        )
    }
}

function App() {
    return (
        <div>

            <h1>Olá</h1>
            <Equipe cargo='Dev' nome='Elvis' />
        </div>
    )
}

export default App;