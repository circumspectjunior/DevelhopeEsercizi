const ull = document.querySelector("ul");

//l'elemento padre di ul.
const parent1 = ull.parentElement;

//il secondo elemento figlio di ul
const secondChild = ull.children[1];

//l'elemento fratello successivo del secondo li.
const nextBro = secondChild.nextElementSibling;

//l'elemento fratello precedente del secondo li
const previousBro = secondChild.previousElementSibling;

console.log(parent1, secondChild, nextBro, previousBro);
