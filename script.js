// Room Data with enhanced details
const rooms = [
    {
        id: 1,
        name: "Deluxe Room (Non-AC)",
        price: 2500,
        image: "images/Delux_Non_AC_Room.PNG",
        images: [
            "images/Delux_Non_AC_Room.PNG",
            "images/Passage_02.PNG",
            "images/Double_Bed_room_view_01.PNG",
			"images/Bathroom_01.PNG"
        ],
        features: ["Double Bed", "TV", "WiFi", "Bathroom", "Fan"],
        capacity: 2,
        size: "250 sq ft",
        bedType: "Double Bed",
        roomsAvailable: 8,
        description: "Comfortable deluxe room without air conditioning, perfect for budget-conscious travelers. Features all essential amenities for a pleasant stay in Chikkamagaluru."
    },
    {
        id: 2,
        name: "Deluxe Room (AC)",
        price: 3000,
        image: "images/Delux_AC_Room.PNG",
        images: [
            "images/Delux_AC_Room.PNG",
            "images/Passage_02.PNG",
            "images/Hotel_Lobby.PNG",
			"images/Bathroom_01.PNG"
        ],
        features: ["Double Bed", "AC", "TV", "WiFi", "Bathroom"],
        capacity: 2,
        size: "250 sq ft",
        bedType: "Double Bed",
        roomsAvailable: 6,
        description: "Spacious and elegantly designed deluxe room with air conditioning and modern amenities. Perfect for couples seeking comfort during their stay in Chikkamagaluru."
    },
    {
        id: 3,
        name: "Twin Sharing Room",
        price: 2500,
        image: "images/Twin_Sharing_Beds.PNG",
        images: [
            "images/Twin_Sharing_Beds.PNG",
            "images/Passage_01.JPG",
			"images/Bathroom_02.PNG"
        ],
        features: ["Twin Beds", "AC", "TV", "WiFi", "Bathroom"],
        capacity: 2,
        size: "250 sq ft",
        bedType: "Twin Beds",
        roomsAvailable: 8,
        description: "Ideal for friends or colleagues traveling together. Features two separate beds with all modern amenities for a comfortable stay."
    },
    {
        id: 4,
        name: "Quade Suite",
        price: 5000,
        image: "images/Dormitory_Type_I.PNG",
        images: [
            "images/Dormitory_Type_I.PNG",
            "images/Bathroom_01.PNG",
			"images/Passage_02.PNG"
        ],
        features: ["Multiple Beds", "AC", "TV", "WiFi", "Shared Bathroom"],
        capacity: 4,
        size: "250 sq ft",
        bedType: "Multiple Beds",
        roomsAvailable: 1,
        description: "Spacious dormitory-style accommodation perfect for groups of 4. Features comfortable beds, shared facilities, and secure lockers for your belongings."
    },
    {
        id: 5,
        name: "Seven Wonders",
        price: "10,000",
        image: "images/Dormitory_Type_II.PNG",
        images: [
            "images/Dormitory_Type_II.PNG",
            "images/Bathroom_01.PNG",
			"images/Passage_02.PNG"
        ],
        features: ["Multiple Beds", "AC", "TV", "WiFi", "Shared Bathroom"],
        capacity: "6 to 8",
        size: "450 sq ft",
        bedType: "Multiple Beds",
        roomsAvailable: 1,
        description: "Large dormitory accommodation ideal for groups of 6. Features comfortable sleeping arrangements with all essential amenities for a group stay."
    },
    {
        id: 6,
        name: "Twin Heritage Suite (AC)",
        price: 5000,
        image: "images/Premium_Suite_Room_02.PNG",
        images: [
            "images/Premium_Suite_Room_02.PNG",
            "images/Premium_Suite_Room_01.PNG",
            "images/Bathroom_01.PNG",
			"images/Passage.PNG"
        ],
        features: ["King Size Bed", "AC", "TV", "WiFi", "Bathroom"],
        capacity: 2,
        size: "280 sq ft",
        bedType: "King Size Bed",
        roomsAvailable: 2,
        description: "Luxurious premium suite with air conditioning, private balcony, and premium furnishings. Perfect for couples seeking an enhanced experience with extra space and amenities."
    }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let bookings = JSON.parse(localStorage.getItem('bookings')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeSlider();
    loadRooms();
    updateCartCount();
    setupBookingForm();
    setupDateValidation();
    setupModalClose();
    loadBookings();
    
    // Setup room filters
    const priceFilter = document.getElementById('priceFilter');
    const capacityFilter = document.getElementById('capacityFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    if (priceFilter) priceFilter.addEventListener('change', filterRooms);
    if (capacityFilter) capacityFilter.addEventListener('change', filterRooms);
    if (sortFilter) sortFilter.addEventListener('change', filterRooms);
    
    // Update nights calculation
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const nights = document.getElementById('nights');
    
    [checkIn, checkOut].forEach(input => {
        input.addEventListener('change', function() {
            if (checkIn.value && checkOut.value) {
                const date1 = new Date(checkIn.value);
                const date2 = new Date(checkOut.value);
                const diffTime = Math.abs(date2 - date1);
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                nights.value = diffDays > 0 ? diffDays : 1;
            }
        });
    });
});

// Slider Functionality
let currentSlide = 0;
let slideInterval = null;
let slides = [];
let dots = [];

function initializeSlider() {
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');
    
    if (slides.length > 0) {
        showSlide(0);
        startAutoSlide();
    }
}

function startAutoSlide() {
    // Clear any existing interval
    if (slideInterval) {
        clearInterval(slideInterval);
    }
    
    // Start auto-slide every 5 seconds
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);
}

function stopAutoSlide() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
}

function showSlide(n) {
    // Ensure n is within valid range
    if (n < 0) n = slides.length - 1;
    if (n >= slides.length) n = 0;
    
    currentSlide = n;
    
    // Remove active class from all slides and dots
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current slide and dot
    if (slides[n]) {
        slides[n].classList.add('active');
    }
    if (dots[n]) {
        dots[n].classList.add('active');
    }
}

function changeSlide(direction) {
    // Stop auto-slide when user manually changes slide
    stopAutoSlide();
    
    // Change slide
    currentSlide += direction;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    
    showSlide(currentSlide);
    
    // Restart auto-slide after 5 seconds
    startAutoSlide();
}

function goToSlide(n) {
    // Stop auto-slide when user clicks on dot
    stopAutoSlide();
    
    // Go to specific slide (n is 1-based from HTML)
    currentSlide = n - 1;
    showSlide(currentSlide);
    
    // Restart auto-slide after 5 seconds
    startAutoSlide();
}

// Filtered and sorted rooms
let filteredRooms = [...rooms];
let currentRoomId = null;

// Load Rooms with enhanced design
function loadRooms(roomsToDisplay = filteredRooms) {
    const roomsGrid = document.getElementById('roomsGrid');
    if (!roomsGrid) return;
    
    if (roomsToDisplay.length === 0) {
        roomsGrid.innerHTML = `
            <div class="no-rooms-found">
                <i class="fas fa-search"></i>
                <h3>No rooms found</h3>
                <p>Try adjusting your filters to see more options</p>
            </div>
        `;
        return;
    }
    
    roomsGrid.innerHTML = roomsToDisplay.map(room => `
        <div class="room-card" data-room-id="${room.id}">
            <div class="room-image-container">
                <img src="${room.image}" alt="${room.name}" class="room-image">
                <div class="room-overlay">
                    <button class="btn-view-details" onclick="viewRoomDetails(${room.id})">
                        <i class="fas fa-eye"></i> View Details
                    </button>
                </div>
                <div class="room-badge">₹${room.price}/night</div>
            </div>
            <div class="room-details">
                <h3>${room.name}</h3>
                <div class="room-specs">
                    <span><i class="fas fa-users"></i> ${room.capacity} Guests</span>
                    <span><i class="fas fa-ruler-combined"></i> ${room.size}</span>
                    <span><i class="fas fa-bed"></i> ${room.bedType}</span>
                    <span><i class="fas fa-door-open"></i> ${room.roomsAvailable || 'N/A'} Available</span>
                </div>
                <p class="room-short-desc">${room.description.substring(0, 100)}...</p>
                <div class="room-features-preview">
                    ${room.features.slice(0, 4).map(feature => `
                        <span class="feature-tag"><i class="fas fa-check"></i> ${feature}</span>
                    `).join('')}
                    ${room.features.length > 4 ? `<span class="feature-more">+${room.features.length - 4} more</span>` : ''}
                </div>
                <div class="room-actions">
                    <button class="btn-view-details-mobile" onclick="viewRoomDetails(${room.id})">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                    <button class="btn-add-cart" onclick="addToCart(${room.id})">
                        <i class="fas fa-cart-plus"></i> Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// View Room Details
function viewRoomDetails(roomId) {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;
    
    currentRoomId = roomId;
    const modal = document.getElementById('roomDetailsModal');
    
    // Set room details
    document.getElementById('modalRoomName').textContent = room.name;
    document.getElementById('modalPrice').textContent = `₹${room.price}`;
    document.getElementById('modalCapacity').textContent = `${room.capacity} Guests`;
    document.getElementById('modalBedType').textContent = room.bedType;
    document.getElementById('modalSize').textContent = room.size;
    document.getElementById('modalRoomsAvailable').textContent = `${room.roomsAvailable || 'N/A'} Rooms Available`;
    document.getElementById('modalDescription').innerHTML = `<p>${room.description}</p>`;
    
    // Set main image
    document.getElementById('modalMainImage').src = room.images[0];
    document.getElementById('modalMainImage').alt = room.name;
    
    // Set thumbnails
    const thumbnailsContainer = document.getElementById('imageThumbnails');
    thumbnailsContainer.innerHTML = room.images.map((img, index) => `
        <img src="${img}" alt="${room.name} - Image ${index + 1}" 
             onclick="changeMainImage('${img}')" 
             class="thumbnail ${index === 0 ? 'active' : ''}">
    `).join('');
    
    // Set amenities
    const amenitiesContainer = document.getElementById('modalAmenities');
    amenitiesContainer.innerHTML = room.features.map(feature => `
        <div class="amenity-item">
            <i class="fas fa-check-circle"></i>
            <span>${feature}</span>
        </div>
    `).join('');
    
    modal.style.display = 'block';
}

// Change main image in modal
function changeMainImage(src) {
    document.getElementById('modalMainImage').src = src;
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('active');
        if (thumb.src === src || thumb.src.includes(src.split('?')[0])) {
            thumb.classList.add('active');
        }
    });
}

// Book this room
function bookThisRoom() {
    if (currentRoomId) {
        document.getElementById('roomDetailsModal').style.display = 'none';
        addToCart(currentRoomId);
        // Scroll to booking form
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    }
}

// View Gallery
function viewGallery() {
    // Could implement a lightbox gallery here
    alert('Gallery view coming soon!');
}

// Filter Rooms
function filterRooms() {
    const priceFilter = document.getElementById('priceFilter').value;
    const capacityFilter = document.getElementById('capacityFilter').value;
    const sortFilter = document.getElementById('sortFilter').value;
    
    filteredRooms = rooms.filter(room => {
        // Price filter
        if (priceFilter === 'budget' && room.price >= 3000) return false;
        if (priceFilter === 'mid' && (room.price < 3000 || room.price > 6000)) return false;
        if (priceFilter === 'luxury' && room.price <= 6000) return false;
        
        // Capacity filter
        if (capacityFilter === '2' && room.capacity !== 2) return false;
        if (capacityFilter === '3' && room.capacity !== 3) return false;
        if (capacityFilter === '4' && room.capacity < 4) return false;
        
        return true;
    });
    
    // Sort rooms
    if (sortFilter === 'price-low') {
        filteredRooms.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-high') {
        filteredRooms.sort((a, b) => b.price - a.price);
    } else if (sortFilter === 'name') {
        filteredRooms.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    loadRooms(filteredRooms);
}

// Reset Filters
function resetFilters() {
    document.getElementById('priceFilter').value = 'all';
    document.getElementById('capacityFilter').value = 'all';
    document.getElementById('sortFilter').value = 'default';
    filteredRooms = [...rooms];
    loadRooms(filteredRooms);
}

// Setup Booking Form
function setupBookingForm() {
    const form = document.getElementById('quickBookingForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Setup Date Validation
function setupDateValidation() {
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    
    if (checkIn && checkOut) {
        const today = new Date().toISOString().split('T')[0];
        checkIn.setAttribute('min', today);
        checkIn.addEventListener('change', function() {
            if (this.value) {
                const nextDay = new Date(this.value);
                nextDay.setDate(nextDay.getDate() + 1);
                checkOut.setAttribute('min', nextDay.toISOString().split('T')[0]);
            }
        });
    }
}

// Cart Functions
function addToCart(roomId) {
    const checkIn = document.getElementById('checkIn')?.value;
    const checkOut = document.getElementById('checkOut')?.value;
    const adults = parseInt(document.getElementById('adults')?.value || 1);
    const children = parseInt(document.getElementById('children')?.value || 0);
    const nights = parseInt(document.getElementById('nights')?.value || 1);
    
    if (!checkIn || !checkOut) {
        alert('Please select check-in and check-out dates first!');
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;
    
    const cartItem = {
        id: Date.now(),
        roomId: room.id,
        roomName: room.name,
        price: room.price,
        image: room.image,
        checkIn: checkIn,
        checkOut: checkOut,
        adults: adults,
        children: children,
        nights: nights,
        total: room.price * nights
    };
    
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showCart();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;
    
    modal.style.display = 'block';
    renderCart();
}

function renderCart() {
    const cartItems = document.getElementById('cartItems');
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem;">Your cart is empty</p>';
        updateCartSummary();
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-details">
                <h4>${item.roomName}</h4>
                <p>Check-in: ${formatDate(item.checkIn)} | Check-out: ${formatDate(item.checkOut)}</p>
                <p>Adults: ${item.adults} | Children: ${item.children} | Nights: ${item.nights}</p>
                <p><strong>₹${item.total}</strong></p>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.nights}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (!item) return;
    
    item.nights = Math.max(1, item.nights + change);
    item.total = item.price * item.nights;
    
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCart();
}

function clearCart() {
    if (confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCart();
    }
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;
    
    document.getElementById('subtotal').textContent = `₹${subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;
}

// Booking Functions
function proceedToBook() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Get customer email from input box
    const customerEmail = document.getElementById('customerEmail')?.value || "";

    if (customerEmail === "") {
        alert("Please enter your email to receive booking confirmation.");
        return;
    }

    const booking = {
        id: Date.now(),
        bookingDate: new Date().toISOString(),
        items: [...cart],
        subtotal: cart.reduce((sum, item) => sum + item.total, 0),
        tax: cart.reduce((sum, item) => sum + item.total, 0) * 0.18,
        total: cart.reduce((sum, item) => sum + item.total, 0) * 1.18,
        status: 'Confirmed',
        customerEmail: customerEmail  // NEW FIELD for email sending
    };

    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    // Send to Google Sheets + Trigger Email Confirmation
    saveToGoogleSheets(booking);

    alert('Booking confirmed! Your booking ID is: ' + booking.id);

    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    document.getElementById('cartModal').style.display = 'none';
    loadBookings();
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const status = document.getElementById("bookingStatus");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const data = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        status.textContent = "Your booking request has been submitted successfully. We will contact you shortly!";
        form.reset();
      } else {
        status.style.color = "red";
        status.textContent = "Oops! Something went wrong. Please try again.";
      }
    });
  }
});

// Google Sheets Integration
async function saveToGoogleSheets(booking) {
    // This is a placeholder for Google Sheets API integration
    // You'll need to set up Google Sheets API credentials
    // For now, we'll use a simple fetch to a Google Apps Script web app
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwgEtvbEq9c0Q_nPQUc3JdTtIYnhbzRLWDgTFeADqYy12GwO8GKymt5BCSVNIO80iAG/exec'; // Replace with your Google Apps Script URL
    
    if (scriptURL === 'https://script.google.com/macros/s/AKfycbwgEtvbEq9c0Q_nPQUc3JdTtIYnhbzRLWDgTFeADqYy12GwO8GKymt5BCSVNIO80iAG/exec') {
        console.log('Google Sheets integration not configured. Booking saved locally.');
        return;
    }
    
    try {
        const data = {
            bookingId: booking.id,
            bookingDate: booking.bookingDate,
            checkIn: booking.items[0].checkIn,
            checkOut: booking.items[0].checkOut,
            adults: booking.items[0].adults,
            children: booking.items[0].children,
            nights: booking.items[0].nights,
            roomName: booking.items[0].roomName,
            total: booking.total,
            status: booking.status
        };
        
        await fetch(scriptURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error('Error saving to Google Sheets:', error);
    }
}

// Payment Functions
function showPayment() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    document.getElementById('cartModal').style.display = 'none';
    document.getElementById('paymentModal').style.display = 'block';
}

function printBill() {
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.18;
    const total = subtotal + tax;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
            <head>
                <title>Bill - Hanuman Heritage</title>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    .header { text-align: center; margin-bottom: 30px; }
                    .header h1 { color: #c9a961; }
                    .bill-details { margin-bottom: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
                    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
                    th { background-color: #c9a961; color: white; }
                    .total-row { font-weight: bold; font-size: 1.2em; }
                    .footer { margin-top: 30px; text-align: center; color: #666; }
                </style>
            </head>
            <body>
                <div class="header">
                    <h1>Hanuman Heritage</h1>
                    <p>Joythinagar Main Road, Next to Abharan Jewelers<br>Chikkamagaluru, Karnataka 577101</p>
                </div>
                <div class="bill-details">
                    <p><strong>Bill Date:</strong> ${new Date().toLocaleDateString()}</p>
                    <p><strong>Bill Number:</strong> ${Date.now()}</p>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Room</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                            <th>Nights</th>
                            <th>Price/Night</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cart.map(item => `
                            <tr>
                                <td>${item.roomName}</td>
                                <td>${formatDate(item.checkIn)}</td>
                                <td>${formatDate(item.checkOut)}</td>
                                <td>${item.nights}</td>
                                <td>₹${item.price}</td>
                                <td>₹${item.total}</td>
                            </tr>
                        `).join('')}
                        <tr>
                            <td colspan="5" style="text-align: right;"><strong>Subtotal:</strong></td>
                            <td><strong>₹${subtotal.toFixed(2)}</strong></td>
                        </tr>
                        <tr>
                            <td colspan="5" style="text-align: right;"><strong>Tax (18%):</strong></td>
                            <td><strong>₹${tax.toFixed(2)}</strong></td>
                        </tr>
                        <tr class="total-row">
                            <td colspan="5" style="text-align: right;"><strong>Total:</strong></td>
                            <td><strong>₹${total.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </table>
                <div class="footer">
                    <p>Thank you for choosing Hanuman Heritage!</p>
                </div>
            </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Admin Panel Functions
function openAdminPanel() {
    document.getElementById('adminModal').style.display = 'block';
    showTab('bookings');
}

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.getElementById(tabName + 'Tab').classList.add('active');
    const clickedBtn = event ? event.target : document.querySelector(`.tab-btn[onclick*="${tabName}"]`);
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }
    
    if (tabName === 'bookings') {
        loadBookings();
    } else if (tabName === 'reports') {
        loadSalesReport();
    }
}

function loadBookings() {
    const bookingsList = document.getElementById('bookingsList');
    if (!bookingsList) return;
    
    if (bookings.length === 0) {
        bookingsList.innerHTML = '<p style="text-align: center; padding: 2rem;">No bookings found</p>';
        return;
    }
    
    bookingsList.innerHTML = bookings.map(booking => `
        <div class="booking-item">
            <div class="booking-item-info">
                <h4>Booking #${booking.id}</h4>
                <p>Date: ${formatDate(booking.bookingDate)}</p>
                <p>Rooms: ${booking.items.map(item => item.roomName).join(', ')}</p>
                <p>Check-in: ${formatDate(booking.items[0].checkIn)} | Check-out: ${formatDate(booking.items[0].checkOut)}</p>
                <p>Total: ₹${booking.total.toFixed(2)} | Status: ${booking.status}</p>
            </div>
            <div class="booking-item-actions">
                <button class="btn-edit" onclick="editBooking(${booking.id})">Edit</button>
                <button class="btn-delete" onclick="deleteBooking(${booking.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function editBooking(bookingId) {
    const booking = bookings.find(b => b.id === bookingId);
    if (!booking) return;
    
    const newStatus = prompt('Enter new status (Confirmed/Cancelled/Pending):', booking.status);
    if (newStatus) {
        booking.status = newStatus;
        localStorage.setItem('bookings', JSON.stringify(bookings));
        loadBookings();
    }
}

function payWithUPI() {
    const subtotal = cart.reduce((sum, item) => sum + item.total, 0);
    const tax = subtotal * 0.18;
    const totalAmount = (subtotal + tax).toFixed(2);

    const upiID = "8277373641@upi";
    const upiName = "Hanuman Heritage";

    const upiLink = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(upiName)}&am=${totalAmount}&cu=INR`;

    // Android intent link - fallback
    const intentLink = `intent://pay?pa=${upiID}&pn=${encodeURIComponent(upiName)}&am=${totalAmount}&cu=INR#Intent;scheme=upi;end;`;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
        // Primary attempt
        window.location.href = upiLink;

        // Fallback after delay
        setTimeout(() => {
            window.location.href = intentLink;
        }, 1500);
    } else {
        // Desktop fallback: Show QR Modal
        showUPIQR(totalAmount);
        alert("Use your mobile UPI app or scan the QR code to complete payment.");
    }
}




function deleteBooking(bookingId) {
    if (confirm('Are you sure you want to delete this booking?')) {
        bookings = bookings.filter(b => b.id !== bookingId);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        loadBookings();
    }
}

function loadSalesReport() {
    const salesReport = document.getElementById('salesReport');
    if (!salesReport) return;
    
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    
    const monthlyBookings = bookings.filter(booking => {
        const bookingDate = new Date(booking.bookingDate);
        return bookingDate.getMonth() === currentMonth && 
               bookingDate.getFullYear() === currentYear;
    });
    
    const totalRevenue = monthlyBookings.reduce((sum, booking) => sum + booking.total, 0);
    const totalBookings = monthlyBookings.length;
    const averageBooking = totalBookings > 0 ? totalRevenue / totalBookings : 0;
    
    salesReport.innerHTML = `
        <div style="padding: 2rem;">
            <h3 style="margin-bottom: 2rem;">Sales Report - ${now.toLocaleString('default', { month: 'long', year: 'numeric' })}</h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
                    <h4 style="color: #666; margin-bottom: 0.5rem;">Total Bookings</h4>
                    <p style="font-size: 2rem; font-weight: bold; color: #c9a961;">${totalBookings}</p>
                </div>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
                    <h4 style="color: #666; margin-bottom: 0.5rem;">Total Revenue</h4>
                    <p style="font-size: 2rem; font-weight: bold; color: #c9a961;">₹${totalRevenue.toFixed(2)}</p>
                </div>
                <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 10px;">
                    <h4 style="color: #666; margin-bottom: 0.5rem;">Average Booking</h4>
                    <p style="font-size: 2rem; font-weight: bold; color: #c9a961;">₹${averageBooking.toFixed(2)}</p>
                </div>
            </div>
            <h4 style="margin-bottom: 1rem;">Recent Bookings</h4>
            <div style="max-height: 400px; overflow-y: auto;">
                ${monthlyBookings.length > 0 ? monthlyBookings.map(booking => `
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 5px; margin-bottom: 0.5rem;">
                        <strong>Booking #${booking.id}</strong> - ₹${booking.total.toFixed(2)} - ${formatDate(booking.bookingDate)}
                    </div>
                `).join('') : '<p>No bookings this month</p>'}
            </div>
        </div>
    `;
}

// Utility Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Modal Close Functions
function setupModalClose() {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');
    
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    window.addEventListener('click', function(event) {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Cart Icon Click
const cartIcon = document.querySelector('.cart-icon');
if (cartIcon) {
    cartIcon.addEventListener('click', function() {
        if (cart.length === 0) {
            alert('Your cart is empty. Please add rooms to your cart first.');
            return;
        }
        showCart();
    });
}

// Mobile Menu Toggle
document.querySelector('.hamburger')?.addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                document.querySelector('.nav-menu').classList.remove('active');
            }
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});