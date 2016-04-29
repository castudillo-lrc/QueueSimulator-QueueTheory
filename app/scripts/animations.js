
var arrServers = [0,0,0,0];
var id = 1;
var pos=0;
var cantidad=0;
var queue = [];

var lambda = 3;

var lapses = []
function setLapses (laps) {
	var r = new Rands();
	lapses = r.poisson(lambda,[laps]);
	for (var i = 0; i < lapses.length; i++) {
		if(lapses[i] ==0){
			lapses[i] = 1;
		}
		
	};
	//console.log(lapses);
}



function sendClients(){
	setInterval(function myVar(){

		cantidad += lapses[pos];
		//console.log(cantidad);
		for (var i = 0; i < lapses[pos]; i++) {
		(function  (ins) {	
			setTimeout(function  () {
				$( "#fila" ).append( '<div id="example-'+id+'" class="circle small"></div>');
				moveClient("#example-"+id,0, 200);
				moveClient("#example-"+id,350, 200);
				queue.push("#example-"+id);
				//console.log(queue.shift());
				id++;
			},5000/ins)
		})(i);
		};
		pos += 1;
	}, 5000)
}

function path1(idS){
	cantidad -=1;
	moveClient(idS,575, 40);
	arrServers[0]=1;
	ereaseClient(idS, 0);
}
function path2(idS){
	cantidad -=1;
	moveClient(idS,575, 145);
	arrServers[1]=1;
	ereaseClient(idS, 1);
}
function path3(idS){
	cantidad -=1;
	moveClient(idS,575, 250);
	arrServers[2]=1;
	ereaseClient(idS, 2);
}
function path4(idS){
	cantidad -=1;
	moveClient(idS,575, 350);
	arrServers[3]=1;
	ereaseClient(idS, 3);
}

function ereaseClient(ids, position){
	setTimeout(function  () {
				console.log("borrando "+ids);
				$( ids ).remove();
				arrServers[position]=0;
				console.log(arrServers[position]);
				;
			},5000)
}

function printClients(){
	setInterval(function myVar(){
		//console.log(queue.shift());
		var random = Math.random();
		//console.log(arrServers);
		if($.inArray(0,arrServers) != -1){
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
			//console.log("funciona");
		}
	}, 100)
}

//console.log(clients);

document.getElementById('playButton').onclick = function(e) {
  /*move('#example-1')
    .to(500, 200)
    .end();*/

    $( "#canvas" ).append( '<div id="example-'+1+'" class="circle small"></div>');
    moveClient("#example-1", 100, 200);
    moveClient("#example-1", 350, 200);

};



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