// Optimized app.js - removed performance bottlenecks
const CONTENT_BREAKING_NEWS = "BREAKING NEWS: 5 people arrested for non designing responsively ***** Sprite popularity drops even further after new, less sugary, drink introduction.*****";

// Simple cookie layer without Vue.js
const initCookieLayer = () => {
  const cookieVue = document.getElementById('cookie-vue');
  if (!cookieVue) return;

  // Create cookie layer HTML
  cookieVue.innerHTML = `
    <div class="cookieLayer__base">
      <div class="cookieLayer__content">
        <h2 class="cookieLayer__title">Do you like cookies?</h2>
        <p class="cookieLayer__text">This is the best chocolate chip cookies recipe ever! No funny ingredients, no chilling time, etc. Just a simple, straightforward, amazingly delicious, doughy yet still fully cooked, chocolate chip cookie that turns out perfectly every single time!</p>
        <p class="cookieLayer__text">The first step in making these easy chocolate chip cookies to to combine the dry ingredients in a medium size bowl. Next, cream together butter and sugars. Add the eggs & vanilla and beat to combine. Add dry ingredients and stir until just combined. Then add the chocolate chips and beat until they are evenly distributed throughout the dough.</p>
        <button class="cookieLayer__button" id="accept-cookies">I solemnly swear I will bake these cookies</button>
        <div class="cookieLayer__disclaimer">Simple, optimized cookie consent</div>
      </div>
    </div>
  `;

  document.body.classList.add('no-scroll');

  // Add event listener
  const acceptButton = document.getElementById('accept-cookies');
  if (acceptButton) {
    acceptButton.addEventListener('click', () => {
      const cookieLayer = document.querySelector('.cookieLayer__base');
      if (cookieLayer) {
        cookieLayer.classList.add('cookieLayer__base--accepted');
      }
      document.body.classList.remove('no-scroll');
    });
  }
};

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
  // Use requestIdleCallback for non-critical work
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      initCookieLayer();
      loadDynamicContent();
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      initCookieLayer();
      loadDynamicContent();
    }, 1);
  }

  // Initialize form immediately as it's user-interactive
  initForm();
};

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}