document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.querySelector('.comments .add-button');

  function setCommentsTitle() {
    const commentsTitle = document.querySelector('.comments h2');
    const comments = document.querySelectorAll('.comments .comment-container');
    if (commentsTitle) {
      commentsTitle.textContent = `${comments.length} comentario${comments.length === 1 ? '' : 's'}`;
    }
  }
  
  function initializeComments() {
    const comments = document.querySelectorAll('.comments .comment-container');
    comments.forEach(function(comment) {
      comment.children[0].innerHTML = new Date().toLocaleString();
    })
    setCommentsTitle();
  }

  function addComment() {
    const inputBody = document.querySelector('.comments textarea');
    if (!inputBody.value) return;

    const commentsSection = document.querySelector('.comments');
    const newComment = document.createElement('div');
    const newCommentTimestamp = document.createElement('div');
    const newCommentBody = document.createElement('div');
    newComment.setAttribute('class', 'comment-container');
    newCommentTimestamp.setAttribute('class', 'comment-timestamp');
    newCommentBody.setAttribute('class', 'comment-body');

    newCommentTimestamp.innerHTML = new Date().toLocaleString();
    newCommentBody.innerHTML = inputBody.value;

    newComment.appendChild(newCommentTimestamp);
    newComment.appendChild(newCommentBody);
    
    commentsSection.appendChild(newComment);
    inputBody.value = '';
    setCommentsTitle();
  }

  if (addButton) {
    addButton.addEventListener('click', addComment);
  }
  
  initializeComments();
});
