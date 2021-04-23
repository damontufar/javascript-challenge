// from data.js
let tableData = data;

//Reference to the table body
let tbody = d3.select("tbody");

//

data.forEach((row) => {
    let newtr= tbody.append("tr");
    let entries = Object.entries(row);
    entries.forEach(([key, value]) => {
        newtr.append("td").text(`${value}`);
    });
})

