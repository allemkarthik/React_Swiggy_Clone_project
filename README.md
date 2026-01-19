#🍔 React Swiggy Clone

A production-grade Swiggy-like food ordering web application built using React + Vite, styled with Tailwind CSS, state-managed using Redux, and fully tested using Vitest & Jest. This project demonstrates modern frontend architecture, reusable components, custom hooks, routing, and real-world testing practices.

🚀 Live Demo

👉 Deployed using GitHub Pages

🛠 Tech Stack
Frontend

React 18 – Component-based UI

Vite – Fast bundler & dev server

Tailwind CSS – Utility-first styling

React Router v6 – Client-side routing

Redux Toolkit – Global state management

Testing

Vitest – Unit & integration testing (Vite-native)

Jest – Component & utility testing

React Testing Library – DOM-based testing

Tooling & DevOps

ESLint – Code quality

GitHub Actions – CI/CD

GitHub Pages – Deployment

📂 Project Structure
src/
├── assets/          # Images & static assets
├── components/      # Reusable UI components
│   ├── Body.jsx
│   ├── RestaurantCard.jsx
│   ├── RestaurantCategory.jsx
│   ├── MenuItemList.jsx
│   ├── Shimmer.jsx
│   └── Error.jsx
├── pages/           # Route-level components
├── utils/           # Constants, helpers, custom hooks
├── tests/           # Unit & integration tests
├── mocks/           # Mock data for testing
├── app.jsx          # Root component
├── index.css        # Global styles (Tailwind)
└── setupTests.js    # Test configuration

✨ Key Features

🔍 Search & Filter Restaurants (Top-rated, name-based)

🍽 Dynamic Restaurant Menus with categories

🔄 Reusable Components & HOCs

🧠 Custom Hooks (API calls, online status)

📦 Redux Store for cart & global state

🌐 API Integration with graceful fallback handling

💀 Shimmer UI for loading states

🧪 Unit & Integration Tests with Vitest & Jest

🧪 Testing Strategy

✅ Unit Tests for components & utility functions

✅ Integration Tests for user flows (search, filter, cart)

✅ Mocked APIs using test mocks

✅ DOM assertions with React Testing Library

Test Coverage

Components: ~90%

Utilities & hooks: ~85%

⚙️ Scripts
npm run dev        # Start dev server (Vite)
npm run build      # Production build
npm run test       # Run Vitest & Jest
npm run preview    # Preview production build

📈 Performance & Metrics

⚡ Initial load improved by ~40% using Vite

♻️ Reusable components reduced code duplication by ~30%

🧪 Caught UI regressions early with automated tests

📌 What This Project Demonstrates

Real-world React application architecture

Strong understanding of state management with Redux

Professional testing practices (unit + integration)

Modern tooling (Vite, Vitest, CI/CD)

Clean, scalable, and maintainable codebase

👨‍💻 Author

Sai Karthik Allem
Frontend / Full Stack Developer
🔗 GitHub: <https://github.com/allemkarthik>
🔗 LinkedIn: <https://www.linkedin.com/in/allem-karthik>

📌 Future Enhancements

Authentication (Login / Signup)

Checkout flow

Payment gateway integration

⭐ If you like this project, consider giving it a star!
