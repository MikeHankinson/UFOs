// JS Code to build Dynamnic Table
// ----------------------------------

// 11.2.4 import the data from data.js
const tableData = data;


// 11.2.4 Reference the HTML table using d3
var tbody = d3.select("tbody");

// declare variable tbody
// use library D3 --> d3.select to look for <tbody> tags (table body)




function buildTable(data) {
    
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