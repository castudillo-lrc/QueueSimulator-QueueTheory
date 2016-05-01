"use strict";

/**
An array of servers, set the state of the servers to 0,  0 == aviable, 1== occupy 
@global
 */
var arrServers = [0, 0, 0, 0];
/**
Set the inital id of the clients that are created in the animation.
@global
 */
var id = 1;
/**
Set the position  of the clients that are created in the animation.
@global
 */
var pos = 0;
/**
Set the quantity  of the clients that are waiting in line.
@global
 */
var quantity = 0;
/**
Set a queue for calculations of priorities of the clients.
@global
 */
var queue = [];
/**
Grabs the value of lambda entered by user. 
@global
 */
var lambda = $("#lambdaid").val();
/**
Grabs the value of mui entered by user. 
@global
 */
var miu = $("#muiid").val();
/**
Sets the exponential distribution for the servers. 
@global
 */
var exponential = [];

/**
Sets in the view the number of clients that are waiting in the queue
@global
 */
$("#queueSize").text(quantity);

/**
Sets the number of lapses that the system will have, by default it will be 24, simulating a day
@global
 */
var lapses = [];
/**
Initialize the correct distribution for servers and arrivings
@param {number} laps, the number of lapses that the simulation will have
@global
 */
function setLapses(laps) {

	var r = new Rands();
	console.log($("#lambdaid").val() + " + " + $("#muiid").val());
	lambda = $("#lambdaid").val();
	miu = $("#muiid").val();
	lapses = r.poisson(lambda, [laps]);
	exponential = r.exponential(miu * 500, [1000]);
	for (var i = 0; i < lapses.length; i++) {
		if (lapses[i] == 0) {
			lapses[i] = 1;
		}
	};
	//console.log(lapses);
}

/**
Initialize rate of arriving of clients to de system
@global
 */
function sendClients() {
	setInterval(function myVar() {

		//console.log(quantity);
		for (var i = 0; i < lapses[pos]; i++) {
			(function (ins) {
				setTimeout(function () {
					$("#fila").append('<div id="example-' + id + '" class="circle small"></div>');
					moveClient("#example-" + id, 0, 200);
					moveClient("#example-" + id, 350, 200);
					queue.push("#example-" + id);
					quantity += 1;
					$("#queueSize").text(quantity);
					id++;
				}, 5000 / ins);
			})(i);
		};
		pos += 1;
	}, 5000);
}

/**
Sets the correct path for the animation when the client goes to the first server
@param {number} idS, position in the x axis of the server
@global
 */
function path1(idS) {
	//quantity -=1;
	moveClient(idS, 575, 40);
	arrServers[0] = 1;
	ereaseClient(idS, 0, 40);
}
/**
Sets the correct path for the animation when the client goes to the second server
@param {number} idS, position in the x axis of the server
@global
 */
function path2(idS) {
	//quantity -=1;
	moveClient(idS, 575, 145);
	arrServers[1] = 1;
	ereaseClient(idS, 1, 145);
}
/**
Sets the correct path for the animation when the client goes to the third server
@param {number} idS, position in the x axis of the server
@global
 */
function path3(idS) {
	//quantity -=1;
	moveClient(idS, 575, 250);
	arrServers[2] = 1;
	ereaseClient(idS, 2, 250);
}
/**
Sets the correct path for the animation when the client goes to the fourth server
@param {number} idS, position in the x axis of the server
@global
 */
function path4(idS) {
	//quantity -=1;
	moveClient(idS, 575, 350);
	arrServers[3] = 1;
	ereaseClient(idS, 3, 350);
}
/**
Erease the client that has compleated a path from the animation
@param {number} idS, id of the client
@param {number} position, id of the server in the array "arrServers"
@param {number} y, position in the y axis of the client
@global
 */
function ereaseClient(ids, position, y) {
	quantity -= 1;
	$("#queueSize").text(quantity);
	setTimeout(function () {

		moveClient(ids, 600, y);
		console.log("borrando " + ids);
		$(ids).remove();
		arrServers[position] = 0;
		//console.log(arrServers[position]);

		console.log("borrado " + exponential.shift());
		;
	}, 1 / exponential.shift() + 5000);
}

/**
Function to provide feedback of the clients created in the animation
@global
 */

function printClients() {
	setInterval(function myVar() {
		console.log(quantity);
		//console.log(queue.shift());
		var random = Math.random();
		//console.log(arrServers);
		if ($.inArray(0, arrServers) != -1) {

			if (queue[0] !== 'undefined') {
				try {
					//console.log("moviendo al servidor");
					if (arrServers[0] == 0 && random < 1 / 4) {
						path1(queue.shift());
					} else if (arrServers[1] == 0 && random >= 1 / 4 && random < 2 / 4) {
						path2(queue.shift());
					} else if (arrServers[2] == 0 && random >= 2 / 4 && random < 3 / 4) {
						path3(queue.shift());
					} else if (arrServers[3] == 0 && random >= 3 / 4 && random < 4 / 4) {
						path4(queue.shift());
					}
				} catch (err) {}
				//console.log("there is no people in the queue");

				//console.log("funciona");
			}
		}
	}, 100);
}

/**
Initialize all the functions to run the animation by pressing the button with id "playButton"
@global
 */
document.getElementById('playButton').onclick = function () {
	init();
};

/**
Move a client in the animation
@param {number} id, id of the client
@param {number} x, wanted position in the x axis of the client
@param {number} y, wanted position in the y axis of the client
@global
 */
function moveClient(id, x, y) {
	move(id).to(x, y).duration('2s').end();
}

/**
initialize the animation
@global
 */
function init() {
	console.log("initiating simulation");
	setLapses(24);
	sendClients();
	printClients();
}

/**
It doesn't allow the user to run the animation if the values for Lambda and Mui are not set
@global
 */
$("#lambdaid").on("input", function () {
	if (this.value) {
		$("#muiid").on("input", function () {
			if (this.value) {
				$("#playButton").prop("disabled", false);
			}
		});
	}
});
//# sourceMappingURL=animations.js.map
