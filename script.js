// Get references to the login and signup forms and buttons
const loginForm = document.querySelector('form');
const signupForm = document.querySelector('#signup-form');
const loginBtn = document.querySelector('.login-btn');
const signupBtn = document.querySelector('#signup-btn');
const title = document.querySelector('h1');
const loader = document.querySelector('.loader');

// Attach a click event listener to the login button
loginBtn.addEventListener('click', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the entered username and password values
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Check if the password meets the requirements
  const passwordRequirements = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    alert(passwordRequirements);
    return;
  }

  // Check if the username and password are correct
  if (username === 'admin' && password === 'admin') {
    // Redirect to the landing page 
    // Show the loader
    loader.style.display = 'block';
    window.location.href = 'landingPage.html';
  } else {
    // Display an error message
    alert('Incorrect username or password');
  }

  // Hide the loader after a 2-second delay
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2000);
});

// Attach a click event listener to the signup button
signupBtn.addEventListener('click', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Change the title to "Sign up"
  title.textContent = 'Sign up';

  // Hide the login form and display the signup form
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});

// Attach a submit event listener to the signup form
signupForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Show the loader
  

  // Get the entered new username and password values
  const newUsername = document.querySelector('#new-username').value;
  const newPassword = document.querySelector('#new-password').value;

  // Check if the password meets the requirements
  const passwordRequirements = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(newPassword)) {
    alert(passwordRequirements);
    return;
  }

  // Do something with the new username and password (e.g. store them in a database)

  // Display a success message
  alert('Successfully signed up!');

  // Clear the form and hide it
  signupForm.reset();
  signupForm.style.display = 'none';

  // Change the title back to "Login"
  title.textContent = 'Login';

  // Display the login form
  loginForm.style.display = 'block';

  // Hide the loader after a 2-second delay
  setTimeout(() => {
    loader.style.display = 'none';
  },  2000);

});
