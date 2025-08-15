document.addEventListener("DOMContentLoaded", function () {
  function loan_calculator() {
    let price = parseFloat(document.getElementById("price").value);
    let interest =
      parseFloat(document.getElementById("interest-rate").value) / 100 / 12;
    let loan_term = parseInt(document.getElementById("loan-term").value);
    let down_payment = parseFloat(
      document.getElementById("down-payment").value
    );
    console.log("Price: ", price);
    console.log("Interest: ", interest);
    console.log("Loan Term: ", loan_term);
    console.log("Down Payment: ", down_payment);

    let numberOfPayments = loan_term * 12;
    let monthlyPayment =
      ((price - down_payment) *
        interest *
        Math.pow(1 + interest, numberOfPayments)) /
      (Math.pow(1 + interest, numberOfPayments) - 1);

    console.log("Monthly Payment: ", monthlyPayment);

    document.querySelector(".loan-output").innerHTML =
      "$" + monthlyPayment.toFixed(2) + " each month";
  }
  let button = document.getElementsByClassName("calculate-button")[0];
  if (button) {
    console.log("Button found!");
    button.onclick = loan_calculator;
  } else {
    console.log("Button not found!");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll("[slider-button]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.getAttribute("slider-button");
      const offset = direction === "next" ? 1 : -1;
      const slider = button.closest("[data-slider]");
      const slides = slider.querySelector("[data-slides]");
      const activeSlide = slides.querySelector("[data-active]");
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      if (newIndex < 0) newIndex = slides.children.length - 1;
      if (newIndex >= slides.children.length) newIndex = 0;
      activeSlide.removeAttribute("data-active");
      slides.children[newIndex].setAttribute("data-active", "");
    });
  });
});

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
