const etaDefault = 30;

const persona ={
    nome:"Bob",
}

const{nome, eta = etaDefault}=persona;
console.log(nome, eta)