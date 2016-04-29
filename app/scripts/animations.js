document.getElementById('playButton').onclick = function(e) {
  /*move('#example-1')
    .to(500, 200)
    .end();*/

    $( "#canvas" ).append( '<div id="example-'+1+'" class="circle small"></div>');
    moveClient("#example-1", 100, 200);
    moveClient("#example-1", 350, 200);

};

var id = 1;

setInterval(function  () {
	
	$( "#canvas" ).append( '<div id="example-'+id+'" class="circle small"></div>');
	moveClient("#example-"+id,0, 0);
	moveClient("#example-"+id,350, 0);
	console.log("time lapse");
	id++;
},3000)

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