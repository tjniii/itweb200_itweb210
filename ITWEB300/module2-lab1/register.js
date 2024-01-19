function checkForm() {
   // Reset form errors and remove error class from all input elements
   const formErrors = document.getElementById("formErrors");
   const inputs = document.querySelectorAll("input");
   formErrors.classList.add("hide");
   inputs.forEach(input => input.classList.remove("error"));
 
   // Form validation checks
   const fullName = document.getElementById("fullName").value.trim();
   const email = document.getElementById("email").value.trim();
   const password = document.getElementById("password").value;
   const confirmPassword = document.getElementById("confirmPassword").value;
 
   const errors = [];
 
   // Check full name
   if (fullName.length === 0) {
     errors.push("Missing full name.");
     document.getElementById("fullName").classList.add("error");
   }
 
   // Check email
   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
   if (!email.match(emailRegex)) {
     errors.push("Invalid or missing email address.");
     document.getElementById("email").classList.add("error");
   }
 
   // Check password length
   if (password.length < 10 || password.length > 20) {
     errors.push("Password must be between 10 and 20 characters.");
     document.getElementById("password").classList.add("error");
   }
 
   // Check lowercase character in password
   if (!/[a-z]/.test(password)) {
     errors.push("Password must contain at least one lowercase character.");
     document.getElementById("password").classList.add("error");
   }
 
   // Check uppercase character in password
   if (!/[A-Z]/.test(password)) {
     errors.push("Password must contain at least one uppercase character.");
     document.getElementById("password").classList.add("error");
   }
 
   // Check digit in password
   if (!/\d/.test(password)) {
     errors.push("Password must contain at least one digit.");
     document.getElementById("password").classList.add("error");
   }
 
   // Check password match
   if (password !== confirmPassword) {
     errors.push("Password and confirmation password don't match.");
     document.getElementById("password").classList.add("error");
     document.getElementById("confirmPassword").classList.add("error");
   }
 
   // Display errors if any
   if (errors.length > 0) {
     formErrors.classList.remove("hide");
     const errorsList = document.getElementById("errorsList");
     errorsList.innerHTML = errors.map(error => `<li>${error}</li>`).join("");
   }
 }
 
 document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();
 
   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
 });
 