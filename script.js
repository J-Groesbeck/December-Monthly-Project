function startMadLibs() {
    let adjective1 = prompt('Enter an adjective:');
    let place1 = prompt('Enter an place:');
    let verb1 = prompt('Enter an verb:');
    let noun1 = prompt('Enter an noun:');
    let adverb1 = prompt('Enter an adverb:');
    let verb2 = prompt('Enter an verb:');

    let story = `Once upon a time, in a <span class="bold">${adjective1}</span> <span class="bold">${place1}</span>, a <span class="bold">${verb1}</span> <span class="bold">${noun1}</span> <span class="bold">${adverb1}</span> <span class="bold">${verb2}</span>.`;

    let madLibOutputDiv = document.getElementById('madLibOutput');

    madLibOutputDiv.innerHTML = `<p>${story}<p>`
}