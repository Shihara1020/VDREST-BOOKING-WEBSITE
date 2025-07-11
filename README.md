# VD REST Hotel Website

A modern, luxury hotel website showcasing premium accommodations and services in Gampola, Sri Lanka. Built with advanced CSS animations, responsive design, and elegant user interface.

## 🔗 Live Demo
**[View Live Website](http://vdrest.lk/)**

## 🌟 Features

### ✨ **Modern Design**
- **Glassmorphism Effects**: Advanced backdrop blur and transparency
- **Luxury Animations**: Floating elements, shimmer effects, and gradient animations
- **Interactive Elements**: Hover effects with 3D transformations
- **Premium Color Scheme**: Gold gradient accents with dark/light themes

### 🎭 **Sections**
1. **Hero Section**: Animated slider with luxury hotel images
2. **About Section**: Hotel information with round logo badge and image frame
3. **Rooms & Suites**: 6 different room types with detailed amenities
4. **Facilities**: Business center, kids club, and concierge services
5. **Gallery**: Photo showcase with modern grid layout
6. **Nearby Attractions**: Local tourism spots with detailed information
7. **Location**: Interactive Google Maps integration
8. **Booking**: Direct booking form with external partner links
9. **Testimonials**: Customer reviews with star ratings

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Appropriate sizing for mobile interaction
- **Flexible Layout**: Adapts content for different devices

### 🎨 **Advanced CSS Features**
- **CSS Animations**: Keyframe animations for floating, shimmer, and gradient effects
- **Modern Layouts**: CSS Grid and Flexbox
- **Custom Properties**: CSS variables for consistent theming
- **Pseudo-elements**: Advanced styling with ::before and ::after
- **Transform Effects**: 3D transformations and scaling

## 🚀 Getting Started

### Prerequisites
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Local server (optional, for development)

### Installation

1. **Clone or Download** the project files
2. **Ensure all files are in the same directory:**
   ```
   Hotel/
   ├── main.html
   ├── style.css
   ├── script.js
   ├── README.md
   └── img/
       ├── MainVD.JPG
       ├── room1.jpg
       ├── room5.jpg
       ├── room6.jpg
       ├── VD1.jpg
       ├── VD2.jpg
       ├── VD3.jpg
       ├── ambuluwa.jpg
       ├── garden.jpg
       ├── kandy.jpg
       ├── Nuwaraeliya.webp
       ├── theeth.jpg
       ├── book1.png
       └── logo2.jpg
   ```

3. **Open `main.html`** in your web browser

### Running Locally

#### Option 1: Direct Browser Opening
- Simply double-click `main.html` or open it through your browser

#### Option 2: Local Server (Recommended)
- Using Python: `python -m http.server 8000`
- Using Node.js: `npx serve .`
- Using PHP: `php -S localhost:8000`

## 📁 File Structure

```
Hotel/
├── main.html          # Main HTML file with all sections
├── style.css          # Comprehensive CSS with modern styling
├── script.js          # JavaScript for interactions and animations
├── README.md          # Project documentation
└── img/               # Image assets
    ├── MainVD.JPG     # Main hotel image (about section)
    ├── room1.jpg      # Deluxe room image
    ├── room5.jpg      # Room 5 image
    ├── room6.jpg      # Penthouse image
    ├── VD1.jpg        # Family room image
    ├── VD2.jpg        # Presidential suite image
    ├── VD3.jpg        # Executive suite image
    ├── ambuluwa.jpg   # Ambuluwawa attraction
    ├── garden.jpg     # Botanical park
    ├── kandy.jpg      # Kandy town
    ├── Nuwaraeliya.webp # Nuwara Eliya attraction
    ├── theeth.jpg     # Temple of Tooth
    ├── book1.png      # Booking.com logo
    └── logo2.jpg      # Hotel round logo
```

## 🎯 Room Types & Amenities

All rooms include standard amenities:
- **King/Queen Beds**: Comfortable sleeping arrangements
- **Air Conditioning**: Climate control
- **WiFi**: High-speed internet access
- **Hot Water**: 24/7 hot water supply
- **Fan**: Additional ventilation
- **Guest Capacity**: Accommodates 2 adults

### Room Categories:
1. **Deluxe Room**: City view with modern amenities
2. **Executive Suite**: Separate living area with premium services
3. **Presidential Suite**: Panoramic views with butler service
4. **Family Room**: 2 Queen beds for families with children
5. **Penthouse**: Private terrace and jacuzzi (most exclusive)

## 🌐 External Dependencies

### CDN Libraries:
- **Font Awesome 6.4.0**: Icons and symbols
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Swiper 9**: Touch slider functionality
- **EmailJS**: Contact form integration

### External Services:
- **Google Maps**: Location and directions
- **Booking.com**: Partner booking integration
- **Unsplash**: Some gallery images

## 📱 Contact Information

**VD REST Hotel & Resort**
- **Address**: 137/A Sinhapura, Athgala City, Gampola
- **Phone**: +94 767768689
- **Email**: vdrestofficial@gmail.com
- **Reception**: 24/7 Available

### Transportation:
- **Train**: Gampola Railway Station (5 min taxi ride)
- **Bus**: Athgala Junction bus stop (2 min walk)
- **Car**: Free parking available on premises

## 🎨 Customization

### Changing Colors:
Edit the CSS custom properties in `style.css`:
```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #dba54e;
    /* Modify these for different color schemes */
}
```

### Adding New Rooms:
1. Add room card HTML structure in the `room-grid` section
2. Include room image in the `img/` folder
3. Update room features with standard amenities

### Modifying Animations:
All animations are defined in `style.css` using `@keyframes`. You can:
- Adjust timing with `animation-duration`
- Change easing with `animation-timing-function`
- Modify effects by editing keyframe values

## 🔧 Technical Details

### CSS Features Used:
- **Custom Properties**: For consistent theming
- **Grid & Flexbox**: Modern layout techniques
- **Backdrop Filter**: Glassmorphism effects
- **Transform**: 3D effects and animations
- **Pseudo-elements**: Enhanced styling
- **Media Queries**: Responsive breakpoints

### JavaScript Features:
- **AOS Library**: Scroll animations
- **Swiper**: Touch-enabled sliders
- **EmailJS**: Form submissions
- **Event Listeners**: Interactive elements

## 📄 License

This project is created for VD REST Hotel & Resort. All rights reserved.

## 🚀 Future Enhancements

Potential improvements:
- **Online Booking System**: Direct reservation management
- **Multi-language Support**: Internationalization
- **Virtual Tours**: 360° room previews
- **Weather Integration**: Local weather display
- **Social Media Integration**: Live social feeds
- **Progressive Web App**: Offline functionality

## 📞 Support

For technical support or questions about this website:
- **Email**: vdrestofficial@gmail.com
- **Phone**: +94 767768689

---

**Built with ❤️ for VD REST Hotel & Resort**

*Experience luxury redefined in the heart of Gampola, Sri Lanka*
