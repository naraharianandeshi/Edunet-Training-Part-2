// ===== PERSONAL BLOG JAVASCRIPT ===== 

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
      });
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handler for contact form
  const contactForm = document.querySelector('form[name="contact"]');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      // Form will be handled by Formspree
      // You can add additional client-side validation here if needed
      console.log('Form submitted');
    });
  }

  // Scroll animation for cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and blog posts
  document.querySelectorAll('.card, .blog-post').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
  });

  // Active navigation link highlighting
  const currentLocation = location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href').split('/').pop();
    if (href === currentLocation) {
      link.style.color = '#e74c3c';
      link.style.borderBottom = '2px solid #e74c3c';
    }
  });
});

// Add scroll event listener for header effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Form validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function validatePhone(phone) {
  const re = /^[\d\s\-\+\(\)]+$/;
  return re.test(phone) && phone.length >= 10;
}

// Add form validation to contact form
const contactForm = document.querySelector('form[name="contact"]');
if (contactForm) {
  const emailInput = contactForm.querySelector('input[type="email"]');
  const phoneInput = contactForm.querySelector('input[type="phone"]');

  if (emailInput) {
    emailInput.addEventListener('blur', function() {
      if (this.value && !validateEmail(this.value)) {
        this.style.borderColor = '#e74c3c';
      } else {
        this.style.borderColor = '#bdc3c7';
      }
    });
  }

  if (phoneInput) {
    phoneInput.addEventListener('blur', function() {
      if (this.value && !validatePhone(this.value)) {
        this.style.borderColor = '#e74c3c';
      } else {
        this.style.borderColor = '#bdc3c7';
      }
    });
  }
}

// Utility function to show notifications
function showNotification(message, type = 'success') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 9999;
    animation: slideInRight 0.3s ease;
  `;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
document.head.appendChild(style);
