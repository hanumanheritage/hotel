<<<<<<< HEAD
# Hanuman Heritage - Local Server PowerShell Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Hanuman Heritage - Local Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting local server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your website will be available at:" -ForegroundColor Yellow
Write-Host "  http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Try to start Python HTTP server
try {
    python -m http.server 8000
} catch {
    Write-Host ""
    Write-Host "ERROR: Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Python from: https://www.python.org" -ForegroundColor Yellow
    Write-Host "OR use one of these methods:" -ForegroundColor Yellow
    Write-Host "  1. Double-click index.html to open directly" -ForegroundColor White
    Write-Host "  2. Install Node.js and use: npm install -g http-server" -ForegroundColor White
    Write-Host "  3. Use VS Code with Live Server extension" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter to exit"
}

=======
# Hanuman Heritage - Local Server PowerShell Script

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Hanuman Heritage - Local Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Starting local server..." -ForegroundColor Green
Write-Host ""
Write-Host "Your website will be available at:" -ForegroundColor Yellow
Write-Host "  http://localhost:8000" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Try to start Python HTTP server
try {
    python -m http.server 8000
} catch {
    Write-Host ""
    Write-Host "ERROR: Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install Python from: https://www.python.org" -ForegroundColor Yellow
    Write-Host "OR use one of these methods:" -ForegroundColor Yellow
    Write-Host "  1. Double-click index.html to open directly" -ForegroundColor White
    Write-Host "  2. Install Node.js and use: npm install -g http-server" -ForegroundColor White
    Write-Host "  3. Use VS Code with Live Server extension" -ForegroundColor White
    Write-Host ""
    Read-Host "Press Enter to exit"
}





>>>>>>> Updated files
