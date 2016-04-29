function po(lambda, miu, m){
  var total =0;
  for (var i =0 ; i < m ; i++){
    total+= ((1/factorial(i))*Math.pow((lambda/miu), i));
  }
  
  total += (1/factorial(m))*Math.pow((lambda/miu), m)*((m*miu)/(m*miu-lambda));
  //console.log(1/total)
  return 1/total;
  
}

function l(lambda, miu, m){
  var total = 0;
  
  total = (lambda*miu*Math.pow(lambda/miu, m))/(factorial(m-1)*Math.sqrt(m*miu-lambda)*po(lambda, miu, m)+(lambda/miu));
  //console.log(total);
  return total;
}

function w(lambda, miu, m){
  return l(lambda, miu, m)/lambda;
}

function lq(lambda, miu, m){
  return l(lambda, miu, m)-lambda/miu;
}

function wq(lambda, miu, m){
  return (lq(lambda, miu, m)/lambda)
}

function rate(lambda, miu, m){
  return lambda/(m*miu)
}

function factorial (n) {
	var total = 1; 
	for (var i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}

  
  console.log(w(2,3,1));



$('#playButton').click(function(){
    $("#rP0").text(po($("#lambdaid").val(), $("#muiid").val(), 4));
    $("#rl").text(l($("#lambdaid").val(),$("#muiid").val(), 4));
    $("#rw").text(w($("#lambdaid").val(), $("#muiid").val(), 4));
    $("#rlq").text(lq($("#lambdaid").val(), $("#muiid").val(), 4));
    $("#rwq").text(wq($("#lambdaid").val(),$("#muiid").val(), 4));
    $("#rrate").text(rate($("#lambdaid").val(), $("#muiid").val(), 4));
});


