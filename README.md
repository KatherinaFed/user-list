# Assignment: Creating a React App with Testing

## Objective:

Create a React app that sends a request to the JSONPlaceholder API,
displays 8 full usernames in uppercase, and write tests using React Testing Library
to ensure the correctness of the implementation.

## Tasks

#### 1

You are tasked with creating a react application.

#### 2

Your next task is to fetch data from JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) and display it in frontend. Visually appealing interface is not required. Use Redux Toolkit Query (RTK-Query) to send the API request and fetch data. Alternate the background color of each line with the username. Display the names of 8 full usernames in uppercase on the screen.

#### 3

Testing phaze.
You are tasked with creating 3 following tests:

1. Write a test to check if the component that you created correctly rendered user's names in uppercase. Use React Testing Library for this purpose.

2. Write a test to check if the API request returns the correct data.

3. Write a test to check your function that should take a user's names from the JSON data. Ensure that it correctly extracts and formats the name.

##

### Additional Notes:

Try to make the app structure resonable decomposed.

For mocking API requests use jest.mock() and mockReturnValue.