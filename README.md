# Speed-Typing-Test
![speed-typing-test-output](https://github.com/user-attachments/assets/7ecc178d-4c5d-4df8-980c-1dceefcacbd1)

This project is a Speed Typing Test where users can practice their typing speed by typing a randomly generated quote. The project includes a timer and checks the user's input against the displayed quote to determine accuracy.

## Features

- **Random Quote Generation**: Fetches a random quote from an API on page load and when the reset button is clicked.
- **Typing Test**: Users type the displayed quote in a text area, and their input is checked against the displayed quote when they submit.
- **Timer**: A timer starts when the page is loaded and stops when the user successfully types the quote.
- **Error Handling**: Displays success or error messages based on the user's input.
- **Loading Spinner**: Shows a Bootstrap spinner while fetching the random quote.

## Instructions

1. **HTML Structure**:
   - The main container should have the following id:
     - `speedTypingTest`
   - The paragraph elements for displaying information should have the following ids:
     - Timer display: `timer`
     - Quote display: `quoteDisplay`
     - Result message: `result`
   - The textarea for user input should have the id:
     - `quoteInput`
   - The buttons should have the following ids:
     - Submit button: `submitBtn`
     - Reset button: `resetBtn`
   - Include a Bootstrap spinner to indicate loading status while fetching the random quote.

2. **Functionality**:
   - When the page loads:
     - Make an HTTP GET request to fetch a random quote from the URL: `https://apis.ccbp.in/random-quote`.
     - Display the fetched quote in the `quoteDisplay` element.
     - Start the timer and display the time (in seconds) in the `timer` element.
   - When the submit button (`submitBtn`) is clicked:
     - Compare the user's input from the `quoteInput` element with the displayed quote.
     - If the input matches:
       - Stop the timer and show a success message in the `result` element.
     - If the input does not match:
       - Keep the timer running and show an error message in the `result` element.
   - When the reset button (`resetBtn`) is clicked:
     - Fetch a new random quote.
     - Display the new quote in the `quoteDisplay` element.
     - Reset the timer to 0 seconds and update the `timer` element.
     - Clear the `quoteInput` textarea.
   - Show the loading spinner while fetching a random quote.
