# 🏸 Badminton Club - Modern 2025 Website

A state-of-the-art badminton club website featuring cutting-edge web design trends of 2025.

## ✨ Modern Features

### 🎨 Design Trends 2025
- **Minimalism + Glassmorphism**: Clean, white-space driven layout with subtle frosted-glass panels
- **Dark Mode Toggle**: Seamless light/dark mode switching with WCAG-compliant contrast
- **Micro-interactions**: Refined hover/focus effects on buttons and icons
- **Variable Fonts**: Inter Variable for fast, flexible rendering
- **Premium Palette**: Neutral base (off-white, light gray) with navy/coral accents

### 🚀 Performance & Sustainability  
- **Optimized Images**: Next.js Image component with lazy loading
- **Clean Code**: Minimal CSS and efficient component structure
- **Reduced Motion**: Respects user preferences for accessibility
- **Fast Loading**: Optimized fonts, animations, and assets

### 💫 Interactive Elements
- **Parallax Scrolling**: Lightweight 3D elements for dynamic feel
- **Smooth Animations**: CSS-only animations with reduced motion support
- **Glassmorphism Components**: Backdrop blur effects for modern depth
- **Responsive Design**: Mobile-first approach with fluid layouts

### 🎯 User Experience
- **Single Page Flow**: Banner → About → Team → Highlights → Contact
- **Accessibility**: WCAG compliant focus states and keyboard navigation
- **Touch Friendly**: Optimized for mobile devices and touch interactions
- **Performance First**: Lazy loading and optimized rendering

### 🔐 Admin System
- **Secure Login**: Hardcoded admin credentials with session management
- **Video Management**: Submit and manage YouTube videos with categories
- **Cloud Storage**: Vercel Blob storage for persistent data
- **Protected Routes**: Middleware protection for admin pages

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Feather Icons (react-icons/fi)
- **Authentication**: Cookie-based sessions with js-cookie
- **Storage**: Vercel Blob for video data persistence
- **Fonts**: Inter Variable from Google Fonts
- **Deployment**: Vercel-ready configuration

## 🚀 Getting Started

### Environment Setup

No environment setup required! The admin system uses browser localStorage for simplicity.

For production with Vercel Blob (optional), create a `.env.local` file:

```bash
# Vercel Blob Storage Configuration (optional)
BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxx

# Next.js Configuration (optional)
NEXT_PUBLIC_SITE_URL=http://localhost:3002
```

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3002](http://localhost:3002) to view the website.

## 🔐 Admin Access

### Login Credentials
- **Username**: `admin`
- **Password**: `123456`

### Admin Features
1. **Login Page**: `/login` - Secure authentication with session management
2. **Admin Dashboard**: `/admin` - View, search, filter, and delete videos
3. **Video Submission**: `/submit-video` - Add new YouTube videos with metadata
4. **Protected Routes**: Middleware automatically protects admin areas

### Video Management
- Submit YouTube videos with title, description, category, and date
- Categories: Tournament, Friendly, Training, Highlights
- Additional metadata: Teams, Results, Duration
- Real-time YouTube preview in submission form
- Video gallery with embedded players in admin dashboard
- Search and filter functionality

## 📱 Page Structure

### Public Pages
- **Home (SPA)**: Hero → About → Team → Highlights → Contact
- **Album**: Photo gallery with category filtering
- **Matches**: YouTube video gallery from user submissions

### Admin Pages (Protected)
- **Login**: `/login` - Authentication form
- **Admin Dashboard**: `/admin` - Video management interface
- **Submit Video**: `/submit-video` - Video submission form

## 🎨 Design System

### Colors
```css
/* Primary Palette */
--navy-600: #2563eb    /* Primary CTA */
--coral-500: #f97316   /* Accent color */
--offwhite: #fafbfc    /* Background */
--mutedblack: #1f2937  /* Text */

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.1)
--glass-border: rgba(255, 255, 255, 0.2)
```

### Typography
- **Headings**: Inter Variable 650 weight
- **Body**: Inter Variable 450 weight  
- **Display**: Inter Variable 750 weight
- **Buttons**: Inter Variable 550 weight

### Components
- **Glass Cards**: Backdrop blur with subtle borders
- **Buttons**: Gradient backgrounds with micro-interactions
- **Forms**: Floating labels with focus states
- **Navigation**: Fixed glassmorphic header

## 🌟 Key Features

1. **Dark Mode**: System preference detection with manual toggle
2. **Glassmorphism**: Modern depth without heavy shadows
3. **Micro-interactions**: Subtle animations that delight users
4. **Accessibility**: Screen reader friendly with proper ARIA labels
5. **Performance**: Optimized for Core Web Vitals
6. **Responsive**: Mobile-first design approach
7. **SEO Ready**: Proper meta tags and semantic HTML
8. **Admin System**: Complete video management with authentication
9. **Cloud Storage**: Vercel Blob integration for data persistence

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Font Loading**: Variable fonts with optimal loading strategy
- **CSS Optimization**: Tailwind purging and minimal custom CSS
- **JavaScript**: Code splitting and tree shaking
- **Animations**: CSS-only animations with reduced motion support

## 🎭 Animations & Effects

- **Parallax**: Subtle background element movement
- **Fade In**: Staggered content reveals on scroll
- **Micro Bounce**: Button press feedback
- **Glow Effects**: Hover states for interactive elements
- **Float Animation**: Gentle movement for background elements

## 🔧 Development Notes

### Authentication
- Uses cookie-based sessions with 7-day expiration
- Hardcoded credentials (can be easily modified in `/src/lib/auth.ts`)
- Middleware protection for all `/admin/*` and `/submit-video/*` routes

### Data Storage
- Video metadata stored in browser localStorage (simple & fast)
- Automatic backup/restore functionality via JSON export/import
- Support for video categorization and metadata fields
- Easy migration to Vercel Blob or database later

### Security
- Client-side route protection with middleware
- Token validation with expiration checking
- Secure cookie configuration for production deployment

---