@echo off
title Marp Presentation Builder
color 0A

echo ==========================================
echo   Marp Presentation Builder
echo   HTML, PPTX, PDF
echo ==========================================
echo.

cd /d "%~dp0"

REM Check Node.js
where node >nul 2>nul
if errorlevel 1 (
    echo ❌ Node.js not found!
    pause
    exit /b 1
)
echo ✅ Node.js found

REM Check Marp
where marp >nul 2>nul
if errorlevel 1 (
    echo 📦 Marp not found. Installing...
    call npm install -g @marp-team/marp-cli
)
echo ✅ Marp ready

echo.
echo 📖 Combining slides...
node combine-slides.js

if errorlevel 1 (
    echo ❌ Failed to combine slides
    pause
    exit /b 1
)

echo.
echo 🚀 Building outputs...
if not exist output mkdir output

echo 🌐 Generating HTML...
marp combined.md -o output/index.html --html

echo 📊 Generating PPTX...
marp combined.md -o output/slides.pptx --pptx

echo 📄 Generating PDF...
marp combined.md -o output/slides.pdf --pdf

echo.
echo ==========================================
echo ✅ Build Complete! 🎉
echo 📂 Location: %cd%\output\
echo 📄 Files: index.html, slides.pptx, slides.pdf
echo ==========================================

explorer output
pause