document.getElementById('hoa-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Normally you’d send this to a backend or Formspree
  // Simulate successful submission
  this.reset();
  document.getElementById('message').classList.remove('hidden');
});
