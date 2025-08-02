const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector("input[placeholder='Full Name']").value.trim();
    const email = form.querySelector("input[placeholder='Email']").value.trim();
    const password = form.querySelector("input[placeholder='Password']").value;
    const confirmPassword = form.querySelector("input[placeholder='Confirm Password']").value;

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

     const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));

    window.location.href = "login.html";
  });