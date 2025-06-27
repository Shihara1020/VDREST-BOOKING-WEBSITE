document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
        
        // Animate Links
        navLinksItems.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
    
    // Close mobile menu when clicking on a link
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
            navLinksItems.forEach(link => {
                link.style.animation = '';
            });
        });
    });
    
    // Change navbar style on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Initialize Hero Slider
    const heroSwiper = new Swiper('.hero-slider', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    // Initialize Testimonial Slider
    const testimonialSwiper = new Swiper('.testimonial-slider', {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Enhanced Booking Form Submission
    const bookingForm = document.getElementById('bookingForm');
    const bookingModal = document.getElementById('bookingModal');
    const closeModal = document.querySelector('.close-modal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Get form data
            const templateParams = {
                to_name: 'VD Rest Hotel',
                name: this.fullName.value,
                email: this.email.value,
                phone: this.phone.value,
                roomType: this.roomType.value,
                adults: this.adults.value,
                children: this.children.value,
                checkIn: this.checkIn.value,
                checkOut: this.checkOut.value,
                country: this.country.value,
                specialRequests: this.specialRequests.value || 'None'
            };
            
            // Send email using EmailJS
            emailjs.send('service_rgz1q29', 'template_pgkcr44', templateParams)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    
                    // Show success modal if it exists
                    if (bookingModal) {
                        bookingModal.style.display = 'flex';
                    } else {
                        alert('Thank you for your booking request! We will contact you shortly to confirm your reservation.');
                    }
                    
                    // Reset form
                    bookingForm.reset();
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                })
                .catch(function(error) {
                    console.error('EmailJS Error:', error);
                    
                    // Show user-friendly error message
                    alert('Failed to send booking request. Please try again later or contact us directly.');
                    
                    // Reset button
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                });
        });
    }
    
    // Close modal if elements exist
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            bookingModal.style.display = 'none';
        });
    }
    
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', function() {
            bookingModal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    if (bookingModal) {
        window.addEventListener('click', function(e) {
            if (e.target === bookingModal) {
                bookingModal.style.display = 'none';
            }
        });
    }
    
    // Set minimum date for check-in (today)
    const today = new Date().toISOString().split('T')[0];
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    
    if (checkInInput) {
        checkInInput.min = today;
        
        // Update check-out min date when check-in date changes
        checkInInput.addEventListener('change', function() {
            if (checkOutInput) {
                checkOutInput.min = this.value;
            }
        });
    }
    
    // Initialize check-out min date if check-in is already set
    if (checkInInput && checkInInput.value && checkOutInput) {
        checkOutInput.min = checkInInput.value;
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter your email address');
            }
        });
    }
    
    // Current year for footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Room gallery lightbox (would need lightbox library in real implementation)
    // const galleryItems = document.querySelectorAll('.gallery-expand');
    // galleryItems.forEach(item => {
    //     item.addEventListener('click', function(e) {
    //         e.preventDefault();
    //     });
    // });
    
    // View Details button for rooms
    // const viewDetailsBtns = document.querySelectorAll('.btn-view');
    // viewDetailsBtns.forEach(btn => {
    //     btn.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         // In a real implementation, this would show more details about the room
    //         alert('In a real implementation, this would show more details about the room.');
    //     });
    // });
    
    // Add animation to nav links on page load
    navLinksItems.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
});

// Add CSS for navLinkFade animation
const style = document.createElement('style');
style.textContent = `
    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;
document.head.appendChild(style);