(() => {
  const modal = document.getElementById('payment-modal');
  const selectedPlan = document.getElementById('selected-plan');
  const close = () => { modal.hidden = true; document.body.style.overflow = ''; };
  document.querySelectorAll('[data-plan]').forEach(button => {
    button.addEventListener('click', () => {
      selectedPlan.textContent = button.dataset.plan;
      document.getElementById('demo-status').hidden = true;
      document.getElementById('confirm-demo').hidden = false;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      document.getElementById('close-modal').focus();
    });
  });
  document.getElementById('close-modal').addEventListener('click', close);
  modal.addEventListener('click', event => { if (event.target === modal) close(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) close(); });
  document.getElementById('confirm-demo').addEventListener('click', () => {
    document.getElementById('demo-status').hidden = false;
    document.getElementById('confirm-demo').hidden = true;
  });
})();