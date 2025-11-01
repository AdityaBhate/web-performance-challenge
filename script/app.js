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

// Lazy load Vimeo video on click
const initVideoFacade = () => {
  const playBtn = document.getElementById('video-play-btn');
  const container = document.getElementById('vimeo-container');

  if (!playBtn || !container) return;

  const loadVideo = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://player.vimeo.com/video/44265326?h=1e8b36c00b&byline=0&muted=1&controls=1&autoplay=1';
    iframe.width = '640';
    iframe.height = '360';
    iframe.style.border = '0';
    iframe.allow = 'autoplay; fullscreen; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.title = 'Lighthouse demonstration video';

    container.innerHTML = '';
    container.appendChild(iframe);
  };

  playBtn.addEventListener('click', loadVideo);
  container.addEventListener('click', loadVideo);
};

// Initialize app efficiently
const initApp = () => {
  // Initialize form immediately
  initForm();

  // Initialize video facade
  initVideoFacade();

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