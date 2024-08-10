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

(For local development, use the following credentials to test the application)
mock data:
```
 credentials: (for login)
 {email: "test@mail.com", password: "test123"}, {email: "user@mail.com", password: "user123"} 
 Organizations: (for signup)
 {name: "Test Org",id:12345}, {name: "testing",id:1234}
 (Refer services/in-memory-data.service.ts for more)
...
```

It is recommended to zoom out your browser for better view of the application.(80% zoom is recommended whatever is comfortable for you)

1. Welcome Screen: Enter an email or phone number and click "Next".
- If the user exists, they are directed to the login page.(Refer to the existing user credentials in the mock data)
- One should enter either email or phone number to proceed further, If both are entered it will consider email as the input.
- If the user does not exist, they are directed to the signup page.
2. Signup Page: If the user is new, they can sign up by providing their name, email or phone number, password, and additional details. 
- For the signup page, the organization name is a required field. If the organization name entered does not match any organization in the mock data, an error message is displayed. It expects to match the organization name with the organization ID that is provided in the mock data.
- Few fields are mandatory to fill in the signup page.
- Email, phone number and pincode fields are validated for the correct format.
- The user can navigate back and forth between the signup steps without losing information.
3. After a successful signup, the user will be shown a success message and will be redirected to the login page.
4. For every successful signup, the credentials are stored in the mock data and can be used for login only for the current session.(It is not recommended to refresh the page at any point of time, you will be navigated to different page as per the flow) 
5. Login Page: The user can log in using their email and password (Refer to the existing user credentials in the mock data). If the user enters the wrong credentials, an error message is displayed else the user is redirected to dashboard page.
6. Dashboard Page: Upon successful login, the user is redirected to the dashboard page with a button to log out. The user can log out and will be redirected to the welcome screen.

## Error Handling

- Error messages are logged to the console as well as displayed on screen for different scenarios:
- Invalid Pincode: An inline error is displayed if the pincode is not a valid 6-digit number.
- Unknown Organization: If the organization name entered during signup does not match any organization in the mock data, an inline error message "Unknown organization-id" is displayed.
 

## Caching

- Session Data: Data entered during the signup process is stored in the session, allowing the user to go back and forth between steps without losing information (navigating through buttons).

## Assets

- Static images are stored in the public/images/ directory. Ensure the paths are correctly configured in the img tags within your components.
