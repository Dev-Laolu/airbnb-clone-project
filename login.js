// Login form handler (static credentials)

document.addEventListener("DOMContentLoaded", () => {
  // index.html uses id="login-form"
  const form = document.getElementById("login-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  // guard: if form is not present, don't attach handlers
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Admin credentials
    const adminEmail = ["olayinkahopewell@gmail.com", "admin@admin.com"];
    const adminPassword = "admin1234";
    const userPassword = "user1234";

    // Check credentials

    // check admin
    if (adminEmail.includes(email) && password === adminPassword) {
      alert("Login successful! Redirecting to home page...");
      window.location.href = "index.html";
      return;
    }

    // special case for the first admin email with user password
    if (email === adminEmail[0] && password === userPassword) {
      alert("Welcome back Mr Hopewell");
      window.location.href = "index.html";
      return;
    }

    alert("Invalid email or password. Please try again.");
  });

    // Allow pressing Enter key to submit form (if inputs exist)
  [emailInput, passwordInput].filter(Boolean).forEach((input) => {
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        form.requestSubmit ? form.requestSubmit() : form.dispatchEvent(new Event("submit", { cancelable: true }));
      }
    });
  });
});
