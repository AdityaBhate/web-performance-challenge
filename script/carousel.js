// Simplified carousel - only initialize if Swiper is loaded
if (typeof Swiper !== 'undefined') {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: false,
    centeredSlides: true,
    // Removed autoplay for better performance
    lazy: false,
  });
}