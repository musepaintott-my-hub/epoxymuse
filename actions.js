// JavaScript - Muse Epoxy Flooring

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Menu Toggle
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Interactive Cost Calculator
  const squareFeetInput = document.getElementById('squareFeet');
  const sfValueSpan = document.getElementById('sfValue');
  const finishTypeSelect = document.getElementById('finishType');
  const prepLevelSelect = document.getElementById('prepLevel');
  const totalCostElement = document.getElementById('totalCost');

  function calculateCost() {
    if (!squareFeetInput || !finishTypeSelect || !prepLevelSelect || !totalCostElement) return;

    const sqft = parseFloat(squareFeetInput.value);
    const finishRate = parseFloat(finishTypeSelect.value);
    const prepRate = parseFloat(prepLevelSelect.value);

    sfValueSpan.textContent = sqft.toLocaleString();
    
    const total = sqft * (finishRate + prepRate);
    totalCostElement.textContent = '$' + total.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }

  if (squareFeetInput) {
    squareFeetInput.addEventListener('input', calculateCost);
    finishTypeSelect.addEventListener('change', calculateCost);
    prepLevelSelect.addEventListener('change', calculateCost);
    calculateCost();
  }

  // Form submission demo
  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for requesting a quote! The Muse Epoxy team will contact you shortly.');
      quoteForm.reset();
    });
  }
  document.getElementById("nl-badge-frame")?.remove();
});
