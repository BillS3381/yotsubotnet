

// ==UserScript==
// @name         le reddit auto-draw
// @namespace    fagot
// @version      0.1
// @author       Shlomo Goldburger
// @match        https://www.reddit.com/place?webview=true
// @grant        unsafeWindow
// @require      https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==

var socket;
var socketserverurl = "https://plebbit.ga:8080";
var modhash;

function sleep (delay) {
    return new Promise(resolve => setTimeout(resolve, delay));
}

async function drawWhenReady() {

    while (document.getElementById("place-timer").style.display != "none") {
        console.log("Not allowed to draw, waiting 15 sec...");
        await sleep(15000);
    }
    console.log("We can draw now!");
  	socket.emit("get_work");
}

async function drawPixel(x,y,c) {
    var color = await getPixelColorAtCoords(x, y);
  
    if (color == c) { // Try again if color matches
        console.log("Color matches.. Trying again");
       drawWhenReady();
    } else {
        $.ajax({
          url: "https://www.reddit.com/api/place/draw.json",
          type: "POST",
          headers: {
              "x-requested-with" : "XMLHttpRequest",
              "x-modhash"        : modhash,
          },
          data: {
              x: x,
              y: y,
              color: c
          }
    		});
    	console.log(`Drew pixel`);
      setTimeout(function(){ location.reload(); }, 5*1000);
    }
}

function getPixelColorAtCoords(x,y) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: "https://www.reddit.com/api/place/pixel.json",
            type: "GET",
            headers: {
                "x-requested-with" : "XMLHttpRequest",
                "x-modhash"        : modhash,
            },
            data: {
                x: x,
                y: y,
            },
            success: function(response) {
                resolve(response.color)
            },
        });
    });
}

function init() {
    console.log("le reddit pixel drawer loaded.");
    modhash = document.getElementById("config").innerHTML.match(/"modhash": "(\w+)"/)[1];
  
    var proto = document.createElement('script');
    proto.type = 'text/javascript';
    proto.src = 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.3/socket.io.js';
    var dhead = document.getElementsByTagName('head')[0] || document.documentElement;
    dhead.insertBefore(proto, dhead.firstChild);

    socket = io.connect(socketserverurl);
      socket.on('work', function (data) {
          console.log("Got work index " + data['index']);
        var pixelData = data['pixel_data'];
        drawPixel(pixelData.x, pixelData.y, pixelData.color);
    });

    drawWhenReady();
}

setTimeout(init, 1500);

