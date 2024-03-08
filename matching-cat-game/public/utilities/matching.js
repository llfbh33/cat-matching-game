
// let all the main li elements have a class of unmatched
// search by the class unmatched rather than by li
// make an array that will contain up to 4 things
// spots one and 2, the first clicked cat li and the index within the node link
// spots 3 and 4, the second clicked cat li and the index within the node link
// if they match, change their class to that of matched
// all matched cards will stay face up
// either way clear the array of 4
// if they don't match they go hidden again

export const finding = async () => {

    const cards = document.querySelectorAll('#card-deck > li')
    const bordScore = document.getElementById('score');

    let matchArray = [];
    let score = localStorage.score;
    let count = localStorage.count;

    bordScore.innerText = `Score: ${score}`;

    cards.forEach(ele => {
        ele.addEventListener('click', async (e) => {


            if(ele.classList[0] === 'matched' || ele.classList[0] === 'pending') {
                console.log('already matched, or you need to pick a different card');
                return;
            };
            ele.setAttribute('class', 'pending');

            matchArray.push(ele.children[0].src);
            matchArray.push(parseInt(ele.innerText))

            ele.children[0].style.visibility = 'visible'

            if (matchArray.length >= 4) {
                setTimeout(checkingMatches, 600);
            };
        });
    });

    const checkingMatches = async () => {
        if (matchArray[0] !== matchArray[2]) {

            const cardOne = cards[matchArray[1]].children[0];
            const cardTwo = cards[matchArray[3]].children[0]

            cardOne.style.visibility = 'hidden';
            cardTwo.style.visibility = 'hidden';

            cards[matchArray[1]].setAttribute('class', 'un-matched');
            cards[matchArray[3]].setAttribute('class', 'un-matched');
            matchArray.splice(0, matchArray.length);

            score--;
            bordScore.innerText = `Score: ${score}`;
            localStorage.score = parseInt(score);

        } else if (matchArray[0] === matchArray[2]) {
            cards[matchArray[1]].setAttribute('class', 'matched');
            cards[matchArray[3]].setAttribute('class', 'matched');

            score++;
            count++;

            bordScore.innerText = `Score: ${score}`;
            localStorage.score = parseInt(score);
            localStorage.count = parseInt(count);

            const cats = JSON.parse(localStorage.cats);
            cats[matchArray[1]].class = 'matched';
            cats[matchArray[3]].class = 'matched';
            localStorage.cats = JSON.stringify(cats);

            matchArray.splice(0, matchArray.length);

            if (count >= 6) {
                if (score > 0) {
                    bordScore.innerText = `You Win! With a score of: ${score}`;
                } else if (score === 0) {
                    bordScore.innerText = `It's a tie! Finished with a score of: ${score}`;
                } else {
                    bordScore.innerText = `Better luck next time. You had a score of: ${score}`;
                };
                count = 0;
                localStorage.setItem('count', 0);
            };
        };
    };
};







// edge cases, clicking on a picture again is now adding it to the array.  and adjusting the score.


/*
switch(listItem.dataset.type) {
            case "drinks":
                listItem.style.backgroundColor = "gold";
                break;
            case "bakery":
                listItem.style.backgroundColor = "lightbrown";
                break;
etc...
*/
