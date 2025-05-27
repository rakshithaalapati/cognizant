const form = document.getElementById("registration-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  clearErrors();

  const { name, email, event: selectedEvent } = form.elements;

  let isValid = true;

  if (!name.value.trim()) {
    showError("error-name", "Name is required");
    isValid = false;
  }

  if (!email.value.trim()) {
    showError("error-email", "Email is required");
    isValid = false;
  } else if (!validateEmail(email.value.trim())) {
    showError("error-email", "Invalid email format");
    isValid = false;
  }

  if (!selectedEvent.value) {
    showError("error-event", "Please select an event");
    isValid = false;
  }

  if (isValid) {
    alert(
      `Thank you, ${name.value.trim()}, for registering for ${
        selectedEvent.value
      }!`
    );
    form.reset();
  }
});

function showError(id, message) {
  const errorSpan = document.getElementById(id);
  errorSpan.textContent = message;
}

function clearErrors() {
  ["error-name", "error-email", "error-event"].forEach((id) => {
    document.getElementById(id).textContent = "";
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
