"""
FastAPI Hello World with CDN Integration
Simple single-file FastAPI application
"""

from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from datetime import datetime
import uvicorn

# ============================================================
# 1. CREATE APP
# ============================================================

app = FastAPI(
    title="FastAPI Hello World",
    description="FastAPI with CDN Integration",
    version="1.0.0"
)

# ============================================================
# 2. TEMPLATES
# ============================================================

templates = Jinja2Templates(directory="app/templates")

# ============================================================
# 3. CDN CONFIGURATION
# ============================================================

CDN = {
    # CSS Libraries
    "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
    "bootstrap_icons": "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css",
    "font_awesome": "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
    
    # JavaScript Libraries
    "alpinejs": "https://cdn.jsdelivr.net/npm/alpinejs@3.14.1/dist/cdn.min.js",
    "axios": "https://cdn.jsdelivr.net/npm/axios@1.6.5/dist/axios.min.js",
    "htmx": "https://unpkg.com/htmx.org@1.9.10"
}

# ============================================================
# 4. ROUTES
# ============================================================

@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    """Home page with CDN integration"""
    
    features = [
        {"icon": "fa-cloud", "title": "CDN Integration", "desc": "Fast delivery via CDN"},
        {"icon": "fa-bolt", "title": "Lightning Fast", "desc": "ASGI async performance"},
        {"icon": "fa-shield", "title": "Type Safe", "desc": "Pydantic validation"},
        {"icon": "fa-code", "title": "Modern Python", "desc": "Async/await support"}
    ]
    
    libraries = [
        {"name": "Bootstrap", "version": "5.3.2", "type": "CSS"},
        {"name": "Bootstrap Icons", "version": "1.11.3", "type": "CSS"},
        {"name": "Font Awesome", "version": "6.5.1", "type": "CSS"},
        {"name": "Alpine.js", "version": "3.14.1", "type": "JavaScript"},
        {"name": "Axios", "version": "1.6.5", "type": "JavaScript"},
        {"name": "HTMX", "version": "1.9.10", "type": "JavaScript"}
    ]
    
    return templates.TemplateResponse(
        "index.html",
        {
            "request": request,
            "title": "FastAPI Hello World with CDN",
            "message": "Hello from FastAPI with CDN! 🚀",
            "features": features,
            "libraries": libraries,
            "cdn": CDN,
            "timestamp": datetime.now().isoformat(),
            "version": "1.0.0"
        }
    )

@app.get("/health")
async def health():
    """Health check endpoint"""
    return {
        "status": "OK",
        "timestamp": datetime.now().isoformat(),
        "uptime": "N/A",
        "version": "1.0.0",
        "cdn_enabled": True
    }

# ============================================================
# 5. RUN SERVER
# ============================================================

if __name__ == "__main__":
    uvicorn.run(
        "main:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )