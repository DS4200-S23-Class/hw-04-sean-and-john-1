const data = [[1, 2], [2, 4], [6, 2], [9, 9]];
const w = 500;
const h = 500;
const svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
              
svg.selectAll("circle")
   .data(data)
   .enter()
   .append("circle")