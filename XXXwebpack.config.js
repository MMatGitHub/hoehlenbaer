const path = require('path');

module.exports = {
  entry: './main.js', // Entry point of your application
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve static files from this directory
    port: 8080, // Port to run the development server on
    hot: true, // Enable Hot Module Replacement (HMR) for live reloading
  },
};
