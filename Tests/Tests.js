import React from "react";
// TODO primeiro exemplo de criação de componentes
// const Teste = ()=><h2>Olá Teste</h2> 

// TODO segundo exemplo de criação de componentes
const Teste = (props) => {
    return (
        <div>

            <Sobre nome={props.nome} idade={props.idade} cargo={props.cargo} />
            <Social fb = {props.facebook} lk = {props.lk} ig={props.ig}/>
            <hr />

        </div>
    )
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Bem-Vindo {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>{props.idade} anos</h3>
        </div>
    )
}

const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook</a> 
            <a href={props.ig}>Instagram</a>
            <a href={props.lk}>LinkdIn</a>
        </div>
    )
}
export default function App() {

    return (
        <div> 
            <Teste nome='Elvis' idade='22' cargo='Dev Senior' facebook = 'https://www.google.com' ig= 'https://www.google.com' lk={'https://www.google.com'} />
            <Teste nome='Julia' idade='21' cargo='Designer' />
        </div>
    )

} 