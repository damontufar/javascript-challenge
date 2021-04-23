// from data.js
let tableData = data;

///TABLE SECTION
//Use D3 to select the table
let table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");


//Reference to the table body
let tbody = d3.select("tbody");

///Appending Table

data.forEach((row) => {
    let newtr= tbody.append("tr");
    let entries = Object.entries(row);
    entries.forEach(([key, value]) => {
        newtr.append("td").text(`${value}`);
    });
})

///BUTTON FORM

//Select the button
let button = d3.select("#form-button");

//Select the form
let form = d3.select("#form");
