async function newPostHandler(event) {
  event.preventDefault();

  //const user_id = document.querySelector('#').value;
  const user_id = 1;
  const title = document.querySelector('#blogTitle').value;
  const bodyText = document.querySelector('#blogText').value;
  const summaryText = 'some summary text';
  console.log(title, user_id, bodyText)

  const response = await fetch(`/api/blog`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      summaryText,
      bodyText,
      user_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert('Failed to add blog');
  }
}

document
  .getElementById('newPost')
  .addEventListener('click', newPostHandler);
