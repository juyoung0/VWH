namedict = {'S48':'CG-11','S20':'EG-20','S21':'EG-21','S23':'EG-23','S25':'EG-25','S16':'EG-16','S51':'CG24','S22':'EG-22', 'S44':'CG-7','S16_CUT':'EG-16-CUT'}

function drawVisualization(user, views, row, problem, new_width, new_height, new_gap) {

  var padding = 10;
  var margin = {top: 10, right: 10, bottom: 10, left: 10};
  var width=3000, height=50;
  var w = 4, h=50;
  var view_gap = 7;

  if(new_width!=0)
    w = new_width;
  if(new_height!=0)
    h = new_height;
  if(new_gap!=0)
    view_gap = new_gap;
  //var width = w - margin.left - margin.right;
  //var height = h - margin.top - margin.bottom;

  var workspace = $('<div></div>').attr('id', user+"_space_"+problem).attr('class','workspace');
  workspace.appendTo('body');
  var textInfo = "<p>User : " + namedict[user] + ", Problem : " + problem+"</p>";
  workspace.append(textInfo);

  var svgContainer = d3.select("#"+user+"_space_"+problem)
    .attr("x", margin.left)
    .attr("y", (margin.top + workspace.height())*row)
    .append("svg")
    .attr("id", user+'_svg_'+problem)
    .attr("class", "svgContainer")
    .attr("width",width)
    .attr("height",height);

  var x_position = 0;

  views.map(function (view, index){

    /* Horizontal */
    var rects = svgContainer
      .append("g")
      .selectAll("rect")
      .data(view)
      .enter()
      .append("rect")
      .attr("id",user+'_'+index.toString())
      .attr("x", function(d,i){return x_position+ i*(w)})
      .attr("y", 0)
      .attr("fill", function(d,i){return colorMap(d);})
      .attr("width", w)
      .attr("height", h);

    var borderPath = svgContainer.append("rect")
      .attr("x", x_position)
      .attr("y", 0)
      .attr("height",h)
      .attr("width", (w) * view.length)
      .style("stroke", 'black')
      .style("fill", "none")
      .style("stroke-width", 1);

    x_position += (w) * view.length + view_gap
  })

}

function draw(width, height, gap) {
  console.log("width is "+width.toString())
  Object.keys(p3).map(function (key, index) {
    console.log(p3[key]);
    drawVisualization(key, p3[key], index, 'p3', width, height, gap);
  });

  Object.keys(p4).map(function (key, index) {
    console.log(p4[key]);
    drawVisualization(key, p4[key], index, 'p4', width, height, gap);
  });

  Object.keys(p5).map(function (key, index) {
    console.log(p5[key]);
    drawVisualization(key, p5[key], index, 'p5', width, height, gap);
  });
}

function changeWidth(){
  $(".workspace").remove();
  d3.select("svg").remove();

  var new_width = Number($('#new_width').val());
  var new_height = Number($('#new_height').val());
  var new_gap = Number($('#new_gap').val());

  draw(new_width, new_height, new_gap);
}

draw(0, 0,0);