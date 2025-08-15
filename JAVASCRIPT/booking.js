const carSelect = document.getElementById("carSelect");
const totalPrice = document.getElementById("totalPrice");
const totalCost = document.getElementById("cost");
const payButton = document.getElementsByClassName("pay")[0];

carSelect.addEventListener("change", myprice);

function myprice() {
  const price = Number(carSelect.value);
  if (!price) {
    totalPrice.textContent = "$0";
    totalCost.textContent = "$0";
    payButton.textContent = "Pay $0";
    return 0;
  }
  const formatted = "$" + price.toLocaleString();
  totalPrice.textContent = formatted;
  totalCost.textContent = formatted;
  payButton.textContent = `Pay ${formatted}`;
}

function validateAndPay() {
  const fields = [
    "full-name",
    "phone",
    "email",
    "card",
    "exp",
    "cvc",
    "name-on-card",
    "carSelect",
  ];
  for (let id of fields) {
    if (!document.getElementById(id).value.trim()) {
      alert("Please fill in all fields and select a car before payment.");
      return;
    }
  }
  if (confirm("Do you want to proceed with payment?")) {
    document.getElementById("pay").textContent = "✅ Payment confirmed!";
  } else {
    document.getElementById("pay").textContent = "❌ Payment cancelled.";
  }
}

function generateBrochure() {
  const selected = carSelect.options[carSelect.selectedIndex];
  if (!carSelect.value) {
    alert("Please select a car first.");
    return;
  }
  const carName = selected.text;
  const carPrice = "$" + Number(carSelect.value).toLocaleString();
  const imageName = carName + ".jpg";
  const win = window.open("", "_blank", "width=800,height=600");
  console.log(carName);
  win.document.write(`
        <html>
        <head><title>${carName} Brochure</title>
          <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 30px; }
            h1 { color: #333; }
            img { width: 80%; max-height: 400px; margin: 20px 0; border-radius: 10px; }
            .price { font-size: 24px; font-weight: bold; color: #405ff2; margin-bottom: 30px; }
            button { padding: 10px 20px; font-size: 16px; border: none; background-color: #405ff2; color: white; border-radius: 8px; cursor: pointer; }
            button:hover { background-color: #2c4db3; }
          </style>
        </head>
        <body>
          <h1>${carName}</h1>
          <img src="../images/${imageName}" alt="${carName}" onerror="this.style.display='none'" />
          <div class="price">Price: ${carPrice}</div>
          <button onclick="window.print()">Print Brochure</button>
        </body>
        </html>
      `);
}

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
