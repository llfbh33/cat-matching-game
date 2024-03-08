import { finding } from "./matching.js";

let count = 0;

export const implementCatStorage = async (cats) => {
    const cardDeck = document.querySelector('#card-deck');

    if(cats.length < 7) {
        localStorage.cats = JSON.stringify([...cats, ...cats]);
    };
    console.log(localStorage.cats)

    cats.forEach(cat => {
        const container = document.createElement('li');
        const image = document.createElement('img');

        container.setAttribute('class', cat.class);
        image.setAttribute('src', cat.url);

        if (count.toString().length === 1) {
            container.innerText = `0${count}`;
        } else {
            container.innerText = count;
        };
        count++;

        if (cat.class === 'matched') {
            image.style.visibility = 'visible';
        } else {
            image.style.visibility = 'hidden';
        };

        container.appendChild(image);
        cardDeck.appendChild(container);
    });
    count = 0;
    await finding();
};
