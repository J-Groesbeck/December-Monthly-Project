let adjective1 = prompt('Enter an adjective:');
let place1 = prompt('Enter an place:');
let verb1 = prompt('Enter an verb:');
let noun1 = prompt('Enter an noun:');
let adverb1 = prompt('Enter an adverb:');
let verb2 = prompt('Enter an verb:');

let story = `Once upon a time, in a ${adjective1} ${place1}, a ${verb1} ${noun1} ${adverb1} ${verb2}.`;

let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}<p>`