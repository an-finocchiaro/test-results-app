function tokenSearch() {
  const inputToken = document.getElementById('input-token');
  const token = inputToken.value;
  const button = document.getElementById('send-token')
  
  button.addEventListener('submit', function(event) {
    event.preventDefault();
    
    fetch(`http://localhost:4000/tests/${token}`, {
      method: "GET",
    })
    .then((res) => res.json('ok'))
    .catch(err => console.log(err))
  });
  let tokenLink = token.
  location.replace(`http://localhost:4000/tests/${token}`)
}