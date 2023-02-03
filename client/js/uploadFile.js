const form = document.getElementById('form')

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const uploadElement = document.getElementById('file');
  const file = uploadElement.files[0];
  const data = new FormData();
  data.append("file", file)

  fetch('http://localhost:4000/uploads', {
    method: "POST",
    body: data,
  })
  .then((res) => res.json())
  .catch(err => console.log(err))
});
