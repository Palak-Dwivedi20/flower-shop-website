
document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("login-btn");
  const logoutBtn = document.getElementById("logout-btn");
  const userIcon = document.getElementById("user-icon");

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (isLoggedIn) {
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
    userIcon.style.display = "inline-block";
  } else {
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
    userIcon.style.display = "none";
  }

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "login.html";
  });

  
  const form = document.querySelector(".contact-form");
  const button = form.querySelector("button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'Please fill out all required fields properly.',
        confirmButtonColor: '#ff3e6c'
      });
      return;
    }

    button.innerText = "Sending...";
    button.disabled = true;
    
    setTimeout(() => {
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thanks for contacting us. We will get back to you soon.',
        confirmButtonColor: '#ff3e6c',
        customClass: {
          popup: 'contact-popup'
        }
      });

      form.reset();
      button.innerText = "Send Message";
      button.disabled = false;
    }, 1500);
  });
});

