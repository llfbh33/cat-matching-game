export const createContainers = async () => {
    // header
    const header = document.createElement('div');
    header.setAttribute('id', 'header-container')
    document.body.appendChild(header);

    const pageTitle = document.createElement('h1');
    pageTitle.innerText = 'Match That Cat!';
    header.appendChild(pageTitle);

    // Main Content Container
    const mainContainer = document.createElement('div');
    mainContainer.setAttribute('id', 'main-container')
    document.body.appendChild(mainContainer);

    // Game Content
    const gameBord = document.createElement('section');
    gameBord.setAttribute('id', 'game-bord')

    const cardDeck = document.createElement('ul');
    cardDeck.setAttribute('id', 'card-deck')

    gameBord.appendChild(cardDeck);
    mainContainer.appendChild(gameBord);

    // Score Count and New Game Button
    const scoreGameBtn = document.createElement('div');
    scoreGameBtn.setAttribute('id', 'score-game-container')
    mainContainer.appendChild(scoreGameBtn)

    const score = document.createElement('div')
    score.setAttribute('id', 'score')
    scoreGameBtn.appendChild(score)

    const newGame = document.createElement('button');
    newGame.innerText = 'New Game'
    newGame.setAttribute('id', 'new-game-btn')
    scoreGameBtn.appendChild(newGame);

    const ratingContainer = document.createElement('div');
    ratingContainer.setAttribute('id', 'rating-container');
    mainContainer.appendChild(ratingContainer);

    const thankYouContainer = document.createElement('div');
    thankYouContainer.setAttribute('id', 'thank-you-container');
    mainContainer.appendChild(thankYouContainer)

    const thankYou = document.createElement('span');
    thankYou.setAttribute('id', 'thank-you');
    thankYouContainer.appendChild(thankYou)


    const likedBtn = document.createElement('button');
    likedBtn.setAttribute('id', 'liked-btn');
    likedBtn.innerText = 'Yes';

    const dislikedBtn = document.createElement('button');
    dislikedBtn.setAttribute('id', 'disliked-btn');
    dislikedBtn.innerText = 'No';

    const enjoyPlaying = document.createElement('span');
    enjoyPlaying.setAttribute('id', 'enjoy-playing');
    enjoyPlaying.innerText = 'Did you enjoy playing?'

    ratingContainer.append(likedBtn, enjoyPlaying, dislikedBtn);

    const commentContainer = document.createElement('div');
    commentContainer.setAttribute('id', 'main-comment-container');
    mainContainer.appendChild(commentContainer)

    const commentSectionContainer = document.createElement('div');
    commentSectionContainer.setAttribute('id', 'comment-sec-container')
    commentContainer.appendChild(commentSectionContainer)

    const commentInput = document.createElement('TEXTAREA');
    commentInput.setAttribute('id', 'comment-input')
    commentInput.placeholder = 'What are your thoughts on this game?'
    commentSectionContainer.appendChild(commentInput);

    const commentBtn = document.createElement('button');
    commentBtn.setAttribute('id', 'comment-btn');
    commentBtn.innerText = 'Comment';
    commentSectionContainer.appendChild(commentBtn);

    const commentList = document.createElement('ul');
    commentList.setAttribute('id', 'comment-list');
    commentContainer.appendChild(commentList)

}
