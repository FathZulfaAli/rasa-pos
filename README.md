# RASA POS System

RASA POS System is a modern, lightweight, and offline-capable point-of-sale (POS) application. Built with Electron and Next.js, it features inventory management, and a sales tracking for a seamless user experience.

## Features

- **Offline Capability**: Uses SQLite3 for database management.
- **Modern UI**: Built with Next.js for a fast and intuitive interface.
- **Inventory Management**: Efficiently manage and track inventory levels.
- **Sales Tracking**: Monitor and analyze sales data.

## Usage

Run the executable to launch the app.

## Technologies Used

- **Electron**: For creating the desktop application.
- **Next.js**: For building the user interface.
- **SQLite3**: As the local database for offline data management.
- **Electron Builder**: For packaging the app for production.

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

### Notes

For development, ensure that the Next.js server is running before Electron loads the application. If you encounter any issues, check the `console.log` output for error details.
