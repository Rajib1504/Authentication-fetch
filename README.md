# 🔐 Authentication App

A modern, responsive authentication application built with React, featuring user registration, login, logout, and profile management. The app uses a clean, dark-themed UI with smooth animations and toast notifications.

## ✨ Features

### 🔐 Authentication
- **User Registration** - Create new accounts with email, username, password, and role selection
- **User Login** - Secure login with username and password
- **Auto Logout** - Automatic session management and logout functionality
- **Protected Routes** - Automatic redirection based on authentication status

### 👤 User Profile
- **Profile Dashboard** - Beautiful user profile page with account information
- **Avatar Display** - Dynamic avatar with user's first initial
- **Account Details** - Display email, role, username, and account status
- **Role-based UI** - Different styling for Admin vs User roles

### 🎨 UI/UX
- **Dark Theme** - Modern dark gradient background
- **Responsive Design** - Works on desktop and mobile devices
- **Password Visibility Toggle** - Eye icon to show/hide passwords
- **Loading States** - Spinner animations during API calls
- **Toast Notifications** - Success/error messages with react-hot-toast
- **Form Validation** - Client-side form validation

### 🔧 Technical Features
- **Context API** - Global state management for authentication
- **Local Storage** - Persistent login sessions
- **API Integration** - RESTful API calls to backend
- **Error Handling** - Comprehensive error handling and user feedback
- **Modern React** - Hooks, functional components, and best practices

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **State Management:** React Context API
- **Notifications:** React Hot Toast
- **Icons:** Heroicons (via SVG)
- **HTTP Client:** Fetch API

## 🚀 API Endpoints

The app integrates with the following API endpoints:

- `POST /api/v1/users/register` - User registration
- `POST /api/v1/users/login` - User authentication
- `GET /api/v1/users/current-user` - Get current user details
- `POST /api/v1/users/logout` - User logout

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rajib1504/Authentication-fetch.git
   cd authentication-fetch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Usage

### Registration Flow
1. Navigate to `/register`
2. Fill in email, username, password, and select role (USER/ADMIN)
3. Click "Register" - you'll be redirected to login page
4. Login with your credentials
5. Access your profile dashboard

### Authentication Flow
- **Unauthenticated users** are redirected to `/login`
- **Authenticated users** accessing `/login` or `/register` are redirected to `/`
- **Logout** clears session and redirects to login

### User Roles
- **USER**: Standard user access
- **ADMIN**: Administrator access (displayed with different styling)

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar with logout
│   ├── PasswordInput.jsx   # Reusable password input with toggle
│   └── Spinner.jsx         # Loading spinner component
├── context/
│   └── AuthContext.jsx     # Authentication state management
├── pages/
│   ├── Home.jsx            # User profile dashboard
│   ├── Login.jsx           # Login page
│   └── Register.jsx        # Registration page
├── router/
│   └── Router.jsx          # Application routing
├── index.css               # Global styles and Tailwind imports
└── main.jsx                # Application entry point
```

## 🎯 Key Components

### AuthContext
- Manages global authentication state
- Handles API calls for login, logout, and user fetching
- Provides authentication methods to all components

### PasswordInput
- Reusable component with password visibility toggle
- Eye icon changes based on visibility state
- Supports all standard input props

### Home Dashboard
- Displays user profile information
- Shows account statistics and status
- Responsive grid layout with cards

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup

The app uses the free API at `https://api.freeapi.app` for backend services. No additional environment configuration is required.

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🎨 Styling

- **Color Scheme**: Dark theme with yellow accents
- **Typography**: Clean, modern fonts
- **Animations**: Smooth transitions and hover effects
- **Components**: Consistent spacing and styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is part of the Chai Code Cohort 2026 assignments.

## 👨‍💻 Author

**Rajib1504** - [GitHub](https://github.com/Rajib1504)

---

Built with ❤️ using React and modern web technologies.
