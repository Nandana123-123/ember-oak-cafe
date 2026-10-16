
/* ---------- 1. Mobile navigation ---------- */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});


/* ---------- 2. Menu filters ---------- */

const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    // Update the selected button
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
      btn.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    // Show only matching menu items
    menuCards.forEach((card) => {
      const category = card.dataset.category;

      if (
        selectedCategory === "all" ||
        category === selectedCategory
      ) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });
  });
});


/* ---------- 3. Automatic copyright year ---------- */

const yearElement = document.querySelector("#year");

yearElement.textContent = new Date().getFullYear();


/* ---------- 4. Contact form demo ---------- */

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  const name = document.querySelector("#name").value.trim();

  formStatus.textContent =
    `Thank you, ${name}! This is a demo form. No message has been sent yet.`;

  formStatus.style.color = "#705032";

  contactForm.reset();
});
