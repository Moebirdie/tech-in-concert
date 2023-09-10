async function newFormHandler(event) {
  event.preventDefault();

  //const user_id = document.querySelector('#').value;
  const user_id = '1';
  const comment_text = document.querySelector('#commentText').value;
  const blog_id = 2;
  console.log(comment_text, user_id, blog_id)

  const response = await fetch(`/api/comment`, {
    method: 'POST',
    body: JSON.stringify({
      comment_text,
      user_id,
      blog_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to add comment');
  }
}

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newFormHandler);
