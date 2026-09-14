Bill Splitter

A simple web application for splitting a bill among multiple people and
calculating the service charge/tip.

Features

Enter the total bill amount.

Enter the service charge or tip percentage.

Enter the number of people.

Calculate the tip amount.

Calculate the total bill including the tip.

Calculate the amount each person should pay.

Display the results in a clear Split Summary.

Modern dark-themed user interface.

Technologies Used

HTML5

CSS3

JavaScript

How It Works

The application uses three inputs:

Total Bill Amount

Service Charge/Tip (%)

Number of People

The calculations are:

Tip Amount = Total Bill × Tip Percentage / 100

Total Bill = Total Bill + Tip Amount

Amount Per Person = Total Bill / Number of People

JavaScript uses parseFloat() to convert input values into numbers and
toFixed(2) to display amounts with two decimal places.

Example

For:

Total Bill = ₹100
Tip = 10%
Number of People = 4

The result is:

Base Amount       ₹100.00
Tip Amount        ₹10.00
Total Bill        ₹110.00
Amount Per Person ₹27.50

Project Structure

Bill-Splitter/
├── main.html
├── styles.css
├── script.js
└── README.md

How to Run

Open the project folder in VS Code.

Open main.html in a browser.

Enter the bill amount, tip percentage, and number of people.

Click Split The Bill.

View the calculated values in the Split Summary section.

Future Improvements

Automatically recalculate when an input changes.

Add validation for empty or invalid inputs.

Add a reset button.

Improve mobile responsiveness.

Add support for different currencies.

Learning Objectives

This project is useful for practicing:

HTML forms and input elements

CSS layout and styling

CSS Grid

JavaScript DOM manipulation

Event listeners

Basic arithmetic calculations

parseFloat()

toFixed()

Author