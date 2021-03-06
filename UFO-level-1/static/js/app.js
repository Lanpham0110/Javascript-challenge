// from data.js
var tableData = data;

// YOUR CODE HERE!
//console.log(tableData);

var tbody = d3.select("tbody");

// Showing the whole dataset 

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");

// Click event of datetime filter
button.on("click", runEnter);
function runEnter() { 

// Prevent the page from refreshing
    d3.event.preventDefault();

// Remove existing table
    d3.select("tbody").html("");


// Select the input element(datetime) and get the raw HTML node
    var inputElement = d3.select("#datetime");
// Get the value property of the input element (datetime)
    var inputValue = inputElement.property("value");
    console.log(inputValue);

// Filter reports
    var filteredData = tableData.filter(timeframe => timeframe.datetime === inputValue);
    console.log(filteredData);

// Filtered dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

};
