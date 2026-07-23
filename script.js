// ===== SIMPLE PROTOTYPE AUTH =====

const form = document.getElementById("auth-form");
const errorBox = document.getElementById("auth-error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  if (!email || !password) {
    errorBox.textContent = "Please fill out all fields.";
    return;
  }

  // Save user (prototype only)
  localStorage.setItem("biosenseUser", email);
  localStorage.setItem("biosenseAuth", "true");

  window.location.href = "home.html";
});

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem("biosenseAuth");
  window.location.href = "index.html";
}

// ===== PROTECT HOME PAGE =====
if (window.location.pathname.includes("home.html")) {
  const auth = localStorage.getItem("biosenseAuth");
  if (!auth) {
    window.location.href = "index.html";
  }
}

// ===== FAKE LIVE DATA =====
function updateDashboard() {
  const hr = 65 + Math.floor(Math.random() * 15);
  const stress = 20 + Math.floor(Math.random() * 40);
  const sleep = 70 + Math.floor(Math.random() * 20);

  document.getElementById("dash-hr").textContent = hr + " bpm";
  document.getElementById("dash-stress").textContent = stress + "%";
  document.getElementById("dash-sleep").textContent = sleep;
}

setInterval(updateDashboard, 3000);
