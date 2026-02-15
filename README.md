# Open Claw Health Dashboard
A Node.js/Express web application that visualizes health data from Markdown logs into an interactive dashboard.

## Project Overview

The Open Claw Health Dashboard transforms daily health logs (stored as Markdown files) into a user-friendly web interface. It reads structured health data and presents it in an organized, visual format for easy tracking and analysis.

## Project Structure



## Technology Stack

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Data Format**: Markdown files with structured sections
- **API**: RESTful endpoints for data retrieval

## Data Flow

Health logs are stored as Markdown files. The Express backend reads these files, parses the structured data, and serves it through API endpoints. The frontend JavaScript fetches this data and displays it in an organized dashboard format.

## Data Format

Health logs are stored as Markdown files with the following structure:



## Getting Started

1. **Clone the repository**
   

2. **Install dependencies**
   

3. **Start the application**
   

4. **Open the dashboard**
   Navigate to  in your web browser

## Features

- **Daily Health Tracking**: View individual day health logs
- **Weekly Overview**: Aggregate data for weekly trends
- **Monthly Summary**: Long-term health pattern analysis
- **Interactive Interface**: Clean, responsive dashboard design
- **Data Visualization**: Structured display of health metrics

## API Endpoints

-  - Retrieve health data
  -  can be , , or  (defaults to day)
-  - Serve the dashboard interface

## Adding New Health Logs

1. Create a new Markdown file in the  directory
2. Follow the format shown above
3. Name the file 
4. The dashboard will automatically detect and display new logs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on the [GitHub repository](https://github.com/ravisharma46/open-claw-health-dashboard/issues).

---

**Built with 💗 for Open Claw Health tracking**
