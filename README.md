# Currency Converter - Introduction to Web Programming

## Overview
This is a simple application built for converting currencies. The app allows users to:
- View a list of available currencies.
- Convert an amount from one currency to another.
- View conversion history.
- Manage user preferences.

The backend is built using **FlightPHP**, and the data is stored in a **MySQL** database. The frontend should work responsively both with mobile and desktop versions.

---

## Features
- **Currency Conversion:** Convert an amount from one currency to another using real-time exchange rates (or a static rate for simplicity).
- **Currency List:** Display a list of available currencies.
- **Conversion History:** Store and display past conversions (optional).
- **User Authentication:** Allow users to sign up, log in, and manage their preferences.
- **Responsive Design:** The app is fully responsive and works on all screen sizes.

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript (or a framework like React/Vue if used).
- **Backend:** FlightPHP (PHP framework).
- **Database:** MySQL.
- **Deployment:** Github.

---

## Setup Instructions

### Prerequisites
- PHP (version 7.4 or higher).
- MySQL database.
- Composer (for FlightPHP dependencies).
- A web server (e.g., Apache, Nginx).

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/affanzukic/currency-converter-burch.git
   cd currency-converter-burch
   ```

2. **Install dependencies:**
   ```bash
   composer install
   ```

3. **Set up the database:**
    - Create a new MySQL database.
    - Import the provided SQL file (`database.sql`) or run the migrations (if applicable).

4. **Configure the app:**
    - Rename `.env.example` to `.env` and update the database credentials:
      ```env
      DB_HOST=localhost
      DB_NAME=currency_converter_burch
      DB_USER=root
      DB_PASSWORD=your_password
      ```

5. **Run the app:**
    - Start your local server:
      ```bash
      php -S localhost:8000
      ```
    - Open your browser and navigate to `http://localhost:8000`.

---

## Usage
1. **Home Page:**
    - Enter the amount, select the "from" and "to" currencies, and click "Convert."
    - View the converted amount.

2. **Currency List:**
    - View all available currencies and their exchange rates.

3. **Conversion History:**
    - View past conversions (requires user authentication).

4. **User Preferences:**
    - Set a default currency for quicker conversions.

---

## API Endpoints (Backend)
- `GET /api/currencies` - Fetch all available currencies.
- `POST /api/convert` - Perform a currency conversion.
- `GET /api/history` - Fetch conversion history (if implemented).
- `POST /api/login` - Authenticate a user (if implemented).

