# Insectopedia Client

Welcome to the **Insectopedia Client** project! This is the front-end application for the Insectopedia platform, designed to provide users with an interactive and informative experience about various (literal) bugs.

## Features

- **Dynamic UI**: Explore a rich, interactive interface for browsing and searching insect data.
- **Bug Encyclopedia**: View detailed information about various insects, including images, facts, and taxonomy.
- **Reusable Components**: Built with modular, reusable React components for maintainability and scalability.
- **Mock API Support**: Uses Mock Service Worker (`src/mocks/`) for local development and testing without a backend.
- **TypeScript Support**: Ensures type safety and improved developer experience.
- **Testing**: Includes unit and integration tests with coverage reporting.
- **Code Quality**: Enforced by ESLint, Prettier, Husky, and Commitlint for consistent code style and commit standards.
- **Continuous Integration**: Automated workflows for linting, testing, and code quality analysis with SonarCloud.
- **Environment Configuration**: Easily configurable API endpoints and settings via environment variables.

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

4. By default, the Vite development server will start at `http://localhost:5173`, though the port may vary if it's already in use.

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
│   ├── components/        # Reusable components
│   ├── data/              # Data and mock data
│   ├── mocks/             # Mock service worker handlers
│   ├── pages/             # Page components
│   └── styles/            # Global styles
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
