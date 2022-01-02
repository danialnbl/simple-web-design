//getting all atribute
const form = document.getElementById('form')
const email = document.getElementById('email')
const namevalidation = document.getElementById('namevalidation')
const gametitle = document.getElementById('gametitle')
const gamecreator = document.getElementById('gamecreator')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$|^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
  //const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;//

  if (gametitle.value.length <= 2) {
    messages.push('Game title must be longer than 2 characters')
  }

  if (gamecreator.value.length <= 2) {
    messages.push('Game creator name must be longer than 2 characters')
  }

  if (namevalidation.value.length <= 2) {
    messages.push('Name must be longer than 2 characters')
    
  }

  if (namevalidation.value.length >= 20) {
    messages.push('Name must be less than 20 characters')
  }

  if (regex.test(email.value) /*|| regexo.test(email.value)*/){
    
  }
  else{
    messages.push('Your email is invalid')
  }

  if (messages.length > 0) {
    alert("There is something wrong with your details!")
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})