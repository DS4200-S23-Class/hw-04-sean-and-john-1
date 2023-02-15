console.log("JavaScript code is running")

data = [[1, 2], [2, 4], [6, 2], [9, 9]];
const w = 500;
const h = 500;
var svg = d3.select(".scatter");

const xScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 500]);

const yScale = d3.scaleLinear()
  .domain([0, 10])
  .range([500, 0]);
              
svg.selectAll("circle")
   .data(data)
   .enter()
   .append("circle")
   .attr("cx", d => xScale(d[0]))
   .attr("cy", d => yScale(d[1]))
   .attr("r", 5)
   .on('click', function () {
    d3.select(this).transition()
         .duration('100')
         .attr("border", 3);
  })
  .on('hover', function () {
    d3.select(this).transition()
         .duration('100')
         .attr("color", "red");
  });
function addPoint() {
  x = document.getElementById("xcoord").innerHTML
  y = document.getElementById("ycoord").innerHTML
  data.append([x,y])
  
}