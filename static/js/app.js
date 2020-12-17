// ========================================
// JS Code to build Dynamnic Table
// ========================================



// 11.2.4 import the data from data.js
const tableData = data;


// 11.2.4 Reference the HTML table using d3
var tbody = d3.select("tbody");

// declare variable tbody
// use library D3 --> d3.select to look for <tbody> tags (table body)



// Function to Build a Table
// -----------------------------------------------

function buildTable(data); {
    
    // 11.5.1, Clear table using empty string
    tbody.html("");

    //11.5.2  Loop through each object (each object is a UFO sighting) in the data array 
    // and append rows of data to the table
    // use forEach Method with Arrow Function
    data.forEach((dataRow) => {

        // Create a variable to append a row to the table body
        // <tr> HTML tags are used for each row in a table
        let row = tbody.append("tr");


        // Put each siting into its own row of data
        // (val) argument represents each item in the object
        // ie location, duration, etc. 
        Object.values(dataRow).forEach((val) => {
            
            // set up the action of appending data into a table data tag (<td>).
            let cell = row.append("td");
            // add the values
            cell.text(val);
        }
        );
    });
}


// Function to Filter Data Based Upon User Input
// -----------------------------------------------

function handleClick(){

    // The D3 .select() function looks for HTML tag with ID of datetime.
    // chaining .property("value"), D3 grabs the info & holds in "date" varialble. 
    let date = d3.select("#datetime").property("value");


    // Set default filter to original data and set it to a new variable, filteredData
    let filteredData = tableData;

    // Check to see if a date was entered.  If so, filter the data using the date.
    // using the .filter() method.  
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // After user date input, rebuild the table using 'filteredData' (rather than 'data')
    // NOTE: If no date was entered, then 'filteredData' will remain the original 'tableData'.  
    buildTable(filteredData);
};



// Attach an Event to Listen for the HTML Form Filter Button ("filter-btn")
// -----------------------------------------------
d3.selectAll("#filter-btn").on("click", handleClick);


// Build the Final Table -- Returns Table to Original State
// -----------------------------------------------
buildTable(tableData);

