const persona = {
    nome:"Jane",
    occupazione:"sviluppatrice"
};

const presentati = ({nome, occupazione}) =>{
    console.log(`ciao sono ${nome} e sono una ${occupazione}`)
}
presentati(persona);