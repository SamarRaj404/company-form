document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("form-login");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

  });
});


