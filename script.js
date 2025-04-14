// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const nav = document.querySelector('.navbar');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Sticky Navigation
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth Scrolling for all links
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

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    testimonials[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showTestimonial(index);
    });
});

// Button navigation
nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Auto-rotate testimonials
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause on hover
const slider = document.querySelector('.testimonial-slider');
slider.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

slider.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

// Booking Form
const bookingForm = document.getElementById('availability-form');
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const checkIn = document.getElementById('check-in').value;
    const checkOut = document.getElementById('check-out').value;
    const guests = document.getElementById('guests').value;
    const roomType = document.getElementById('room-type').value;
    
    // In a real application, you would send this data to your server
    // For this demo, we'll just show an alert
    alert(`Checking availability for:\n\nRoom Type: ${roomType}\nCheck-in: ${checkIn}\nCheck-out: ${checkOut}\nGuests: ${guests}\n\nThis would connect to your booking system in a real application.`);
    
    // Reset form
    bookingForm.reset();
});

// Initialize date pickers with min dates
const today = new Date().toISOString().split('T')[0];
document.getElementById('check-in').min = today;

document.getElementById('check-in').addEventListener('change', function() {
    const checkInDate = new Date(this.value);
    checkInDate.setDate(checkInDate.getDate() + 1);
    const nextDay = checkInDate.toISOString().split('T')[0];
    document.getElementById('check-out').min = nextDay;
});

// Gallery Lightbox (would be implemented in a real application)
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        // In a real app, this would open a lightbox with the full image
        console.log('Opening lightbox for image:', item.querySelector('img').src);
    });
});

// Form validation for newsletter
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    if (email && email.includes('@')) {
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    } else {
        alert('Please enter a valid email address.');
    }
});