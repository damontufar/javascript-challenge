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
    let inputDate = d3.select("#date-form-input");
    let inputCity = d3.select("#city-form-input");

    // Get the value property of the input element
    let dateValue = inputDate.property("value");
    let cityValue = inputCity.property("value");

    console.log(inputDate);
    console.log(inputCity);

    multipleFilter = (filter) => {
        let buildFilter = {};
        for (let keys in filter) {
            if (filter[keys].constructor === Array && filter[keys].length>0) {
                buildFilter[keys] = filter[keys];
            }
        }
        return buildFilter;
    }

    filterData = (tableData, buildFilter) => { 
        let filteredData = tableData.filter( (item) =>{
            for (let key in buildFilter) {
                if (item[key] === undefined || !buildFilter[key].includes(item[key])) {
                    return false;
                }
            }
            return true;
        });
        
        return filteredData;
    };

    // Use the form input to filter the data by multiple criteria
    let filter = {
        datetime: dateValue,
        city: cityValue,
        state: [],
        country: [],
        shape: []
    };

    let buildFilter = multipleFilter(filter);
    let result = filterData(tableData, buildFilter);

    console.log(buildFilter);

    // Reference to the table body
    let tbody = d3.select("tbody");

    // Remove any children from the table

    tbody.html("");

    /// Appending Table

    result.forEach((row) => {
        let newtr= tbody.append("tr");
        let entries = Object.entries(row);
        entries.forEach(([k, value]) => {
            newtr.append("td").text(`${value}`);
     });
    })
};