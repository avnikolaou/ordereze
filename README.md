## Ordereze candidate test by Avraam Nikolaou

### General information
This project was created as a candidate test for the React Js Developer position with Orderze. A dashboard component was
created with the ability to consume the [Pages Management API](https://pagesmanagement.azurewebsites.net) and perform basic
CRUD operations.

Create-react-app (v3.4.4) was used for a basic structure of the application. The state of the application is manged by redux.
The material-ui framework was choosen to achive the best result regarding the dashboard as well as the table component
that displays the available Pages created by users. Regarding the forms for the 'create' and 'update' functionality, redux-forms
was used. The forms where styled with bootstrap. The soul purpose of this was to demostrate the ability to handle both
the material-ui components and it's grid system, and the classes that come with bootstrap. Calls to the API use the axios
library.

### Instructions

* Download or clone the repository to your local machine.
* Navigate to the root of the project
* Run `npm install` to install all the required libraries.
* Run `npm run start` to start the development server. The project is now available localhost:3000
