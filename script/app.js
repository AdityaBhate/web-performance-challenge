// Minimal app.js - no layout shifts, no performance bottlenecks
const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****";

// Optimized dynamic content loading
const loadDynamicContent = () => {
  // Load breaking news content
  const newsTicker = document.querySelector('.news-ticker');
  if (newsTicker) {
    newsTicker.textContent = CONTENT_BREAKING_NEWS;
  }
};

// Handle form submission
const initForm = () => {
  const form = document.getElementById('lighthouse-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted successfully!');
    });
  }
};

// Initialize app efficiently
const initApp = () => {
  // Initialize form immediately
  initForm();

  // Load non-critical content
  if ('requestIdleCallback' in window) {
    requestIdleCallback(loadDynamicContent);
  } else {
    setTimeout(loadDynamicContent, 1);
  }
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}