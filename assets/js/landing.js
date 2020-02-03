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
  var demon1X = 10; //position div from half width of the page
  var demon1Y = 415;
  var demon1Factor = 0.15 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var demon1Array = new Array();
  demon1Array.push(demon1Div, demon1X, demon1Y, demon1Factor);
  objectArray.push(demon1Array);

  var demon2Div = document.getElementById("demon2");
  var demon2X = 90; //position div from half width of the page
  var demon2Y = 390;
  var demon2Factor = 0.16 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var demon2Array = new Array();
  demon2Array.push(demon2Div, demon2X, demon2Y, demon2Factor);
  objectArray.push(demon2Array);

  var demon3Div = document.getElementById("demon3");
  var demon3X = 160; //position div from half width of the page
  var demon3Y = 400;
  var demon3Factor = 0.17 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var demon3Array = new Array();
  demon3Array.push(demon3Div, demon3X, demon3Y, demon3Factor);
  objectArray.push(demon3Array);

  var demon4Div = document.getElementById("demon4");
  var demon4X = 220; //position div from half width of the page
  var demon4Y = 420;
  var demon4Factor = 0.18 //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var demon4Array = new Array();
  demon4Array.push(demon4Div, demon4X, demon4Y, demon4Factor);
  objectArray.push(demon4Array);

  var imp1Div = document.getElementById("imp1");
  var imp1X = 0; //position div from half width of the page
  var imp1Y = 10;
  var imp1Factor = 0.1; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var imp1Array = new Array();
  imp1Array.push(imp1Div, imp1X, imp1Y, imp1Factor);
  objectArray.push(imp1Array);

  var imp2Div = document.getElementById("imp2");
  var imp2X = 0; //position div from half width of the page
  var imp2Y = 275;
  var imp2Factor = 0.11; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var imp2Array = new Array();
  imp2Array.push(imp2Div, imp2X, imp2Y, imp2Factor);
  objectArray.push(imp2Array);

  var imp3Div = document.getElementById("imp3");
  var imp3X = 250; //position div from half width of the page
  var imp3Y = 275;
  var imp3Factor = 0.12; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var imp3Array = new Array();
  imp3Array.push(imp3Div, imp3X, imp3Y, imp3Factor);
  objectArray.push(imp3Array);

  var imp4Div = document.getElementById("imp4");
  var imp4X = 200; //position div from half width of the page
  var imp4Y = 50;
  var imp4Factor = 0.13; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var imp4Array = new Array();
  imp4Array.push(imp4Div, imp4X, imp4Y, imp4Factor);
  objectArray.push(imp4Array);

  var tombstone1Div = document.getElementById("tombstone1");
  var tombstone1X = 0; //position div from half width of the page
  var tombstone1Y = 375;
  var tombstone1Factor = 0.11; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var tombstone1Array = new Array();
  tombstone1Array.push(tombstone1Div, tombstone1X, tombstone1Y, tombstone1Factor);
  objectArray.push(tombstone1Array);

  var tombstone2Div = document.getElementById("tombstone2");
  var tombstone2X = 250; //position div from half width of the page
  var tombstone2Y = 350;
  var tombstone2Factor = 0.12; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var tombstone2Array = new Array();
  tombstone2Array.push(tombstone2Div, tombstone2X, tombstone2Y, tombstone2Factor);
  objectArray.push(tombstone2Array);

  var flames1Div = document.getElementById("flames1");
  var flames1X = 0; //position div from half width of the page
  var flames1Y = 410;
  var flames1Factor = 0.01; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames1Array = new Array();
  flames1Array.push(flames1Div, flames1X, flames1Y, flames1Factor);
  objectArray.push(flames1Array);

  var flames2Div = document.getElementById("flames2");
  var flames2X = 50; //position div from half width of the page
  var flames2Y = 410;
  var flames2Factor = 0.02; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames2Array = new Array();
  flames2Array.push(flames2Div, flames2X, flames2Y, flames2Factor);
  objectArray.push(flames2Array);

  var flames3Div = document.getElementById("flames3");
  var flames3X = 100; //position div from half width of the page
  var flames3Y = 410;
  var flames3Factor = 0.03; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames3Array = new Array();
  flames3Array.push(flames3Div, flames3X, flames3Y, flames3Factor);
  objectArray.push(flames3Array);

  var flames4Div = document.getElementById("flames4");
  var flames4X = 150; //position div from half width of the page
  var flames4Y = 410;
  var flames4Factor = 0.04; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames4Array = new Array();
  flames4Array.push(flames4Div, flames4X, flames4Y, flames4Factor);
  objectArray.push(flames4Array);

  var flames5Div = document.getElementById("flames5");
  var flames5X = 200; //position div from half width of the page
  var flames5Y = 410;
  var flames5Factor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames5Array = new Array();
  flames5Array.push(flames5Div, flames5X, flames5Y, flames5Factor);
  objectArray.push(flames5Array);

  var flames6Div = document.getElementById("flames6");
  var flames6X = 250; //position div from half width of the page
  var flames6Y = 410;
  var flames6Factor = 0.06; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var flames6Array = new Array();
  flames6Array.push(flames6Div, flames6X, flames6Y, flames6Factor);
  objectArray.push(flames6Array);

  var sunDiv = document.getElementById("sun");
  var sunX = 30; //position div from half width of the page
  var sunY = 0;
  var sunFactor = 0.2; //parallax shift factor, the bigger the value, the more it shift for parallax movement
  var sunArray = new Array();
  sunArray.push(sunDiv, sunX, sunY, sunFactor);
  objectArray.push(sunArray);
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
