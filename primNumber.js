// Prime Number

function isPrime(num) {
	let divisor = 2;
	while(num > divisor){
		if(num % divisor == 0) {
			return false;
		} else
		divisor++;
	} return true;
}

console.log(isPrime(12));

//  as long as the num being passed is greater than 2 
// check if the num is equally divided by 2 without a remainder
// if it is, return false otherwise increment untill there is a remainder,
// if there is then return true


