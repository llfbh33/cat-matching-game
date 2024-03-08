

export const rating = () => {
    const ratingContainer = document.getElementById('rating-container')
    const likedBtn = document.getElementById('liked-btn');
    const dislikedBtn = document.getElementById('disliked-btn');
    const enjoyPlaying = document.getElementById('enjoy-playing');

    const thankYouContainer = document.getElementById('thank-you-container')
    const thankYou = document.getElementById('thank-you');

    ratingContainer.style.visibility = 'hidden';
    likedBtn.style.visibility = 'hidden';
    dislikedBtn.style.visibility = 'hidden';
    enjoyPlaying.style.visibility = 'hidden';

    thankYouContainer.style.visibility = 'visible'
    thankYou.style.visibility = 'visible'

    localStorage.rating = parseInt(localStorage.rating) + 1;
    console.log(localStorage.rating)
    thankYou.innerText = `Thank you for your feedback! ${localStorage.rating} others also enjoyed this game!`
    thankYouContainer.style.left = '29%'
};

export const ratingBad = () => {
    const ratingContainer = document.getElementById('rating-container')
    const likedBtn = document.getElementById('liked-btn');
    const dislikedBtn = document.getElementById('disliked-btn');
    const enjoyPlaying = document.getElementById('enjoy-playing');

    const thankYouContainer = document.getElementById('thank-you-container')
    const thankYou = document.getElementById('thank-you');

    ratingContainer.style.visibility = 'hidden';
    likedBtn.style.visibility = 'hidden';
    dislikedBtn.style.visibility = 'hidden';
    enjoyPlaying.style.visibility = 'hidden';

    thankYouContainer.style.visibility = 'visible'
    thankYou.style.visibility = 'visible'

    localStorage.rating = parseInt(localStorage.rating) - 1;
    thankYou.innerText = `Thank you, your feedback is very important to us!`
    thankYouContainer.style.left = '33%'
}
