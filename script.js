const usernameInput = document.querySelector('#username')
const emailInput = document.querySelector('#email')
const passwordInput = document.querySelector('#password')
const passwordcheckInput = document.querySelector('#password-check')
const form = document.querySelector('#button')


form.addEventListener('click', (e) => {
	e.preventDefault();
	checkInput();
})

const checkInput = () => {
	const usernameValue = usernameInput.value.trim()
	const emailValue = emailInput.value.trim()
	const passwordValue = passwordInput.value.trim()
	const passwordcheckValue = passwordcheckInput.value.trim()
	const fourthDiv = document.querySelector('#password-check-error')
	const secondDiv = document.querySelector('#email-error')
	const thirdDiv = document.querySelector('#password-error')

	if (usernameValue === '') {
    setErrorFor(usernameInput)
	} else {
     setSuccessFor(usernameInput)
	}
	if (emailValue === '') {
    setErrorFor(emailInput)
	} else {
     setSuccessFor(emailInput)
	}
	if (validateEmail(emailValue)) {
		setSuccessFor(emailInput)
	} else {
		secondDiv.innerHTML = '<p class="error-para">Email is not valid<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>'
		emailInput.classList.add('error')
	}
	if (passwordValue === '') {
    setErrorFor(passwordInput)
	} else if (passwordValue.length < 8) {
			thirdDiv.innerHTML = '<p class="error-para">Password must be 8 character<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>'
			passwordInput.classList.add('error')
		
	} else {
     setSuccessFor(passwordInput)
	}
	if (passwordcheckValue === '') {
    setErrorFor(passwordcheckInput)
	}else if (passwordValue !== passwordcheckValue) {
		fourthDiv.innerHTML = '<p class="error-para">Pasword does not match<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>';
		passwordcheckInput.classList.add('error');
	} else {
     setSuccessFor(passwordcheckInput)
	}
     
}


const setErrorFor = input => {
	const firstDiv = document.querySelector('#username-error')
	const secondDiv = document.querySelector('#email-error')
	const thirdDiv = document.querySelector('#password-error')
	const fourthDiv = document.querySelector('#password-check-error')

	if (input === usernameInput){
		firstDiv.innerHTML = '<p class="error-para">Username cannot be blank<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>'
		usernameInput.classList.add('error')
	} else if (input === emailInput){
        secondDiv.innerHTML = '<p class="error-para">Email cannot be blank<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>'
        emailInput.classList.add('error')
	} else if (input === passwordInput){
        thirdDiv.innerHTML = '<p class="error-para">Password cannot be blank<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>'
        passwordInput.classList.add('error')
	} else if (input === passwordcheckInput){
        fourthDiv.innerHTML = '<p class="error-para">Password Check cannot be blank<p><i class="fa fa-exclamation-circle" aria-hidden="true"></i>'
        passwordcheckInput.classList.add('error')
	} 
}

const setSuccessFor = input => {
	const firstDiv = document.querySelector('#username-error')
	const secondDiv = document.querySelector('#email-error')
	const thirdDiv = document.querySelector('#password-error')
	const fourthDiv = document.querySelector('#password-check-error')

	if (input === usernameInput){
		firstDiv.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
		usernameInput.classList.add('success')
	} else if (input === emailInput){
        secondDiv.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
        emailInput.classList.add('success')
	} else if (input === passwordInput){
        thirdDiv.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
        passwordInput.classList.add('success')
	} else if (input === passwordcheckInput){
        fourthDiv.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>'
        passwordcheckInput.classList.add('success')
	} 
}

function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }