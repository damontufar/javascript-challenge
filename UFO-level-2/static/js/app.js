// from data.js
let tableData = data;

// TABLE SECTION
// Use D3 to select the table
let table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// FORM & BUTTON

// Select the button
let button = d3.select("#form-button");

// Select the form
let form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form

function runEnter() {

    // Prevent the page for refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#date-form-input");

    // Get the value property of the input element
    let inputValue = inputElement.property("value");

    console.log(inputElement);
    console.log(tableData);

    // Use the form input to filter the data by date
    let filteredData = tableData.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    // Reference to the table body
    let tbody = d3.select("tbody");

    // Remove any children from the table

    tbody.html("");

    /// Appending Table

    filteredData.forEach((row) => {
        let newtr= tbody.append("tr");
        let entries = Object.entries(row);
        entries.forEach(([key, value]) => {
            newtr.append("td").text(`${value}`);
     });
    })
};