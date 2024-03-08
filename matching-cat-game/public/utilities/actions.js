import { finding } from "./matching.js";

const cards = new Array();
let count = 0;

function shuffleCards(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

export const findCats = async () => {

    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await res.json();
    const url = data[0].url;

    if (count === 6) {
        count = 0;
        await setCats();
    } else {
        cards[count] = url;
        cards[count + 6] = url;
        count++;

        let storedCats = JSON.parse(localStorage.cats);
        const catObj = {url: url, class: 'un-matched'}; // change his when ever the card is flipped to properly reflect the class
        storedCats.push(catObj);
        localStorage.cats = JSON.stringify(storedCats);
        await findCats();
    };
};

const setCats = async () => {
    const cardDeck = document.querySelector('#card-deck');
    let storedCats = JSON.parse(localStorage.cats);

    if (storedCats.length < 11) {
        storedCats = [...storedCats, ...storedCats];
        localStorage.cats = JSON.stringify(storedCats);
    };

    const shuffled = shuffleCards(cards);

    shuffled.forEach(card => {
        const container = document.createElement('li');
        container.setAttribute('class', 'un-matched');
        const unmatchedElements = document.querySelectorAll('li.un-matched');
        console.log(unmatchedElements)

        if (count.toString().length === 1) {
            container.innerText = `0${count}`
        } else {
            container.innerText = count;
        }
        count++;

        const image = document.createElement('img');
        image.setAttribute('src', card);
        image.style.visibility = 'hidden'
        container.appendChild(image);
        cardDeck.appendChild(container);
    });
    count = 0;
    await finding();
}

export const removeCats = async () => {

    const unmatchedElements = document.querySelectorAll('li.un-matched');
    const matchedElements = document.querySelectorAll('li.matched');
    const pendingElements = document.querySelectorAll('li.pending');

    if(unmatchedElements) {
        unmatchedElements.forEach(ele => {
            ele.remove()
        });
    };

    if(matchedElements) {
        matchedElements.forEach(ele => {
            ele.remove()
        });
    };

    if(pendingElements) {
        pendingElements.forEach(ele => {
            ele.remove()
        })
    };

    localStorage.setItem('score', 0);
    localStorage.setItem('count', 0);
    localStorage.setItem('cats', JSON.stringify([]));
    // set cat removal from local storage
    await findCats();
}
