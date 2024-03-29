document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
      const accordionContent = button.nextElementSibling;
      
      button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
      
      if (button.getAttribute('aria-expanded') === 'true') {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = 0;
      }
    });
  });
  