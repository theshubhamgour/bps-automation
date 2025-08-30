// Run after page loads
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('testButton');
  const out = document.getElementById('output');

  if (btn && out) {
    btn.addEventListener('click', () => {
      out.textContent = "JS is working ✅ — " + new Date().toLocaleString();
    });
  }

  // Update footer year
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});

