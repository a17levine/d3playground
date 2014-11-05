var svg = d3.select('body')
  .append('svg')        // create an <svg> element
    .attr('width', 300) // set its dimensions
    .attr('height', 150);

var data = [{x:10, y: 10}, {x:40, y: 20}];

var circle = svg.selectAll("circle")
    .data(data);
    
circle.enter().append("circle");

circle
    .attr("r", 10)
    .attr("cx", function(d) { return d.x;})
    .attr("cy", function(d) { return d.y;});
    
circle.exit().remove();