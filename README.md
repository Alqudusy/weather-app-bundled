# Weather App with Webpack

This is a weather application that uses the **OpenWeather API** to fetch real-time weather data based on the user's current geolocation or a searched city. The project is bundled using **Webpack** for better asset management and security. Additionally, **JavaScript obfuscation** is applied for enhanced code protection.

## Features

- Fetches weather information based on geolocation (if granted by the user).
- Allows users to search for weather data by city name.
- Displays weather details such as temperature, humidity, and weather description.
- Shows weather icons corresponding to the current conditions.
- Fully bundled with **Webpack**.
- Securely manages API keys using environment variables.
- JavaScript code is obfuscated for security using Webpack obfuscator.

## Project Structure

```
weather-app-webpack/
├── dist/                   # Output folder for bundled files
├── node_modules/            # Installed dependencies
├── src/                     # Source files for your app
│   ├── index.js             # Main JavaScript file
│   └── index.html           # Main HTML file
├── .env                     # Environment variables (e.g., API key)
├── .gitignore               # Files to ignore in version control
├── webpack.config.js        # Webpack configuration
├── package.json             # npm dependencies and scripts
└── README.md                # Project description (this file)
```

## Demo

You can view the project in your browser by cloning the repository and following the steps below to run it locally.

## Setup Instructions

To set up this project locally, follow the steps below.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/weather-app-webpack.git
cd weather-app-webpack
```

### 2. Install Dependencies

Make sure you have **Node.js** and **npm** installed. Then run:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory of your project to store your **OpenWeather API key**. This is done to keep the API key secure. Add the following line to your `.env` file:

```
API_KEY=your_openweather_api_key
```

### 4. Run the Application in Development Mode

To start a local development server, run:

```bash
npm run start
```

Visit `http://localhost:9000` in your browser to see the app in action.

### 5. Build the Application for Production

To bundle and obfuscate your JavaScript code for production:

```bash
npm run build
```

This will create a `dist/` directory with the final bundled code.

## Webpack Configuration

This project uses **Webpack** for module bundling, including:

- **`babel-loader`** for transpiling modern JavaScript.
- **`html-webpack-plugin`** to automatically generate and link the HTML file.
- **`webpack-obfuscator`** for obfuscating JavaScript files.
- **`dotenv`** for securely managing environment variables (e.g., API keys).

## Technologies Used

- **JavaScript (ES6+)**
- **HTML**
- **CSS**
- **Webpack**
- **OpenWeather API**

## Future Enhancements

- Add a feature for 5-day weather forecasts.
- Implement unit tests for the application.
- Add error handling for invalid city names.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

This README should give a clear idea of the project’s purpose, structure, and how to get it up and running. Be sure to replace `"your-username"` with your actual GitHub username in the repository URL, and customize any parts as necessary.
