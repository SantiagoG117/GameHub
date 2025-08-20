# GameHub

GameHub is a modern web application for browsing, searching, and discovering video games. It features a responsive UI, genre and platform filtering, infinite scrolling, and detailed game pages with media and attributes. The app leverages the RAWG Video Games Database API for its data.

## Features

- Browse and search for games by genre, platform, and more
- Infinite scrolling game grid
- Responsive design for desktop and mobile
- Detailed game pages with screenshots, trailers, and attributes
- Fast performance with caching (React Query) and state management (Zustand)

## Technologies Used

- **React 18** – UI library
- **TypeScript** – Type safety
- **Vite** – Fast development/build tool
- **Chakra UI v3** – Component library and theming
- **@tanstack/react-query** – Data fetching and caching
- **Zustand** – State management
- **React Router v7** – Routing
- **Axios** – HTTP client
- **React Icons** – Icon library
- **@splidejs/react-splide** – Carousel for screenshots/trailers
- **Framer Motion** – Animations
- **next-themes** – Theme management

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/SantiagoG117/GameHub.git
   cd game-hub
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App

Start the development server:
```sh
npm run dev
```
The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

### Building for Production

To build the app for production:
```sh
npm run build
```
To preview the production build:
```sh
npm run preview
```

## Project Structure

- `src/components/` – Reusable UI components
- `src/pages/` – Page components (Home, Game Details, etc.)
- `src/hooks/` – Custom React hooks for data fetching and logic
- `src/entities/` – TypeScript interfaces for API data
- `src/services/` – API client and utility functions
- `src/stateManagement/` – Zustand store for global state
- `src/assets/` – Static images and assets

## API setup:

This project uses the [RAWG Video Games Database API](https://rawg.io/apidocs) for game data. You'll need to get a RAWG API to access the key
1. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
2. In set up an environment variable under the name VITE_RAWG_API_KEY and save the API key as value.

## License
This project was created for self-treaining purposes.

---
