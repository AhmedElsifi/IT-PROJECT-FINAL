window.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  function checkScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.9;
      if (sectionTop < triggerPoint) {
        section.classList.add("active");
      }
    });
  }
  checkScroll();
  window.addEventListener("scroll", checkScroll);
});

const pass = document.getElementById("password");
const btn = document.getElementById("btn-eye");
const icon = document.querySelector(".icon");
btn.addEventListener("click", function () {
  if (pass.type === "password") {
    pass.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    pass.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  }
});
const pass1 = document.getElementById("re-password");
const btnpass1 = document.getElementById("btn-eye1");
const icon1 = document.querySelector(".icon1");
btnpass1.addEventListener("click", function () {
  if (pass1.type === "password") {
    pass1.type = "text";
    icon1.classList.remove("fa-eye-slash");
    icon1.classList.add("fa-eye");
  } else {
    pass1.type = "password";
    icon1.classList.add("fa-eye-slash");
    icon1.classList.remove("fa-eye");
  }
});

function checkRegister(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const rePassword = document.getElementById('re-password').value;
  if (password !== rePassword) {
    alert('Passwords do not match!');
    return;
  }
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Re-entered Password:', rePassword);
  alert('Registration successful!');
  window.location.href = 'Home.html';
}
