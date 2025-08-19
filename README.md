# PeerUp

## Project Overview
**PeerUp** is a centralized digital platform designed to connect university students with all the clubs and events on their campus. It allows students to easily explore, join, and engage with clubs, while giving club coordinators and university administrators tools to manage events, track participation, and communicate efficiently.

The platform is currently in official use within the university, aiming to simplify club discovery, enhance participation, and streamline communication between students and organizations.

## Key Features
- Centralized directory of all university clubs
- Student registration and profile management
- Club pages with descriptions, events, and team members
- Event calendar with reminders and RSVP functionality
- Role-based access: Student, Club Coordinator, Core Admin
- Admin dashboard to monitor club activity and student engagement
- Real-time notifications about upcoming events
- Machine learning-based personalized event recommendations

## Tech Stack
- **Frontend**: ReactJS, HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: Axios (API communication), Git/GitHub (version control)

## Architecture Overview
- **Frontend** communicates with **Backend APIs** via HTTP requests (Axios/Fetch).
- **Backend** handles authentication, club/event management, and notification systems.
- **MongoDB** stores user data, club details, event information, and participation records.
- **Mongoose** structures the NoSQL database with schemas for Users, Clubs, Events, and Notifications.

## How to Run the Project

### Backend Setup
1. Install backend dependencies:
    ```bash
    cd server
    npm install
    ```
2. Create a `.env` file and add:
    ```
    ACCESS_TOKEN_SECRET=youraccesstokensecret
    REFRESH_TOKEN_SECRET=yourrefreshtokensecret
    MONGO_URI=yourmongodbconnectionstring
    ```
3. Start the backend server:
    ```bash
    npm start
    ```

### Frontend Setup
1. Install frontend dependencies:
    ```bash
    cd client
    npm install
    ```
2. Start the frontend application:
    ```bash
    npm start
    ```

### Access
- Open browser and go to `http://localhost:3000`

## Folder Structure


## Screenshots
(Add screenshots later for:)
- Home page showing clubs
- Individual club page
- Event calendar
- Admin dashboard

## Future Scope
- Expand platform for multi-university support
- Mobile app development for PeerUp
- Advanced Machine Learning for smarter event recommendations
- Real-time chat integration between club members
- Gamification features (badges, points) to boost engagement
- Sponsorship and event monetization modules

## Conclusion
PeerUp is revolutionizing student engagement by providing a unified space where students can discover clubs, stay updated on events, and participate actively in university life. By combining a powerful frontend, a secure backend, and a flexible NoSQL database, PeerUp stands ready for expansion and future enhancements.

























# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
