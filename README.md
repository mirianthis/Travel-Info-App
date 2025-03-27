# Travel Info App

This is an Angular-based **Travel Info App** that provides information about different countries using the **REST Countries API**. The app includes authentication, routing, UI design, localization, guards, data visualization, and a calendar feature.

---

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [APIs Used](#apis-used)
- [Assumptions Made](#assumptions-made)
- [Features](#features)
- [Folder Structure](#folder-structure)

---

## Setup Instructions

### Prerequisites
Make sure you have the following installed:
- **Node.js** (v16 or later) - [Download Here](https://nodejs.org/)
- **Mongo DB** (https://www.mongodb.com/docs/manual/installation/)
- **Angular CLI** (v16 or later) - Install via:
  
  ```sh
  npm install -g @angular/cli
  ```

### Installation Steps
Clone the repository:

 ```sh
 git clone https://github.com/mirianthis/travel-info-app.git
 ```

#### Frontend

 Navigate to the project directory:
 
 ```sh
 cd .\Frontend\travel-info-app\
```
 Install dependencies:
 
 ```sh
 npm install
```
 Run the development server on port 8081:
 
 ```sh
 ng serve --port 8081
```
 The app should now be available at http://localhost:8081/.

 ---

#### Backend

 Navigate to the project directory:
 
 ```sh
 cd .\Backend
```
 Install dependencies:
 
 ```sh
 npm install
```
 Point the backend to your DB:
 
 ```sh
 Navigate to the db.config.js( Backend -> app -> config -> db.config.js) and make the necessary changes to point to your DB.
```
 Run the development server on port 8081:
 
 ```sh
 node server.js
```
 The server should now be available at http://localhost:8080/.

 ---

 ## APIs Used

- **REST Countries API** ([https://restcountries.com/](https://restcountries.com/))  
  Fetches country details, including population, language, currency, and flag.
- **Node.js Auth API with Refresh Tokens** (https://github.com/bezkoder/jwt-refresh-token-node-js-mongodb?tab=readme-ov-file)  
  JWT Refresh Token Implementation with Node.js Express and MongoDB.

---

## Assumptions Made

- **Authentication:** The app assumes basic authentication for users before accessing some features.
- **Data Accuracy:** The REST Countries API provides accurate and up-to-date country information.
- **Localization Support:** The app supports multiple languages using ngx-translate.
- **Routing & Guards:** Some pages require authentication and use Angular guards for access control.
- **Data Visualization:** Uses charts to display population and economic data.
- **Calendar Feature:** The calendar is assumed to help users plan trips but does not include backend scheduling.
- **Registration:** The admin and agent roles wont be created from the registration page.

---

## Features

- ✅ **Search for countries by name**
- ✅ **View country details** (flag, population, currency, language)
- ✅ **Authentication & protected routes**
- ✅ **Multi-language support** (localization)
- ✅ **Interactive data visualization**
- ✅ **Calendar integration**
- ✅ **View favorite countries**
- ✅ **Dashboard with population comparison chart and countries per continent chart**


