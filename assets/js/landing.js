// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all ? true : false

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;
var windowWidth = window.innerWidth;

var objectArray = new Array();

fillObjectArray();
positionDivs();

function fillObjectArray() {
  var demon1Div = document.getElementById("demon1");
  var demon1X = 800; //position div from half width of the page
  var demon1Y = 300;
  var demon1Factor = 0.4 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var demon1Array = new Array();
  demon1Array.push(demon1Div, demon1X, demon1Y, demon1Factor);
  objectArray.push(demon1Array);

  var demon2Div = document.getElementById("demon2");
  var demon2X = 700; //position div from half width of the page
  var demon2Y = 0;
  var demon2Factor = 0.25; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var demon2Array = new Array();
  demon2Array.push(demon2Div, demon2X, demon2Y, demon2Factor);
  objectArray.push(demon2Array);

  var imp1Div = document.getElementById("imp1");
  var imp1X = 600; //position div from half width of the page
  var imp1Y = 700;
  var imp1Factor = 0.15; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var imp1Array = new Array();
  imp1Array.push(imp1Div, imp1X, imp1Y, imp1Factor);
  objectArray.push(imp1Array);

  var imp2Div = document.getElementById("imp2");
  var imp2X = 1200; //position div from half width of the page
  var imp2Y = 700;
  var imp2Factor = 0.25; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var imp2Array = new Array();
  imp2Array.push(imp2Div, imp2X, imp2Y, imp2Factor);
  objectArray.push(imp2Array);

  var succubus1Div = document.getElementById("succubus1");
  var succubus1X = 5; //position div from half width of the page
  var succubus1Y = 560;
  var succubus1Factor = 0.12; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var succubus1Array = new Array();
  succubus1Array.push(succubus1Div, succubus1X, succubus1Y, succubus1Factor);
  objectArray.push(succubus1Array);

  var succubus2Div = document.getElementById("succubus2");
  var succubus2X = 590; //position div from half width of the page
  var succubus2Y = 550;
  var succubus2Factor = 0.32; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var succubus2Array = new Array();
  succubus2Array.push(succubus2Div, succubus2X, succubus2Y, succubus2Factor);
  objectArray.push(succubus2Array);

  var flames1Div = document.getElementById("flames1");
  var flames1X = 190; //position div from half width of the page
  var flames1Y = 772;
  var flames1Factor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames1Array = new Array();
  flames1Array.push(flames1Div, flames1X, flames1Y, flames1Factor);
  objectArray.push(flames1Array);

  var flames2Div = document.getElementById("flames2");
  var flames2X = 1111; //position div from half width of the page
  var flames2Y = 772;
  var flames2Factor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames2Array = new Array();
  flames2Array.push(flames2Div, flames2X, flames2Y, flames2Factor);
  objectArray.push(flames2Array);
/*
  var flames3Div = document.getElementById("flames3");
  var flames3X = 1630; //position div from half width of the page
  var flames3Y = 772;
  var flames3Factor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames3Array = new Array();
  flames3Array.push(flames3Div, flames3X, flames3Y, flames3Factor);
  objectArray.push(flames3Array);
*/
  var sunDiv = document.getElementById("sun");
  var sunX = 400; //position div from half width of the page
  var sunY = -100;
  var sunFactor = 0.2; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var sunArray = new Array();
  sunArray.push(sunDiv, sunX, sunY, sunFactor);
  objectArray.push(sunArray);

  var enterDiv = document.getElementById("enter");
  var enterX = 840; //position div from half width of the page
  var enterY = 670;
  var enterFactor = 0.2; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var enterArray = new Array();
  enterArray.push(enterDiv, enterX, enterY, enterFactor);
  objectArray.push(enterArray);
}

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
  if (IE) { // grab the x-y pos.s if browser is IE
    tempX = event.clientX + document.body.scrollLeft;
    tempY = event.clientY + document.body.scrollTop;
  } else {  // grab the x-y pos.s if browser is NS
    tempX = e.pageX;
    tempY = e.pageY;
  }
  // catch possible negative values in NS4
  if (tempX < 0) { tempX = 0 }
  if (tempY < 0) { tempY = 0 }

  moveDiv(tempX);

  return true;
}

function moveDiv(tempX) {
  for (var i = 0; i < objectArray.length; i++) {
    var yourDivPositionX = objectArray[i][3] * (0.5 * windowWidth - tempX) + objectArray[i][1];
    objectArray[i][0].style.left = yourDivPositionX + 'px';
  }
}

function positionDivs() {
  for (var i = 0; i < objectArray.length; i++) {
    objectArray[i][0].style.left = objectArray[i][1] + "px";
    objectArray[i][0].style.top = objectArray[i][2] + "px";
  }
}
