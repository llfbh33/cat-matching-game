

export const comment = async (ele) => {

    const commentInput = document.getElementById('comment-input');
    const commentBtn = document.getElementById('comment-btn');
    const commentList = document.getElementById('comment-list');

    if (commentInput.value.length <= 0 && !ele) {
        throw new Error('no comment was provided');
    }

    const newCommentContainer = document.createElement('div');
    const newComment = document.createElement('li');
    const newDeleteBtn = document.createElement('button');
    const deleteBtns = document.querySelectorAll('.comment-delete')


    newCommentContainer.style.backgroundColor = 'rgba(228,193,152,0)'
    newComment.style.backgroundColor = 'rgba(228,193,152,0)'
    newDeleteBtn.style.backgroundColor = 'rgba(228,193,152,0)';


    newCommentContainer.style.display = 'flex';
    newCommentContainer.style.justifyContent = 'space-between'
    newCommentContainer.style.alignItems = 'center'
    newCommentContainer.style.minHeight = '40px'
    newCommentContainer.style.padding = '5px';

    newComment.style.listStyle = 'none'
    newComment.style.marginLeft = '30px'
    newComment.style.color = 'rgb(145, 31, 31)'
    newComment.style.fontWeight = '700'

    newDeleteBtn.innerText = 'Delete';
    newDeleteBtn.style.height = '30px';
    newDeleteBtn.style.border = '.5px solid rgba(161, 161, 235, 0.60)'
    newDeleteBtn.style.color = 'rgba(161, 161, 235, 0.60)';
    newDeleteBtn.style.marginRight = '35px';
    newDeleteBtn.setAttribute('class', 'comment-delete');

    // checks to make sure the input ele is a string comment before adding - if not:
    // creates a new comment
    // stores the comments into the local storage
        // parse the array to be usable
        // add the new comment to the end of the array
        // convert the array back to a string and set as the new comments value
    if (typeof ele === 'string') {
        newComment.innerText = ele;
    } else {
        newComment.innerText = commentInput.value;
        let storedComments = JSON.parse(localStorage.comments);
        storedComments.push(newComment.innerText);
        localStorage.comments = JSON.stringify(storedComments);
    }

    commentInput.value = '';
    newCommentContainer.append(newComment, newDeleteBtn);
    commentList.appendChild(newCommentContainer);

    newDeleteBtn.onmouseover = e => {
        newDeleteBtn.style.border = "2px double #D3D3D3"
        newDeleteBtn.style.color = "#F5FFFA"
        newDeleteBtn.style.cursor = "pointer"

        newDeleteBtn.addEventListener("click", e => {
            let comments = JSON.parse(localStorage.comments)
            const index = comments.indexOf(newDeleteBtn.parentElement.children[0].innerText)
            if (index !== -1) comments.splice(index, 1)
            localStorage.comments = JSON.stringify(comments)
            newDeleteBtn.parentElement.remove()
        })
    }
    newDeleteBtn.onmouseleave = e => {
        newDeleteBtn.style.color = 'rgba(161, 161, 235, 0.60)'
        newDeleteBtn.style.border = '.5px solid rgba(161, 161, 235, 0.60)'
    }

}
