# Angular User Authentication Application

This is a single-page application (SPA) built with Angular that provides a user authentication flow. The application allows users to enter an email or phone number, checks if the user exists, and either directs them to a login page or a signup page. After successful authentication, a welcome message is displayed.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Angular CLI](https://angular.io/cli)

## Installing

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/angular-authentication-app.git


2. Navigate to the project directory:

   ```bash
   cd angular-authentication-app
   ```
3. To install Angular CLI (if not already installed), run:
  ```bash
  npm install -g @angular/cli
  ```
4. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Run the application:

   ```bash
   ng serve
   ```
2. Open your browser and navigate to `http://localhost:4200/`.


## Using the Application

1. Welcome Screen: Enter an email or phone number and click "Next".
- If the user exists, they are directed to the login page.
- If the user does not exist, they are directed to the signup page.
2. Login Page: Enter the email and password to log in. Upon successful login, a welcome message is displayed.
Signup Page: If the user is new, they can sign up by providing their name, email or phone number, password, and additional details. After successful signup, they are directed to the login page.

## Error Handling

- Error messages are logged to the console as well as displayed on screen for different scenarios:
  - Invalid Pincode: An inline error is displayed if the pincode is not a valid 6-digit number.
  - Unknown Organization: If the organization name entered during signup does not match any organization in the mock data, an inline error message "Unknown organization-id" is displayed.
  - 

## Caching

- Session Data: Data entered during the signup process is stored in the session, allowing the user to go back and forth between steps without losing information.

## Running the Tests

To run the tests, run the following command

```bash
ng test
```
This command will open a browser window and run all the tests in your project. The results will be displayed in the terminal as well as in the browser.


## Assets

- Static images are stored in the public/images/ directory. Ensure the paths are correctly configured in the img tags within your components.
