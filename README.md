# World Explore

World Explore is a web application that provides detailed information about countries across the globe. It offers an interactive and user-friendly interface to explore data such as population, capital city, neighboring countries, currencies, native names, languages, and more.

## Table of Contents

- [World Explore](#world-explore)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Demo](#demo)
  - [Technologies Used](#technologies-used)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Features

- **Search and Filter**:
  - Search for any country using the search box at the top of the page.
  - Filter countries based on their continent.

- **Country Cards**:
  - The homepage displays country cards with flags, names, population, and capital cities.
  - Click on a country card to view more detailed information about the selected country.

- **Responsive Design**:
  - Fully responsive layout that works on desktop, tablet, and mobile devices.

- **Dark Mode**:
  - Toggle between light and dark modes for comfortable viewing.

## Demo

[View Live Demo](https://world-explore.vercel.app/)

Preview:

![World Explore Preview](preview.jpg)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for production
- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Wondahs/countries
   cd countries
   ```

2. **Install dependencies**:

   Using pnpm(RECOMMENDED):

   ```bash
   pnpm install
   ```

   Or, using npm:

   ```bash
   npm install
   ```

3. **Run the development server**:
   Using pnpm(RECOMMENDED):

   ```bash
   pnpm run dev
   ```

   Or, using npm:

   ```bash
   npm dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

1. Use the search bar to find a specific country.
2. Click on the continent filters to view countries from a particular region.
3. Click on a country card to view detailed information about that country.
4. Toggle dark mode using the switch in the navigation bar.

## API

The application uses a locally hosted JSON file to provide country data. An API is implemented to read this file, parse it to JSON, and send it to the frontend for rendering. The API endpoints include:

- `/api/countries`: Returns all countries
- `/api/countries/:id`: Returns data for a specific country

## Deployment

The project is deployed on [Vercel](https://vercel.com/). You can view the live application [here](https://world-explore.vercel.app/).

For deploying your own instance:

1. Fork this repository
2. Sign up for a Vercel account
3. Connect your GitHub account to Vercel
4. Deploy the forked repository

## Contributing

Contributions to enhance the functionality and appearance of World Explore are welcome! Here's how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please read [CONTRIBUTION GUIDELINES](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Github/Email - [Wondahs](https://twitter.com/wondahs) / <wondersprince1@gmail.com>

Project Link: [Countries](https://github.com/Wondahs/countries)
