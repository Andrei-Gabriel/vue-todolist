// Descrizione:
// Rifare l'esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
    // - text, una stringa che indica il testo del todo
    // - done, un booleano (true/false) che indica se il todo è stato fatto oppure no

// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const app = new Vue({
    el: '#root',
    data: {
        todo: [
            {
                text: "Fare colazione",
                done: false,
            },
            {
                text: "Partecipare alla prima parte della lezione giornaliera per correggere l'esercizio per ieri e per imparare qualcosa di nuovo",
                done: false,
            },
            {
                text: "Fare pausa",
                done: false,
            },
            {
                text: "Partecipare alla seconda parte della lezione giornaliera",
                done: false,
            },
        ],
        inputValue: '',
    },
    // Inizio metodi
    methods: {
        addTodo: function(){
            // Aggiunge un elemento solo se è diverso dallo spazio
            if(this.inputValue != ""){
                // Oltre al testo aggiunge la variabile booleana
                this.todo.push({text: this.inputValue, done: false});
                // Dopo l'aggiunta pulisce l'input text
                this.inputValue = "";
            };
        },
        removeTodo: function(index){
            // Rimuove n (n = 1) elementi partendo dalla posizione index 
            this.todo.splice(index, 1);
        },
        doneTodo: function(index){
            // Se la var bool è false allora assegna true altrimenti viceversa
            if(this.todo[index].done == false){
                this.todo[index].done = true;
            }else{
                this.todo[index].done = false;
            }
        },
    },
});