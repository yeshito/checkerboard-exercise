// Your JS goes here

// Black and White CheckerBoard

var body = document.getElementsByTagName('body')[0]


  for(var i = 0; i < 81; i++) {
    var newTile = document.createElement('div')
    newTile.style.width = '11.1%';
    newTile.style.float = 'left';
    newTile.style.paddingBottom = '11.1%';
    // newTile.style.height = '11.1%';
    if(i % 2 === 0) {
      newTile.style.backgroundColor = 'black';
    } else {
      newTile.style.backgroundColor = 'red';
    }
    body.appendChild(newTile);
  }

// Random Color CheckerBoard


var body = document.getElementsByTagName('body')[0]

  for(var i = 0; i < 81; i++) {
    var newTile = document.createElement('div')

    function randomColorNum (multiplier) {
      return Math.floor(Math.random() * multiplier);
    }
    newTile.style.width = '11.1%';
    newTile.style.float = 'left';
    newTile.style.paddingBottom = '11.1%';
    newTile.style.backgroundColor = 'hsla(' + randomColorNum(360) + ',' + randomColorNum(100) + '%,' + randomColorNum(100) + '%,' + Math.random()+ ')';
    body.appendChild(newTile);
  }

// Gradient CheckerBoard

var body = document.getElementsByTagName('body')[0];
var LightLevel = 0;
var alphaLevel = 1
  for(var i = 0; i < 81; i++) {
    var newTile = document.createElement('div')
    LightLevel += .8;
    alphaLevel -= .012
    newTile.style.width = '11.1%';
    newTile.style.float = 'left';
    newTile.style.paddingBottom = '11.1%';
    if(i % 2 === 0) {
      newTile.style.backgroundColor = 'hsla(191,100%,' + LightLevel + '%,' + alphaLevel + ')';
    } else {
      newTile.style.backgroundColor = 'hsla(170,100%,' + LightLevel + '%,' + alphaLevel + ')';
    }
    body.appendChild(newTile);
  }
