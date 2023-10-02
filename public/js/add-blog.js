// const postButton = document.getElementById('postButton');

function toggleClasses() {
  const blogdetails = document.getElementById('userBlogs');
  const blogform = document.getElementById('newUserBlogs');
  const postButton = document.getElementById('postButton');
  blogdetails.classList.add('addClass');
  postButton.classList.add('addClass');
  blogdetails.classList.remove('removeClass');
  blogform.classList.remove('addClass');
  blogform.classList.add('removeClass');
}

document.getElementById('postButton').addEventListener('click', toggleClasses);
