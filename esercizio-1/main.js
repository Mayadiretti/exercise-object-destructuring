const utente = {
    nome: "Alice",
    eta: 25,
    hobby: ["leggere", "giocare ai videogiochi", "fare escursioni"],
    indirizzo: {
        via:"123 via degli Aceri",
        citta: "paese delle Meraviglie"
    }
};

const stringaJSON = JSON.stringify(utente)
console.log(stringaJSON)