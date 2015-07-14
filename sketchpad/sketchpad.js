var area = 960;
var r_sub = 5.3;
var g_sub = 7.5;
var b_sub = 9.4;

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

function hiddenpic() {
  var newGrid = prompt("How many squares per side would you like the new grid?");
  $("h1").remove();
  $("#redblock").hide();
  $("img").show();
  $("#container").empty();
  generateGrid(newGrid);
  $("#container> div").mouseenter(function() {
    var trans = $(this).css('opacity') * 10;
    var inc = 1;
    var together = (trans - inc)/10
    $(this).css('opacity', together);
  });

  $("#container> div").mouseleave(function() {
    $(this).css('opacity', together);
  });
}


function strip(rgb) {
  //returns an array with each rgb value
  var strArray = rgb.substring(4, rgb.length-1).split(",");
  return [Number(strArray[0]) - r_sub, Number(strArray[1]) - g_sub, Number(strArray[2]) - b_sub]
}

function fadeToBlack() {
  var newGrid = prompt("How many squares per side would you like the new grid?");
  $("#container").empty();
  generateGrid(newGrid);
  $("#container> div").hover(
    function() {
    $this = $(this).css('background-color');
    if ($this !== 'rgb(0,0,0)') {
    rgbArray = strip($this);
    $(this).css("background-color", "rgb("+ Math.floor(rgbArray[0]) + "," + Math.floor(rgbArray[1]) + "," +
    Math.floor(rgbArray[2]) + ")");
  };},
  function() {
    $(this).css("background-color", "rgb("+ Math.floor(rgbArray[0]) + "," + Math.floor(rgbArray[1]) + "," +
    Math.floor(rgbArray[2]) + ")");
  });
}

function trail() {
  var newGrid = prompt("How many squares per side would you like the new grid?");
  $("h1").remove();
  $("img").hide();
  $("#redblock").show();

  $("#container").empty();
  generateGrid(newGrid);
  $("#container> div").hover(function() {
    $(this).fadeTo("fast", 0);
  },
  function() {
    $(this).fadeTo(2000, 1);
  });
}
