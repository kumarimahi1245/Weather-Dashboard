# Weather Card Component

## 🌦 Overview
This is a React-based Weather Card component that fetches real-time weather data using the API. It displays temperature, humidity and wind speed for a given location. It also includes a dark/light mode toggle.

## 🚀 Features
- Fetches real-time weather data from OpenWeather API
- Displays temperature, humidity, wind speed, and weather conditions
- Responsive design using React 
- Loading indicator while fetching data

## 📌 Prerequisites
Make sure you have the following installed:
- **Node.js** (v14+ recommended)
- **npm** or **yarn**

## 🛠 Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weather-card.git
   ```
2. Navigate to the project directory:
   ```sh
   cd weather-card
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## 🔑 API Key
This project uses OpenWeather API. Get your free API key from [OpenWeather](https://openweathermap.org/api).

Replace the API key in `Card.js`:
```js
const key = "YOUR_API_KEY";
```

## 🚀 Usage
1. Start the development server:
   ```sh
   npm start
   ```
   or
   ```sh
   yarn start
   ```
2. Enter a city name to fetch the weather data.
3. Toggle between light and dark mode.

## 📂 File Structure
```
weather-card/
│── src/
│   │── components/
│   │   ├── Card.js  # Main Weather Card Component
│   │── App.js       # Root Component
│   │── index.js     # Entry Point
│── public/
│── package.json
│── README.md
```

## 🎨 Styling
Make sure you define CSS classes for styling in an external stylesheet, e.g., `styles.css`.

Example:
```css
.card.light {
  background-color: #ffffff;
  color: #000000;
}

.card.dark {
  background-color: #333333;
  color: #ffffff;
}
```

## 🛠 Technologies Used
- React.js
- Axios (for API requests)
- OpenWeather API
- React Icons
-

## 🐞 Known Issues
- If an invalid city name is entered, the UI may not show an error message.
- Dark mode may not persist after page refresh.



