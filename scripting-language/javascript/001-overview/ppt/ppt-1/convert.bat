@echo off
title JavaScript Presentation Builder
color 0A

echo ==========================================
echo   JavaScript Complete Guide Generator
echo ==========================================
echo.

cd /d "%~dp0"

REM Check if slides directory exists
if not exist slides (
    echo ❌ Error: 'slides' directory not found!
    echo Please create a 'slides' folder with your .md files
    pause
    exit /b 1
)

REM Check if there are any markdown files
dir /b slides\*.md >nul 2>nul
if errorlevel 1 (
    echo ❌ Error: No .md files found in 'slides' directory!
    pause
    exit /b 1
)

echo 📖 Found slide files:
dir /b slides\*.md
echo.

REM Install marp2pptx if not installed
where marp2pptx >nul 2>nul
if errorlevel 1 (
    echo 📦 Installing marp2pptx...
    npm install -g marp2pptx
    echo.
)

echo 🚀 Building presentation...
echo.

node convert.js

if errorlevel 1 (
    echo.
    echo ❌ Error occurred during build
) else (
    echo.
    echo ==========================================
    echo ✅ Presentation created successfully!
    echo 📂 Location: %cd%\output\
    echo ==========================================
)

echo.
pause