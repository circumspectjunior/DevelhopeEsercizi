// Recupera i valori dei campi di input
const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const age = document.getElementById("age").value;

// Crea l'oggetto person
const person = {
  firstName: firstName,
  lastName: lastName,
  age: age,
};

// Recupera l'elemento form
const form = document.getElementById("personForm");

// Aggiungi l'attributo data-person contenente l'oggetto person in formato JSON
form.setAttribute("data-person", JSON.stringify(person));

console.log(form.getAttribute("data-person")); // Per verificare il risultato
