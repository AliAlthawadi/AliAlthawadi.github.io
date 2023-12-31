// Get the form element
const form = document.getElementById('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  // Validate each input field
  const firstName = document.getElementById('fName').value.trim();
  const lastName = document.getElementById('lName').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // Reset error messages
  const errorElements = document.querySelectorAll('.inputBox + #error');
  errorElements.forEach(function(errorElement) {
    errorElement.textContent = '';
  });

  // Validate first name
  if (firstName.length < 3) {
    showError('fName', 'First name should have at least 3 characters');
    event.preventDefault(); // Prevent form submission
  }

  // Validate last name
  if (lastName.length < 3) {
    showError('lName', 'Last name should have at least 3 characters');
    event.preventDefault(); // Prevent form submission
  }

  // Validate email
  if (email === '') {
    showError('email', 'Email is required');
    event.preventDefault(); // Prevent form submission
  } else if (!isValidEmail(email)) {
    showError('email', 'Please enter a valid email address');
    event.preventDefault(); // Prevent form submission
  }

  // Validate phone number
  if (phone.length !== 8) {
    showError('phone', 'Mobile No must contain exactly 8 digits');
    event.preventDefault(); // Prevent form submission
  }
});

// Function to display error message
function showError(fieldId, errorMessage) {
  const errorElement = document.getElementById(fieldId).parentNode.nextElementSibling;
  errorElement.textContent = errorMessage;
}

// Function to validate email address
function isValidEmail(email) {
  // Regular expression for email validation
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailPattern.test(email);
}