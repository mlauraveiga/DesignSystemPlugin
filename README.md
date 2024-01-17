# Nebula. - Figma Plugin
![Bg](https://i.imgur.com/GATcWUT.png "Bg")

## Introduction

Nebula is a groundbreaking Figma plugin designed to streamline design workflows and enhance collaboration between designers, developers, and stakeholders. In the rapidly evolving digital landscape, Nebula stands as a testament to the importance of design systems, offering a user-friendly solution to create, manage, and apply these systems effectively.

Nebula is divided into two main modes:

1. **Viewer Mode**: Enables product designers to access and consult the design system.
2. **Editor Mode**: Allows system designers to generate, document, and manage design systems.

This project also includes a simple webpage to promote and disseminate the plugin.

## Prerequisites

Before installing Nebula, ensure you have the following installed:

- [Node.js](https://nodejs.org/): A runtime environment for executing JavaScript code. Npm (Node Package Manager) is included and used for managing project dependencies.

## Installation

Follow these steps to install and set up Nebula:

### Step 1: Clone the Repository

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Run the following command:
   ```bash
   git clone [repository URL]
   ```
*Replace [repository URL] with the URL of the Nebula GitHub repository.*

### Step 2: Navigate to the Project Directory
1. Change directory to the cloned repository:
```
cd [project-name]
```
*Replace [project-name] with the name of the folder created by the cloning process.*

### Step 3: Install Dependencies
1. Within the project directory, run:
```bash
npm install
```
to install all the dependencies needed in the project.

## Setting Up Figma
1. Open Figma Desktop Application.
2. Click on the “Resources” button in the top bar.
3. Select the “Plugins” option.
4. Switch from “Recents and saved” to “Development”.
5. Import the plugin using the manifest.json file from the project directory

## Running the Application
After setting up, you can start the application with the following steps:
1. Simulate the database to use the mock data inside of the app:
```bash
npx json-server --watch src/data/db.json --port 8000
```
2. In the project directory, execute:
```bash
npm run build:watch
```
to run the project in "watch mode" this facilitates the hot reloads between figma and development
or simply run:
```bash
npm start
```
or
```bash
npm run build
```
to build the project without hot reloads.

## Conclusion
Nebula aims to revolutionize the way design systems are created, managed, and utilized, fostering enhanced cooperation and productivity in the design workflow. We welcome contributions and suggestions to improve this project.

**Happy Designing with Nebula!**

------------

*For more information or assistance, feel free to open an issue in the GitHub repository.

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

*This README is structured to guide users through the installation and setup process, providing a clear and concise overview of the project and its functionalities. Feel free to modify or expand it as needed to fit your project's specific requirements or additional features.*
