// Login form handler (static credentials)

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const loginBtn = document.querySelector('.login-btn');

  if (!loginForm) {
    console.debug('login.js: no #login-form found');
    return;
  }

  function validateAndRedirect(event) {
    if (event) event.preventDefault();

    const emailEl = document.getElementById('email');
    const passwordEl = document.getElementById('password');

    const email = (emailEl && emailEl.value) ? emailEl.value.trim() : '';
    const password = (passwordEl && passwordEl.value) ? passwordEl.value : '';

    const validEmail = 'admin@admin.com';
    const validPassword = 'admin';

    console.debug('login.js: attempt', { email });

    if (email === validEmail && password === validPassword) {
      // Use replace to prevent back navigation to the login page
      window.location.replace('./index.html');
      return true;
    }

    alert('Invalid email or password.');
    return false;
  }

  // Attach to form submit
  loginForm.addEventListener('submit', validateAndRedirect);

  // Also attach to button click in case submit isn't triggered by form
  if (loginBtn) {
    loginBtn.addEventListener('click', validateAndRedirect);
  } else {
    console.debug('login.js: no .login-btn found');
  }
});