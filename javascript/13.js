form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submission started");

  const formData = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim(),
    event: form.elements.event.value,
  };
  console.log("Form data:", formData);

  fakeFetch("https://mockapi.example.com/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      console.log("Fetch response received:", response);
      if (response.status === 200) {
        console.log("Registration succeeded");
        messageDiv.textContent = "Registration successful!";
        messageDiv.className = "success";
        form.reset();
      } else {
        console.error("Server responded with error status");
        throw new Error("Server error");
      }
    })
    .catch((error) => {
      console.error("Fetch failed:", error);
      messageDiv.textContent = "Registration failed. Please try again.";
      messageDiv.className = "error";
    });
});
