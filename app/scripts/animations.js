
var arrServers = [0,0,0,0];

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
	console.log(lapses);
}


/*
for (var i = 0; i < lapses.length; i++) {
	console.log(lapses[i]);
	
	(function  (index) {
		if(index === 0){
			setTimeout(function  () {
				
				//$( "#fila" ).append( '<div id="example-'+id+'" class="circle small"></div>');
				//moveClient("#example-"+id,0, 0);
				//moveClient("#example-"+id,350, 0);
				//console.log("time lapse");
				//id++;
			},5000)
		}else{
			
			
			
		}
	})(lapses[i]);
	
};
*/

var id = 1;
function sendClients(clients){
	

	for (var i = 0; i < clients; i++) {
		(function  (ins) {	
			setTimeout(function  () {
				$( "#fila" ).append( '<div id="example-'+id+'" class="circle small"></div>');
				moveClient("#example-"+id,0, 0);
				moveClient("#example-"+id,350, 0);
				console.log("time lapse");
				id++;
			},5000/ins)
		})(i);
	};
}

function init(){
	for (var i = 0; i < lapses.length; i++) {
		(function  (index) {
			sendClients(lapses[index]);
			console.log(lapses[index]);
		})(i);
	};
}

var pos=0;
var cantidad=0;
function cholo(){
	setInterval(function myVar(){

		cantidad += lapses[pos];
		console.log(cantidad);
		for (var i = 0; i < lapses[pos]; i++) {
		(function  (ins) {	
			setTimeout(function  () {
				$( "#fila" ).append( '<div id="example-'+id+'" class="circle small"></div>');
				moveClient("#example-"+id,0, 0);
				moveClient("#example-"+id,350, 0);
				console.log("time lapse");
				id++;
			},5000/ins)
		})(i);
		};
		pos += 1;
	}, 5000)
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