async function editPostHandler(event) {
  event.preventDefault();

  //const user_id = document.querySelector('#').value;
  const user_id = 2;
  const title = document.querySelector('#blogTitle');
  const bodyText = document.querySelector('#blogText');
  const summaryText = 'some summary text';
  console.log(title, user_id, bodyText)

  const response = await fetch(`/api/blog`, {
    method: 'PUT',
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

async function getFormData(id) {
  const getData = await fetch(('/api/blog/2'), {
    method: 'GET',
    body: JSON.stringify({
      title,
      summaryText,
      bodyText,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Data GET failed");
    }
    return response.json();
  })
  .then(data => {
    const blogTitle = getData.title;
    const blogText = getData.bodyText;
    console.log(getData)

    document.getElementById('blogTitle').value = blogTitle;
    document.getElementById('blogContent').value = blogText;
  })
  .catch(error => {
    console.error('Error:', error)
  });
}

function toggleEditClasses() {
  const blogdetails = document.getElementById('userBlogs');
  const blogform = document.getElementById('newUserBlogs');
  const postButton = document.getElementById('postButton');
  blogdetails.classList.remove('addClass');
  postButton.classList.remove('addClass');
  blogdetails.classList.remove('removeClass');
  blogform.classList.remove('addClass');
  blogform.classList.remove('removeClass');
  editform.classList.add('addclass')
}

document.getElementById('editButton').addEventListener('click', toggleEditClasses);






document
  .getElementById('puteditPost')
  .addEventListener('click', editPostHandler);

document
  .getElementById('editBlog')
  .addEventListener('click', getFormData)

