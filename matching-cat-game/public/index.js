import { createContainers } from "./utilities/containers.js";
import { findCats, removeCats } from "./utilities/actions.js";
import { comment } from "./utilities/comments.js";
import { implementCatStorage } from "./utilities/stored-cats.js";
import { rating, ratingBad } from "./utilities/rating.js";


window.onload = async () => {
    await createContainers();

    if (!localStorage.cats) {
        localStorage.setItem('cats', JSON.stringify([]));
        await findCats();
    } else {
        const storedCats = JSON.parse(localStorage.cats)
        await implementCatStorage(storedCats);
    };

    if (!localStorage.comments) {
        localStorage.setItem('comments', JSON.stringify([]));
    } else {
        const comments = JSON.parse(localStorage.comments);
        await comments.forEach(ele => comment(ele));
        localStorage.comments = JSON.stringify(comments)
    };

    const score = document.getElementById('score');
    if (!localStorage.score) {
        localStorage.setItem('score', 0);
        localStorage.setItem('count', 0);
    } else {
        score.innerText = `Current score of: ${localStorage.score}`
    };

    if(!localStorage.rating) {
        localStorage.setItem('rating', 0);
    };

    const newGameBtn = document.getElementById('new-game-btn');
    newGameBtn.addEventListener('click', async (e) => {await removeCats()});

    const commentBtn = document.getElementById('comment-btn');
    commentBtn.addEventListener('click', async (e) => {comment()});

    const likedBtn = document.getElementById('liked-btn');
    likedBtn.addEventListener('click', async (e) => {rating()});

    const dislikedBtn = document.getElementById('disliked-btn');
    dislikedBtn.addEventListener('click', async (e) => {ratingBad()});
}
