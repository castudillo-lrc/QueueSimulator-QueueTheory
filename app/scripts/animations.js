
var arrServers = [0,0,0,0];
var id = 1;
var pos=0;
var quantity=0;
var queue = [];
var lambda = $("#lambdaid").val();
var miu = $("#muiid").val();
var exponential = [];


$("#queueSize").text(quantity);

var lapses = []
function setLapses (laps) {
	
	var r = new Rands();
	console.log($("#lambdaid").val() +" + " + $("#muiid").val());
	lambda = $("#lambdaid").val() ;
	miu = $("#muiid").val();
	lapses = r.poisson(lambda,[laps]);
	exponential = r.exponential(miu*500, [1000])
	for (var i = 0; i < lapses.length; i++) {
		if(lapses[i] ==0){
			lapses[i] = 1;
		}
		
	};
	//console.log(lapses);
}



function sendClients(){
	setInterval(function myVar(){

		
		//console.log(quantity);
		for (var i = 0; i < lapses[pos]; i++) {
		(function  (ins) {	
			setTimeout(function  () {
				$( "#fila" ).append( '<div id="example-'+id+'" class="circle small"></div>');
				moveClient("#example-"+id,0, 200);
				moveClient("#example-"+id,350, 200);
				queue.push("#example-"+id);
				quantity += 1;
				$("#queueSize").text(quantity);
				id++;
			},5000/ins)
		})(i);
		};
		pos += 1;
	}, 5000)
}

function path1(idS){
	//quantity -=1;
	moveClient(idS,575, 40);
	arrServers[0]=1;
	ereaseClient(idS, 0, 40);
}
function path2(idS){
	//quantity -=1;
	moveClient(idS,575, 145);
	arrServers[1]=1;
	ereaseClient(idS, 1, 145);
}
function path3(idS){
	//quantity -=1;
	moveClient(idS,575, 250);
	arrServers[2]=1;
	ereaseClient(idS, 2, 250);
}
function path4(idS){
	//quantity -=1;
	moveClient(idS,575, 350);
	arrServers[3]=1;
	ereaseClient(idS, 3, 350);
}

function ereaseClient(ids, position, y){
	quantity-=1;
	$("#queueSize").text(quantity);
	setTimeout(function  () {
		
		moveClient(ids,600, y);
				console.log("borrando "+ids);
				$( ids ).remove();
				arrServers[position]=0;
				//console.log(arrServers[position]);
				
				console.log("borrado "+exponential.shift());
				;
			}, (1/exponential.shift())+5000)

}

function printClients(){
	setInterval(function myVar(){
		console.log(quantity);
		//console.log(queue.shift());
		var random = Math.random();
		//console.log(arrServers);
		if($.inArray(0,arrServers) != -1){

			if(queue[0] !== 'undefined'){
				try{
					//console.log("moviendo al servidor");
					if(arrServers[0]==0 && random < 1/4){
						path1(queue.shift());
					}
					else if(arrServers[1]==0 && random >= 1/4 && random < 2/4){
						path2(queue.shift());
					}
					else if(arrServers[2]==0 && random >= 2/4 && random < 3/4){
						path3(queue.shift());
					}
					else if(arrServers[3]==0 && random >= 3/4 && random < 4/4){
						path4(queue.shift());	
					}
				}catch(err){
					//console.log("there is no people in the queue");
				}
				//console.log("funciona");
			}
		}
	}, 100)
}

//console.log(clients);

document.getElementById('playButton').onclick = function (){
	init();
}


function moveClient(id, x, y){
	move(id)
    .to(x, y)
    .duration('2s')
    .end();
}

function chooseMove2(id, x){

	move(id)
    .to(x, 500)
    .duration('2s')
    .end();

}

function getXpos (id) {
	console.log($( id ));
	var val = $( id ).css( "transform" );
	console.log(val);
	val = val.replace("matrix","");
	val = val.replace("(", "");
	val = val.replace(")", "");
	var arr = val.split(',');
	console.log(arr[4]); //pos x
	console.log(arr);
	console.log(val);
}



function init() {
	console.log("initiating simulation");
	setLapses(24);
	sendClients();
	printClients();
}




$("#lambdaid").on("input", function() {
    if(this.value){
    	$("#muiid").on("input", function() {
		    if(this.value){
		    	$( "#playButton" ).prop( "disabled", false );
		    }
});
    }
});