## Assignment 4
### Due Date: 11/28/22 - 5:00pm EST

*Assignment deadlines are strictly enforced, please do try to hand in your assignments on time, and I will honor your commitment by grading them and giving feedback in a timely manner. I do understand that sometimes there may be emergencies that we need to attend to. Please do reach out to me as soon as possible if you know you won't be able to make a deadline.*

---

## Assignment Description

In this assignment, you will be using ReactJS to create a **Hexadecimal Calculator**. This assignment is designed to help you practice creating **components** in React, and getting you all to think in terms of organizing your website/app into components and breaking it down into reusable parts.

---

## Instructions

The requirements for this assignment will be listed below as always, you are free to use any external libraries for this assignment for styling, state management, utilities, etc... so as long as you meet these requirements.

There is also starter code that has been created for you using the `create-react-app` toolchain, with some small modifications such as organizing the code into separate folders, removing tests, etc.... You should simply just be able to run `npm i` after checking out your assignment 4 repo, and run `npm run start` to start up your app.

You will be developing this app locally, and grading will be done by starting your React app via the `npm run start` command that has already been provided for you, which will start up your app at `http://localhost:3000`.
Grading percentage will be listed alongside these requirements below.

## Requirements

### 1) Calculator Buttons & UI - 25%

```text
AS a USER 
WHEN I view the app
I SHOULD be presented with a clean user interface that represents a Hexadecimal Calculator
AND I SHOULD see buttons 0 - F for hexadecimal value input
AND I SHOULD see buttons "+", "-", "*", "/" for arithmetic operation input
AND I should see a "=" button to evaluate the current input
AND I should see a "Clear" button to clear out the current input
```

```text
AS a USER
WHEN I view the app
I SHOULD be presented with a clean user interface that represents a Hexadecimal Calculator
AND I SHOULD see an input display bar that shows the current input state of the calculator
```

### 2) Calculator Input State Functionality - 45%
```text
AS a USER
WHEN I INITIALLY interact with the app
I SHOULD have the value 0 as the initial state of my input
AND I SHOULD see this state being displayed
```

```text
AS a USER
WHEN I interact with the app
AND I click on any of the hexadecimal value input buttons
I SHOULD see my input state display update with the values I entered
```

```text
AS a USER
WHEN I interact with the app
AND I click on any of the arithmetic operation buttons
I SHOULD keep track of this arithmetic operation in my input state
AND I should perform this arithmetic operation between two successive input values
```

```text
AS a USER
WHEN I interact with the app
AND I click on the "=" button
I SHOULD evaluate my current input state
AND I should see the input display being updated with the evaluated value
```

```text
AS a USER
WHEN I interact with the app
AND I click on the "Clear" button
I SHOULD clear my current input state, and reset back to 0
AND I should see the input display being updated to this reset value.
```

### 3) Error Handling Input State - 20%
```text
AS a USER
WHEN I interact with the app
AND I perform an illegal arithmetic operation between to numbers
I SHOULD have my input state evaluate to an error value
AND I should see this error updated in the input state display
```

```text
AS a USER
WHEN I interact with the app
AND I perform an action that causes a number overflow (MAX/MIN)
I SHOULD have my input state evaluate to an error value
AND I should see this error updated in the input state display
```

### 4) Code Organizing - 10%
```text
AS a DEVELOPER
WHEN I checkout and navigate your source code
I SHOULD see the code organized in a logical manner
AND I should see all my component files listed in their own `components` directory
AND I should see all my styling files listed in their own `styles` directory
```
