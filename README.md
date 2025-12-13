<<<<<<< HEAD
# Hanuman Heritage Hotel Booking Website

A modern, responsive hotel booking website for Hanuman Heritage Hotel in Chikkamagaluru, Karnataka.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Image Gallery**: Auto-rotating hero slider on homepage
- **Quick Booking Plugin**: Easy booking form with date pickers and guest selection
- **Room Management**: Browse rooms with pricing, photos, and features
- **Shopping Cart**: Add multiple rooms to cart with CRUD operations
- **Payment Integration**: QR code payment option
- **Bill Printing**: Generate and print booking bills
- **Admin Panel**: Manage bookings and view monthly sales reports
- **Google Maps Integration**: Location display with proximity to attractions
- **Google Sheets Integration**: Live booking data sync to Google Sheets

## Setup Instructions

### 1. Basic Setup

1. Open `index.html` in a web browser
2. The website will work locally with localStorage for bookings

### 2. Google Sheets Integration (Optional)

To enable live booking data sync to Google Sheets:

1. **Create a Google Sheet**:
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it "Hanuman Heritage Bookings"
   - Create headers in Row 1: Booking ID, Booking Date, Check-In, Check-Out, Adults, Children, Nights, Room Name, Total, Status

2. **Create Google Apps Script**:
   - In your Google Sheet, go to `Extensions` → `Apps Script`
   - Replace the default code with the content from `google-apps-script.js`
   - Save the script
   - Deploy it as a web app:
     - Click `Deploy` → `New deployment`
     - Select type: `Web app`
     - Execute as: `Me`
     - Who has access: `Anyone`
     - Click `Deploy`
   - Copy the Web App URL

3. **Update Script URL**:
   - Open `script.js`
   - Find the line: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Web App URL

### 3. Google Maps Integration

The Google Maps embed is already configured. To update the exact location:

1. Go to [Google Maps](https://maps.google.com)
2. Search for: "Joythinagar Main Road, Next to Abharan Jewelers, Chikkamagaluru"
3. Click `Share` → `Embed a map`
4. Copy the iframe code
5. Replace the iframe in `index.html` (in the contact section)

### 4. Customization

- **Room Data**: Edit the `rooms` array in `script.js` to add/modify rooms
- **Pricing**: Update room prices in the `rooms` array
- **Images**: Replace image URLs with your own hotel images
- **Colors**: Modify CSS variables in `styles.css` (--primary-color, etc.)
- **Hotel Details**: Update contact information in `index.html`

## File Structure

```
Billing_Website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md          # This file
└── google-apps-script.js  # Google Sheets integration script
```

## Features Breakdown

### Navigation
- Homepage
- Experience Chikmagaluru
- Room Bookings
- Event Bookings
- Gallery
- Contact Us

### Booking System
- Check-in/Check-out date selection
- Adult and children count
- Automatic nights calculation
- Add rooms to cart
- Update quantities
- Remove items
- Clear cart

### Payment
- QR code display for UPI payment
- Bill generation
- Print functionality

### Admin Panel
- View all bookings
- Edit booking status
- Delete bookings
- Monthly sales report
- Revenue tracking

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All booking data is stored in browser localStorage by default
- For production use, consider implementing a backend database
- Google Sheets integration requires internet connection
- QR code uses a placeholder UPI ID - update with your actual payment details

## Support

For issues or questions, please contact the development team.

---

© 2024 Hanuman Heritage. All rights reserved.

=======
# Hanuman Heritage Hotel Booking Website

A modern, responsive hotel booking website for Hanuman Heritage Hotel in Chikkamagaluru, Karnataka.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Image Gallery**: Auto-rotating hero slider on homepage
- **Quick Booking Plugin**: Easy booking form with date pickers and guest selection
- **Room Management**: Browse rooms with pricing, photos, and features
- **Shopping Cart**: Add multiple rooms to cart with CRUD operations
- **Payment Integration**: QR code payment option
- **Bill Printing**: Generate and print booking bills
- **Admin Panel**: Manage bookings and view monthly sales reports
- **Google Maps Integration**: Location display with proximity to attractions
- **Google Sheets Integration**: Live booking data sync to Google Sheets

## Setup Instructions

### 1. Basic Setup

1. Open `index.html` in a web browser
2. The website will work locally with localStorage for bookings

### 2. Google Sheets Integration (Optional)

To enable live booking data sync to Google Sheets:

1. **Create a Google Sheet**:
   - Go to [Google Sheets](https://sheets.google.com)
   - Create a new spreadsheet
   - Name it "Hanuman Heritage Bookings"
   - Create headers in Row 1: Booking ID, Booking Date, Check-In, Check-Out, Adults, Children, Nights, Room Name, Total, Status

2. **Create Google Apps Script**:
   - In your Google Sheet, go to `Extensions` → `Apps Script`
   - Replace the default code with the content from `google-apps-script.js`
   - Save the script
   - Deploy it as a web app:
     - Click `Deploy` → `New deployment`
     - Select type: `Web app`
     - Execute as: `Me`
     - Who has access: `Anyone`
     - Click `Deploy`
   - Copy the Web App URL

3. **Update Script URL**:
   - Open `script.js`
   - Find the line: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
   - Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Web App URL

### 3. Google Maps Integration

The Google Maps embed is already configured. To update the exact location:

1. Go to [Google Maps](https://maps.google.com)
2. Search for: "Joythinagar Main Road, Next to Abharan Jewelers, Chikkamagaluru"
3. Click `Share` → `Embed a map`
4. Copy the iframe code
5. Replace the iframe in `index.html` (in the contact section)

### 4. Customization

- **Room Data**: Edit the `rooms` array in `script.js` to add/modify rooms
- **Pricing**: Update room prices in the `rooms` array
- **Images**: Replace image URLs with your own hotel images
- **Colors**: Modify CSS variables in `styles.css` (--primary-color, etc.)
- **Hotel Details**: Update contact information in `index.html`

## File Structure

```
Billing_Website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── README.md          # This file
└── google-apps-script.js  # Google Sheets integration script
```

## Features Breakdown

### Navigation
- Homepage
- Experience Chikmagaluru
- Room Bookings
- Event Bookings
- Gallery
- Contact Us

### Booking System
- Check-in/Check-out date selection
- Adult and children count
- Automatic nights calculation
- Add rooms to cart
- Update quantities
- Remove items
- Clear cart

### Payment
- QR code display for UPI payment
- Bill generation
- Print functionality

### Admin Panel
- View all bookings
- Edit booking status
- Delete bookings
- Monthly sales report
- Revenue tracking

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All booking data is stored in browser localStorage by default
- For production use, consider implementing a backend database
- Google Sheets integration requires internet connection
- QR code uses a placeholder UPI ID - update with your actual payment details

## Support

For issues or questions, please contact the development team.

---

© 2024 Hanuman Heritage. All rights reserved.

>>>>>>> Updated files
