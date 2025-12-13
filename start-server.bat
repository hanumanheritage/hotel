<<<<<<< HEAD
@echo off
echo ========================================
echo   Hanuman Heritage - Local Server
echo ========================================
echo.
echo Starting local server...
echo.
echo Your website will be available at:
echo   http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Try Python 3 first
python -m http.server 8000 2>nul
if %errorlevel% neq 0 (
    REM Try Python 2
    python -m SimpleHTTPServer 8000 2>nul
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Python is not installed or not in PATH
        echo.
        echo Please install Python from: https://www.python.org
        echo OR use one of these methods:
        echo   1. Double-click index.html to open directly
        echo   2. Install Node.js and use: npm install -g http-server
        echo   3. Use VS Code with Live Server extension
        echo.
        pause
    )
)

=======
@echo off
echo ========================================
echo   Hanuman Heritage - Local Server
echo ========================================
echo.
echo Starting local server...
echo.
echo Your website will be available at:
echo   http://localhost:8000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

REM Try Python 3 first
python -m http.server 8000 2>nul
if %errorlevel% neq 0 (
    REM Try Python 2
    python -m SimpleHTTPServer 8000 2>nul
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Python is not installed or not in PATH
        echo.
        echo Please install Python from: https://www.python.org
        echo OR use one of these methods:
        echo   1. Double-click index.html to open directly
        echo   2. Install Node.js and use: npm install -g http-server
        echo   3. Use VS Code with Live Server extension
        echo.
        pause
    )
)





>>>>>>> Updated files
