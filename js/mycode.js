// var svg = d3.select('.stage')
//   .append('svg')        // create an <svg> element
//     .attr('width', 300) // set its dimensions
//     .attr('height', 150);

// var data = [{x:10, y: 10}, {x:40, y: 20}];

// var circle = svg.selectAll("circle")
//     .data(data);
    
// circle.enter().append("circle");

// circle
//     .attr("r", 10)
//     .attr("cx", function(d) { return d.x;})
//     .attr("cy", function(d) { return d.y;});
    
// circle.exit().remove();

var data = [4, 8, 15, 16, 23, 21];

var x = d3.scale.linear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .text(function(d) { return d; });