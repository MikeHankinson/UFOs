# UFO Sightings Webpage
----------------------------------------------------------------------------------

## Overview of Analysis
The project's purpose was to create a dynamic web page to clearly present historic UFO sighting data.  

## Data Source
Data was presented in the attached JavaScript file [JavaScript file](static/js/data.js/).  

## Built With
* Visual Studio Code
* Chrome DevTools
* JavaScript
* HTML
* Bootstrap CSS

## Results

The following image shows the UFO Sightings homepage.  It was designed with the following visual/structural components: Navbar, Jumbotron header, article title and paragraph, table filters and the table of sightings data.  

When the user is greeted to the page, a full set of data is provided in the table.  Only a subset of data was fed into this demonstration version.  However, scrolling through a full set of data would be cumbersome.  Therefore, a set of 5 filters were incorporate in order to customize the information according to the user's needs.  
<br>
<br>
![Fig_1](static/images/Home_Screen.PNG)
<br>
<br>
<br>
<br>
In order to drill down into the data, the user simply inputs the desired criteria based upon the following search parameters: date, city, state, country and shape.  For example, the following image shows data extraction using 3 of the 5 filters (date, state and shape).  
<br>
<br>
![Fig_2](static/images/Filtered.PNG)
<br>
<br>
<br>
<br>
## Summary  

The webpage is a fun and visually appealing way for enthusiasts to learn about UFO sightings.  Multiple filters provide customizable search items.

The following are 2 slight issues and suggested recommendations to even further enhance the website:

1. Unfortunately, in order to effectively search, the user must properly input search criteria.  For example, if a user wanted to find all sightings in California, they would need to properly input 'ca' into the search field.  Consider adding select menu/dropdown input filters for search criteria city, state, country and shape.  This will ensure the user is able to quickly obtain data important to them.  

2. At this time, a user can only input a single date into the search parameter.  Consider replacing the date text field with a date picker which allows for both a start and ending date for the search.  

### Skills Learned
* Built and deployed JavaScript functions, including built-in functions.
* Converted JavaScript functions to arrow functions.
* Built and deployed forEach (JavaScript for loop).
* Created, populated, and dynamically filtered a table using JavaScript and HTML.
