console.log("JavaScript code is running")

const data = [[1, 2], [2, 4], [6, 2], [9, 9]];
const w = 500;
const h = 500;
const svg = d3.select(".scatter");

const xScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 250]);

const yScale = d3.scaleLinear()
  .domain([0, 10])
  .range([250, 0]);
              
svg.selectAll("circle")
   .data(data)
   .enter()
   .append("circle")
   .attr("cx", d => xScale(d[0]))
   .attr("cy", d => yScale(d[1]))
   .attr("r", 5);