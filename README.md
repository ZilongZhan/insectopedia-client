# Insectopedia Client

Welcome to the **Insectopedia Client** project! This is the front-end application for the Insectopedia platform, designed to provide users with an interactive and informative experience about various (literal) bugs.

## Features

- **Dynamic UI**: Explore a rich, interactive interface for browsing and searching insect data.
- **Bug Encyclopedia**: View detailed information about various insects, including images, facts, taxonomy, and classification.
- **Bug Reporting**: Submit new insect reports with validation and instant feedback.
- **Report Updating**: Edit and update existing insect reports with real-time validation.
- **Report Deletion**: Remove insect reports from the encyclopedia.
- **Favorites**: Mark bugs as favorites for quick access.
- **Pagination**: Efficiently browse large collections of insects.
- **Reusable Components**: Built with modular, reusable React components for maintainability and scalability.
- **Mock API Support**: Uses Mock Service Worker (`src/mocks/`) for local development and testing without a backend.
- **TypeScript Support**: Ensures type safety and improved developer experience.
- **Testing**: Includes unit and integration tests with coverage reporting using Vitest and React Testing Library.
- **Code Quality**: Enforced by ESLint, Prettier, Husky, and Commitlint for consistent code style and commit standards.
- **Continuous Integration**: Automated workflows for linting, testing, and code quality analysis with SonarCloud.
- **Environment Configuration**: Easily configurable API endpoints and settings via environment variables.

## Tech Stack

- **React** with **TypeScript**
- **Vite** for fast development and builds
- **Redux Toolkit** for state management
- **React Router** for navigation
- **Vitest** & **React Testing Library** for testing
- **Mock Service Worker (MSW)** for API mocking
- **ESLint**, **Prettier**, **Husky**, **Commitlint** for code quality

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/zilongzhan/insectopedia-client.git
   cd insectopedia-client
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   By default, the Vite development server will start at `http://localhost:5173`, though the port may vary if it's already in use.

### Environment Variables

Copy `.env.sample` to `.env` and adjust as needed:

```bash
cp .env.sample .env
```

Set the required variables (e.g., `VITE_API_URL`).

### Scripts

- **Start development server:**
  `npm run dev`
- **Build for production:**
  `npm run build`
- **Preview production build:**
  `npm run preview`
- **Run tests:**
  `npm run test`
- **Run tests in watch mode:**
  `npm run test:dev`
- **Run tests with coverage:**
  `npm run test:coverage`
- **Lint code:**
  `npm run lint`

### Code Quality

- **Linting:** Uses [ESLint](eslint.config.js) with recommended settings.
- **Formatting:** Uses [Prettier](package.json).
- **Commit hooks:** [Husky](.husky/) and [Commitlint](commitlint.config.js) enforce commit message standards and run checks before commits.
- **Continuous Integration:**
  - [SonarCloud](.github/workflows/sonar.yml) for code quality and coverage.
  - [Audit workflow](.github/workflows/audit.yml) for code and dependency checks.

## Project Structure

```
insectopedia-client/
├── public/                # Static assets
├── src/                   # Source code
│   ├── bug/               # Bug-related features and components
│   ├── data/              # Data and mock data
│   ├── mocks/             # Mock service worker handlers
│   ├── ui/                # Generic UI components
│   ├── hooks/             # Custom React hooks
│   ├── slice/             # Redux slices
│   └── store/             # Redux store setup
├── coverage/              # Test coverage reports
├── .github/               # GitHub workflows
├── .husky/                # Git hooks
├── package.json           # Project metadata and dependencies
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, please reach out to the project maintainers.
