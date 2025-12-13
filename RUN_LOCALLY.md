<<<<<<< HEAD
# How to Run the Website Locally

## Method 1: Simple - Just Open the File (Easiest)

1. **Navigate to your project folder**
   - Go to: `C:\Users\USER\Billing_Website`

2. **Double-click `index.html`**
   - It will open in your default web browser
   - The website will work immediately!

**Note:** Some features might have limitations when opened this way (like file:// protocol restrictions)

---

## Method 2: Using a Local Server (Recommended)

### Option A: Using Python (If Installed)

1. **Open PowerShell or Command Prompt**
   - Press `Win + R`, type `powershell`, press Enter

2. **Navigate to your project folder**
   ```powershell
   cd C:\Users\USER\Billing_Website
   ```

3. **Start a local server**
   
   **For Python 3:**
   ```powershell
   python -m http.server 8000
   ```
   
   **For Python 2:**
   ```powershell
   python -m SimpleHTTPServer 8000
   ```

4. **Open your browser**
   - Go to: `http://localhost:8000`
   - Your website is now running locally!

5. **To stop the server**
   - Press `Ctrl + C` in the terminal

---

### Option B: Using Node.js (If Installed)

1. **Install http-server globally** (one-time setup)
   ```powershell
   npm install -g http-server
   ```

2. **Navigate to your project folder**
   ```powershell
   cd C:\Users\USER\Billing_Website
   ```

3. **Start the server**
   ```powershell
   http-server -p 8000
   ```

4. **Open your browser**
   - Go to: `http://localhost:8000`

---

### Option C: Using VS Code Live Server Extension

1. **Install VS Code** (if not already installed)
   - Download from: https://code.visualstudio.com

2. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install

3. **Open your project**
   - File → Open Folder → Select `Billing_Website`

4. **Start Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your website will open automatically in the browser!

---

## Quick Start Script (Easiest for Windows)

I can create a simple batch file that starts the server for you automatically.

---

## Troubleshooting

### If images don't load:
- Make sure you're using Method 2 (local server) instead of Method 1
- Some browsers block local file access for security

### If features don't work:
- Use a local server (Method 2) instead of opening the file directly
- This ensures all JavaScript and features work properly

### Port already in use:
- If port 8000 is busy, use a different port:
  - Python: `python -m http.server 8080`
  - Node: `http-server -p 8080`
  - Then visit: `http://localhost:8080`

---

## Recommended: Use Python Method

If you have Python installed (most Windows 10/11 systems do), this is the easiest:

1. Open PowerShell in your project folder
2. Run: `python -m http.server 8000`
3. Open browser to: `http://localhost:8000`

That's it! Your website is running locally! 🎉

=======
# How to Run the Website Locally

## Method 1: Simple - Just Open the File (Easiest)

1. **Navigate to your project folder**
   - Go to: `C:\Users\USER\Billing_Website`

2. **Double-click `index.html`**
   - It will open in your default web browser
   - The website will work immediately!

**Note:** Some features might have limitations when opened this way (like file:// protocol restrictions)

---

## Method 2: Using a Local Server (Recommended)

### Option A: Using Python (If Installed)

1. **Open PowerShell or Command Prompt**
   - Press `Win + R`, type `powershell`, press Enter

2. **Navigate to your project folder**
   ```powershell
   cd C:\Users\USER\Billing_Website
   ```

3. **Start a local server**
   
   **For Python 3:**
   ```powershell
   python -m http.server 8000
   ```
   
   **For Python 2:**
   ```powershell
   python -m SimpleHTTPServer 8000
   ```

4. **Open your browser**
   - Go to: `http://localhost:8000`
   - Your website is now running locally!

5. **To stop the server**
   - Press `Ctrl + C` in the terminal

---

### Option B: Using Node.js (If Installed)

1. **Install http-server globally** (one-time setup)
   ```powershell
   npm install -g http-server
   ```

2. **Navigate to your project folder**
   ```powershell
   cd C:\Users\USER\Billing_Website
   ```

3. **Start the server**
   ```powershell
   http-server -p 8000
   ```

4. **Open your browser**
   - Go to: `http://localhost:8000`

---

### Option C: Using VS Code Live Server Extension

1. **Install VS Code** (if not already installed)
   - Download from: https://code.visualstudio.com

2. **Install Live Server Extension**
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for "Live Server"
   - Click Install

3. **Open your project**
   - File → Open Folder → Select `Billing_Website`

4. **Start Live Server**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your website will open automatically in the browser!

---

## Quick Start Script (Easiest for Windows)

I can create a simple batch file that starts the server for you automatically.

---

## Troubleshooting

### If images don't load:
- Make sure you're using Method 2 (local server) instead of Method 1
- Some browsers block local file access for security

### If features don't work:
- Use a local server (Method 2) instead of opening the file directly
- This ensures all JavaScript and features work properly

### Port already in use:
- If port 8000 is busy, use a different port:
  - Python: `python -m http.server 8080`
  - Node: `http-server -p 8080`
  - Then visit: `http://localhost:8080`

---

## Recommended: Use Python Method

If you have Python installed (most Windows 10/11 systems do), this is the easiest:

1. Open PowerShell in your project folder
2. Run: `python -m http.server 8000`
3. Open browser to: `http://localhost:8000`

That's it! Your website is running locally! 🎉





>>>>>>> Updated files
