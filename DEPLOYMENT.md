<<<<<<< HEAD
# How to Make Your Website Live

This guide will help you deploy the Hanuman Heritage hotel booking website online.

## Option 1: Netlify (Recommended - Easiest & Free)

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://www.netlify.com)
   - Click "Sign up" (you can use GitHub, Email, or Google)

2. **Deploy Your Website**
   - Log in to Netlify
   - Drag and drop your entire `Billing_Website` folder onto the Netlify dashboard
   - OR click "Add new site" → "Deploy manually" → Upload your folder
   - Netlify will automatically deploy your site

3. **Get Your Live URL**
   - Netlify will give you a URL like: `https://random-name-123.netlify.app`
   - You can customize it in Site settings → Change site name

4. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain (e.g., `hanumanheritage.com`)
   - Follow the DNS configuration instructions

**Pros:** Free, automatic HTTPS, easy to use, fast CDN

---

## Option 2: GitHub Pages (Free)

### Steps:

1. **Create a GitHub Account**
   - Go to [github.com](https://www.github.com)
   - Sign up for a free account

2. **Create a New Repository**
   - Click the "+" icon → "New repository"
   - Name it (e.g., `hanuman-heritage-website`)
   - Make it Public
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all your files (index.html, styles.css, script.js, etc.)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/hanuman-heritage-website`

**Pros:** Free, version control, easy updates

---

## Option 3: Vercel (Free & Fast)

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://www.vercel.com)
   - Sign up with GitHub, GitLab, or Email

2. **Deploy**
   - Click "Add New Project"
   - Import your GitHub repository (if using GitHub)
   - OR drag and drop your folder
   - Click "Deploy"

3. **Get Your URL**
   - Vercel will give you a URL like: `https://hanuman-heritage.vercel.app`

**Pros:** Free, very fast, automatic HTTPS, great performance

---

## Option 4: Firebase Hosting (Free)

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   cd Billing_Website
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory as: `.` (current directory)
   - Configure as single-page app: No
   - Set up automatic builds: No

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Get Your URL**
   - Your site will be at: `https://your-project-id.web.app`

**Pros:** Free tier, Google infrastructure, fast

---

## Option 5: Traditional Web Hosting

### Popular Hosting Providers:
- **Hostinger** - Affordable, good for beginners
- **Bluehost** - Popular, WordPress-friendly
- **SiteGround** - Fast, reliable
- **GoDaddy** - Well-known, easy setup

### Steps (General):
1. Purchase a hosting plan
2. Get your domain name (or use subdomain)
3. Use FTP/SFTP or cPanel File Manager
4. Upload all your files to the `public_html` or `www` folder
5. Your site will be live at your domain

---

## Quick Setup Checklist

Before deploying, make sure to:

- [ ] Update the Google Maps embed URL with your exact location
- [ ] Replace placeholder images with your actual hotel photos
- [ ] Update the UPI QR code with your payment details
- [ ] Test all booking functionality
- [ ] Set up Google Sheets integration (if needed)
- [ ] Update contact information (phone, email)
- [ ] Test on mobile devices

---

## Setting Up Google Sheets Integration (For Live Data)

1. **Create Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create new spreadsheet: "Hanuman Heritage Bookings"
   - Add headers: Booking ID, Booking Date, Check-In, Check-Out, Adults, Children, Nights, Room Name, Total, Status

2. **Create Apps Script**
   - In Google Sheet: Extensions → Apps Script
   - Copy code from `google-apps-script.js`
   - Save and Deploy as Web App
   - Copy the Web App URL

3. **Update Your Website**
   - Open `script.js`
   - Find: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
   - Replace with your Web App URL

4. **Test**
   - Make a test booking
   - Check if it appears in your Google Sheet

---

## Recommended: Netlify (Easiest)

For beginners, I recommend **Netlify** because:
- ✅ No coding required
- ✅ Drag and drop deployment
- ✅ Free SSL certificate
- ✅ Fast CDN
- ✅ Easy custom domain setup
- ✅ Automatic deployments

### Quick Netlify Deployment:

1. Zip your `Billing_Website` folder
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the zip file onto the page
4. Done! Your site is live in seconds

---

## Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Ensure all file paths are correct
3. Make sure `index.html` is in the root folder
4. Test locally first (open index.html in browser)

---

## Security Notes

- Never commit sensitive API keys to public repositories
- Use environment variables for production
- Enable HTTPS (most hosting providers do this automatically)
- Regularly update your dependencies

---

**Your website will be live and accessible worldwide once deployed!** 🌐

=======
# How to Make Your Website Live

This guide will help you deploy the Hanuman Heritage hotel booking website online.

## Option 1: Netlify (Recommended - Easiest & Free)

### Steps:

1. **Create a Netlify Account**
   - Go to [netlify.com](https://www.netlify.com)
   - Click "Sign up" (you can use GitHub, Email, or Google)

2. **Deploy Your Website**
   - Log in to Netlify
   - Drag and drop your entire `Billing_Website` folder onto the Netlify dashboard
   - OR click "Add new site" → "Deploy manually" → Upload your folder
   - Netlify will automatically deploy your site

3. **Get Your Live URL**
   - Netlify will give you a URL like: `https://random-name-123.netlify.app`
   - You can customize it in Site settings → Change site name

4. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain (e.g., `hanumanheritage.com`)
   - Follow the DNS configuration instructions

**Pros:** Free, automatic HTTPS, easy to use, fast CDN

---

## Option 2: GitHub Pages (Free)

### Steps:

1. **Create a GitHub Account**
   - Go to [github.com](https://www.github.com)
   - Sign up for a free account

2. **Create a New Repository**
   - Click the "+" icon → "New repository"
   - Name it (e.g., `hanuman-heritage-website`)
   - Make it Public
   - Click "Create repository"

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all your files (index.html, styles.css, script.js, etc.)
   - Click "Commit changes"

4. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be live at: `https://yourusername.github.io/hanuman-heritage-website`

**Pros:** Free, version control, easy updates

---

## Option 3: Vercel (Free & Fast)

### Steps:

1. **Create a Vercel Account**
   - Go to [vercel.com](https://www.vercel.com)
   - Sign up with GitHub, GitLab, or Email

2. **Deploy**
   - Click "Add New Project"
   - Import your GitHub repository (if using GitHub)
   - OR drag and drop your folder
   - Click "Deploy"

3. **Get Your URL**
   - Vercel will give you a URL like: `https://hanuman-heritage.vercel.app`

**Pros:** Free, very fast, automatic HTTPS, great performance

---

## Option 4: Firebase Hosting (Free)

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase**
   ```bash
   cd Billing_Website
   firebase init hosting
   ```
   - Select "Use an existing project" or create new
   - Set public directory as: `.` (current directory)
   - Configure as single-page app: No
   - Set up automatic builds: No

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Get Your URL**
   - Your site will be at: `https://your-project-id.web.app`

**Pros:** Free tier, Google infrastructure, fast

---

## Option 5: Traditional Web Hosting

### Popular Hosting Providers:
- **Hostinger** - Affordable, good for beginners
- **Bluehost** - Popular, WordPress-friendly
- **SiteGround** - Fast, reliable
- **GoDaddy** - Well-known, easy setup

### Steps (General):
1. Purchase a hosting plan
2. Get your domain name (or use subdomain)
3. Use FTP/SFTP or cPanel File Manager
4. Upload all your files to the `public_html` or `www` folder
5. Your site will be live at your domain

---

## Quick Setup Checklist

Before deploying, make sure to:

- [ ] Update the Google Maps embed URL with your exact location
- [ ] Replace placeholder images with your actual hotel photos
- [ ] Update the UPI QR code with your payment details
- [ ] Test all booking functionality
- [ ] Set up Google Sheets integration (if needed)
- [ ] Update contact information (phone, email)
- [ ] Test on mobile devices

---

## Setting Up Google Sheets Integration (For Live Data)

1. **Create Google Sheet**
   - Go to [sheets.google.com](https://sheets.google.com)
   - Create new spreadsheet: "Hanuman Heritage Bookings"
   - Add headers: Booking ID, Booking Date, Check-In, Check-Out, Adults, Children, Nights, Room Name, Total, Status

2. **Create Apps Script**
   - In Google Sheet: Extensions → Apps Script
   - Copy code from `google-apps-script.js`
   - Save and Deploy as Web App
   - Copy the Web App URL

3. **Update Your Website**
   - Open `script.js`
   - Find: `const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';`
   - Replace with your Web App URL

4. **Test**
   - Make a test booking
   - Check if it appears in your Google Sheet

---

## Recommended: Netlify (Easiest)

For beginners, I recommend **Netlify** because:
- ✅ No coding required
- ✅ Drag and drop deployment
- ✅ Free SSL certificate
- ✅ Fast CDN
- ✅ Easy custom domain setup
- ✅ Automatic deployments

### Quick Netlify Deployment:

1. Zip your `Billing_Website` folder
2. Go to [app.netlify.com](https://app.netlify.com)
3. Drag the zip file onto the page
4. Done! Your site is live in seconds

---

## Need Help?

If you encounter any issues:
1. Check browser console for errors (F12)
2. Ensure all file paths are correct
3. Make sure `index.html` is in the root folder
4. Test locally first (open index.html in browser)

---

## Security Notes

- Never commit sensitive API keys to public repositories
- Use environment variables for production
- Enable HTTPS (most hosting providers do this automatically)
- Regularly update your dependencies

---

**Your website will be live and accessible worldwide once deployed!** 🌐





>>>>>>> Updated files
