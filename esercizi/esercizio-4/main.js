const utente = {
    nome:"Alice",
    indirizzo:{
        via:"123 Via degli Aceri",
        citta:"Paese delle Meraviglie"
    }
};

const{indirizzo} = utente;
const{via, citta}=indirizzo;
console.log(via, citta);