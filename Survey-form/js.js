const submitForm = document.getElementById('submitForm')

submitForm.addEventListener('submit', function(event) {
event.preventDefault();
const yourName = document.getElementById('name').value 
const yourEmail = document.getElementById('email').value 
console.log(yourName)
console.log(yourEmail)
})