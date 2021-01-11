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


// Select the input element(datetime, country, state, city, chape) and get the raw HTML node
// Get the value property of the input element (datetime)
    var dateTime = d3.select("#datetime").property("value");
    var cCity = d3.select("#city").property("value").toLowerCase();
    var cCountry = d3.select("#country").property("value").toLowerCase();
    var sState = d3.select("#state").property("value").toLowerCase();
    var sShape = d3.select("#shape").property("value").toLowerCase();








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
