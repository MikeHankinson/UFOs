// ========================================================
// JS Code to build Dynamnic Table -- Module 11 Challenge 
// ========================================================

// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

// -----------------------------------------------
// Function to Build a Table
// -----------------------------------------------

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}


// -----------------------------------------------
// Function to Filter Data Based Upon User Input
// filters: date, city, state, country and shape
// -----------------------------------------------

// 1. Create a variable to keep track of all the filters as an object.
// Saves element, value and ID of changed filter. 
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    // selects all variables that have changed.
    // initializes array to store Value and ID
    let changedElement = d3.select(this);

    // 4b. Save the value that was changed as a variable.
    // Holds the Value of the property that has changed
    let elementValue = changedElement.property("value");
    console.log(elementValue);

    // 4c. Save the id of the filter that was changed as a variable.
    // Holds the ID of the ID attribute thta has changed (datetime, city, state, country, shape)
    let filterId = changedElement.attr("id");
    console.log(filterId);
    
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (elementValue) {
      filters[filterId]=elementValue;
    }
    else {
      delete filters[filterId];
    }

    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // -----------------------------------------------
  // Function to Update Filter
  // Loops through the Filters Object.  For each key and value stored, filter the 
  // UFO table as indicated by the search parameters
  // -----------------------------------------------
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    for (const [key, value] of Object.entries(filters)) {
      if(key == "datetime") {
        filteredData = filteredData.filter(row => row.datetime === value);
      }
      if(key == "city") {
        filteredData = filteredData.filter(row => row.city === value);
      }
      if(key == "state") {
        filteredData = filteredData.filter(row => row.state === value);
      }
      if(key == "country") {
        filteredData = filteredData.filter(row => row.country === value);
      }
      if(key == "shape") {
        filteredData = filteredData.filter(row => row.shape === value);
      }
    }

  
    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
  }
  
  // -----------------------------------------------
  // 2. Attach an event to listen for all search parameters that change on user input.  
  // -----------------------------------------------
  d3.selectAll("input").on("change", updateFilters);



  // -----------------------------------------------
  // Build the table when the page loads
  // -----------------------------------------------
  buildTable(tableData);