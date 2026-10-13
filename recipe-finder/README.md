# Recipe Finder

## What It Does
A page used to search for recipes using a certain ingredient. The page will display recipes which contain the searched ingreedient.

## Features
- [x] Search box
- [x] Recipe cards
- [x] Loading Message
- [x] Error message
- [x] "no recipes found" message
- [x] Recipe details

## Data
What comes from TheMealDB
- Name
- Picture
- id

## Files
- index.html
- style.css
- app.js

## Build Order
- Setup the project files
Creat index.html, style.css and app.js
Link the CSS and JavaScript files to the HTML
- Build the HTML layout
Add a heading, search input, search button, message area and results container
- Display recipe cards using fake data
Create an array of fake objects
Use map() to turn each recipe into an HTML card.
Use join("") and innerHTML to display the cards.
- Style the recipe cards
Use CSS to style the search box, button, recipe images and cards.
Make the cards display neatly using Flexbox or CSS Grid
- Connect the search button
Get the ingredient from the input using .value.
Use addEventListener() to detect when search button is clicked.
Create function to handle the search.
- Fetch recipes from TheMealDB API
Pass the recipes returned by the API into renderMeals().
REUSE map() and join("") to display the results
- Handle loading, errors and empty results
Show "Loading..." while the API request is running.
Use try/catch to handle errors.
Show "No recipes found" if the API returns no meals.
- Test the finished recipe finder
Test ingredients that return recipes
Test ingredients with no results
Check that new searches replace previous results.

## Bonus Features

Prevent Empty searches
- Added an if statement to check whether the search input is empty. If no ingredient is enter, the app displays a warning and uses return to stop the API request

Search Using Enter
- Added a keydown event listener which allows the user to search by pressing the enter key instead of clicking the searck button

## Project Status (Compelte)

Recipe finder has been built and tested successfully. Users can search for recipes including any ingredient they want. Appropriate message cards appear depending on if search box is empty, no ingredient can be found, loading etc.

Good project to test knowledge learned, also challenged myself a bit more by adding new things and try to figure stuff out on my own more. Everything feels like its clicking more, but would still be struggling to start a similar project like this on my own from scratch.

## Recipe Details

Clicking a recipe card fetches and displays the full recipe using TheMaleDB's lookup API

The detail view includes:

- Recipe name and image
- Ingredients with measurements
- Cooking instructions
- Loading and error messages