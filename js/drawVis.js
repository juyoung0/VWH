function drawVisualization(user, views, row, problem) {

  var padding = 10;
  var margin = {top: 10, right: 10, bottom: 10, left: 10};
  var w = 4, h=20;
  //var width = w - margin.left - margin.right;
  //var height = h - margin.top - margin.bottom;

  var workspace = $('<div></div>').attr('id', user+"_space_"+problem).attr('class','workspace');
  workspace.appendTo('body');
  workspace.innerHTML += "User : " + user + ", Problem : " + problem;

  var svgContainer = d3.select("#"+user+"_space_"+problem)
    .attr("x", margin.left)
    .attr("y", (margin.top + workspace.height())*row)
    .append("svg")
    .attr("id", user+'_svg_'+problem)
    .attr("class", "svgContainer")
    .attr("width",10000)
    .attr("height",50);

  var x_position = 0;

  views.map(function (view, index){

    /* Vertical
    var rects = svgContainer
      .append("g")
      .selectAll("rect")
      .data(view)
      .enter()
      .append("rect")
      .attr("id",user+'_'+index.toString())
      .attr("x", function(d,i){return (i*(w+1)+1)})
      .attr("y", (h+3)*index)
      .attr("fill", function(d,i){return colorMap(d);})
      .attr("width", w)
      .attr("height", h);

    var borderPath = svgContainer.append("rect")
      .attr("x", 1)
      .attr("y", (h+3)*index)
      .attr("height",h)
      .attr("width", (w+1) * view.length-1)
      .style("stroke", 'black')
      .style("fill", "none")
      .style("stroke-width", 1);

    x_position += view.length;
    */

    /* Horizontal */
    var rects = svgContainer
      .append("g")
      .selectAll("rect")
      .data(view)
      .enter()
      .append("rect")
      .attr("id",user+'_'+index.toString())
      .attr("x", function(d,i){return x_position+ 3 + i*(w+1)})
      .attr("y", 0)
      .attr("fill", function(d,i){return colorMap(d);})
      .attr("width", w)
      .attr("height", h);

    var borderPath = svgContainer.append("rect")
      .attr("x", x_position+3)
      .attr("y", 0)
      .attr("height",h)
      .attr("width", (w+1) * view.length-1)
      .style("stroke", 'black')
      .style("fill", "none")
      .style("stroke-width", 1);

    x_position += (w+1) * view.length + 3
  })

}

Object.keys(p3).map(function(key, index) {
  console.log(p3[key]);
  drawVisualization(key, p3[key], index, 'p3');
});

Object.keys(p4).map(function(key, index) {
  console.log(p4[key]);
  drawVisualization(key, p4[key], index, 'p4');
});

Object.keys(p5).map(function(key, index) {
  console.log(p5[key]);
  drawVisualization(key, p5[key], index, 'p5');
});

/*p3.map(function(user){
  drawVisualization(user);
})*/
