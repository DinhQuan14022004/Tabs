const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    const tabId = tab.getAttribute('aria-label');
    tab.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});
