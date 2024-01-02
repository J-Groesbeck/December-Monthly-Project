function startMadLibs() {
    let noun1 = prompt('Enter a noun:');
    let verb1 = prompt('Enter a verb:');
    let noun2 = prompt('Enter a noun:');
    let adjective1 = prompt('Enter an adjective:');
    let pluralNoun1 = prompt('Enter a plural noun:');
    let adjective2 = prompt('Enter an adjective:');
    let pluralNoun2 = prompt('Enter a plural noun:');
    let adjective3 = prompt('Enter an adjective:');
    let pluralNoun3 = prompt('Enter a plural noun:');
    let adjective4 = prompt('Enter an adjective:');
    let pluralNoun4 = prompt('Enter a plural noun:');
    let noun3 = prompt('Enter a noun:');
    let adjective5 = prompt('Enter an adjective:');
    let noun4 = prompt('Enter a noun:');
    let verb2 = prompt('Enter a verb ending in -ed:');
    let adjective6 = prompt('Enter an adjective:');
    let noun5 = prompt('Enter a noun:');
    let adjective7 = prompt('Enter an adjective:');
    let noun6 = prompt('Enter a noun:');
    let adjective8 = prompt('Enter an adjective:');
    let noun7 = prompt('Enter a noun:');
    let noun8 = prompt('Enter a noun:');
    let adjective9 = prompt('Enter an adjective:');
    let noun9 = prompt('Enter a noun:');
    let adjective10 = prompt('Enter an adjective:');
    let noun10 = prompt('Enter a noun:');
    let adjective11 = prompt('Enter an adjective:');
    let noun11 = prompt('Enter a noun:');

    let story = `During the holiday season, my family and I gathered around the <span class="bold">${noun1}</span> to <span class="bold">${verb1}</span> together. We decorated the <span class="bold">${noun2}</span> with <span class="bold">${adjective1}</span> ${pluralNoun1} and <span class="bold">${adjective2}</span> ${pluralNoun2}. We sang <span class="bold">${adjective3}</span> ${pluralNoun3} while sipping on <span class="bold">${adjective4}</span> ${pluralNoun4}. Suddenly, we heard a <span class="bold">${noun3}</span> noise coming from the <span class="bold">${noun4}</span>, and we discovered <span class="bold">${noun5}</span> <span class="bold">${verb2}</span> there, spreading <span class="bold">${adjective6}</span> ${noun6} all around. Despite the chaos, it became our most <span class="bold">${adjective7}</span> holiday memory. The <span class="bold">${noun7}</span> shimmered under the <span class="bold">${adjective8}</span> lights, creating a(n) <span class="bold">${noun8}</span> atmosphere. We exchanged <span class="bold">${adjective9}</span> gifts and shared heartfelt <span class="bold">${noun9}</span>. The aroma of <span class="bold">${noun10}</span> filled the air, making everyone's mouths water. Laughter echoed through the <span class="bold">${noun11}</span> as we played <span class="bold">${adjective10}</span> games.`;

    let madLibOutputDiv = document.getElementById('madLibOutput');

    madLibOutputDiv.innerHTML = `<p>${story}</p>`;
}