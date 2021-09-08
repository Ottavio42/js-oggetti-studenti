var studente = {
    "nome": "Samuele",
    "cognome": "Madrigali",
    "eta": 30
};
for(var key in studente){
    console.log(studente[key]);
}


var studenti = [
    {
        "nome" : "Luca",
        "cognome" : "Rossi",
        "eta" : 20
    },
    {
        "nome" : "Leo",
        "cognome" : "Messi",
        "eta" : 35
    },
    {
        "nome" : "Peter",
        "cognome" : "Parker",
        "eta" : 25
    }
];


var nStudente = {
    "nome" : prompt("Inserisci nome studente"),
    "cognome" : prompt("Inserisci cognome studente"),
    "eta" : parseInt(prompt("Inserisci età studente"))
};

studenti.push(nStudente);
console.log(studenti);