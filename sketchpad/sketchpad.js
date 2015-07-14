var area = 960

$(document).ready(function() {
    generateGrid(16);
});

function add_ons() {
  $("#container> div").click(function() {
    $("#container div").toggleClass('border');
  });
}

function generateGrid(numGrid) {
  var num = 0;
  var size = area/numGrid;
  while(num < numGrid * numGrid) {
    $("#container").append('<div style="height: ' + size + 'px; width: '
     + size + 'px;"></div>');
     num += 1;
  };
  add_ons();
}

function redBlue() {
  var newGrid = prompt("How many squares per side would you like the new grid?");
  $("h1").remove();
  $("#container").empty();
  generateGrid(newGrid);

  $("#container> div").hover(function() {
    $(this).css("background-color", "#d74b4b");
  });
}

function multicolor() {
  var newGrid = prompt("How many squares per side would you like the new grid?");
  $("h1").remove();
  $("#container").empty();
  generateGrid(newGrid);
  $("#container> div").hover(function() {
     randcolor = Math.random().toString().substring(2, 8);
    $(this).css("background-color", "#" + randcolor);},
  function() {
    $(this).css("background-color", "#" + randcolor);
  });
}

function fadeToBlack() {
  $("#container").empty();
  var grid = prompt("How many squares per side would you like the new grid?");
  $("h1").remove();
  var num = 0;
  var size = area/grid;
  while(num < grid * grid) {
    $("#container").append('<div style=" opacity: 0; height: ' + size + 'px; width: '
     + size + 'px;"></div>');
     num += 1;
  };
  add_ons();
  $("#container> div").mouseenter(function() {
    var trans = $(this).css('opacity') * 10;
    var inc = 1;
    var together = (trans + inc)/10
    $(this).css('opacity', together);
  });

  $("#container> div").mouseleave(function() {
    $(this).css('opacity', together);
  });
}
