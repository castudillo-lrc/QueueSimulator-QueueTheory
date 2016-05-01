/**
 * Calculates and returns the probability when there are no clients in the system, AKA P0.
 * @param {number} lambda - The lambda variable.
 * @param {number} miu - The miu variable.
 * @param {number} m - The number of servers in the system.
 */
function po(lambda, miu, m){
  var total =0;
  for (var i =0 ; i < m ; i++){
    total+= ((1/factorial(i))*Math.pow((lambda/miu), i));
  }
  
  total += (1/factorial(m))*Math.pow((lambda/miu), m)*((m*miu)/(m*miu-lambda));
  //console.log(1/total)
  return 1/total;
  
}

/**
 * Calculates and returns the average number of clients int the system, AKA L.
 * @param {number} lambda - The lambda variable.
 * @param {number} miu - The miu variable.
 * @param {number} m - The number of servers in the system.
 */

function l(lambda, miu, m){
  var total = 0;
  
  total = (lambda*miu*Math.pow(lambda/miu, m))/(factorial(m-1)*Math.sqrt(m*miu-lambda)*po(lambda, miu, m)+(lambda/miu));
  //console.log(total);
  return total;
}

/**
 * Calculates and returns the average time of a unit receiving a service in the system, AKA W.
 * @param {number} lambda - The lambda variable.
 * @param {number} miu - The miu variable.
 * @param {number} m - The number of servers in the system.
 */
function w(lambda, miu, m){
  return l(lambda, miu, m)/lambda;
}

/**
 * Calculates and returns the average number of clients that are waiting in line, AKA Lq.
 * @param {number} lambda - The lambda variable.
 * @param {number} miu - The miu variable.
 * @param {number} m - The number of servers in the system.
 */
function lq(lambda, miu, m){
  return l(lambda, miu, m)-lambda/miu;
}

/**
 * Calculates and returns the average time of a client that waits to be attended, AKA Wq.
 * @param {number} lambda - The lambda variable.
 * @param {number} miu - The miu variable.
 * @param {number} m - The number of servers in the system.
 */
function wq(lambda, miu, m){
  return (lq(lambda, miu, m)/lambda)
}
/**
 * Calculates and returns the rate of utilization of the system, AKA Ro.
 * @param {number} lambda - The lambda variable.
 * @param {number} miu - The miu variable.
 * @param {number} m - The number of servers in the system.
 */
function rate(lambda, miu, m){
  return lambda/(m*miu)
}

/**
 * Calculates and returns factorial of a number.
 * @param {number} n - Number to calculate it's factorial.
 */
function factorial (n) {
	var total = 1; 
	for (var i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}



/**
 * Start all the calculations of the variables by the push of the boton "simulate!".
 */

$('#playButton').click(function(){
    $("#rP0").text(po($("#lambdaid").val(), $("#muiid").val(), 4));
    $("#rl").text(l($("#lambdaid").val(),$("#muiid").val(), 4));
    $("#rw").text(w($("#lambdaid").val(), $("#muiid").val(), 4));
    $("#rlq").text(lq($("#lambdaid").val(), $("#muiid").val(), 4));
    $("#rwq").text(wq($("#lambdaid").val(),$("#muiid").val(), 4));
    $("#rrate").text(rate($("#lambdaid").val(), $("#muiid").val(), 4));
});


