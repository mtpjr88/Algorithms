// Palindrome

// function isPalindrome(str) {

// 	var len = str.length,
// 	lcase = str.toLowerCase();
// 	var re = /[\W\d]/g;
// 	var replace = lcase.replace(re, ' ');

// // remove all non alpha numerical characters

// 	for(let i = 0; i < len; i++) {
// 		for(let j = len-1; j > i; j--){
// 			if(replace[i] === replace[j]) {
// 				 return true + replace + ' is a Palindrome'
// 			} else{
// 				return false;
// 			}
// 		}
// 	}
// }

// console.log(isPalindrome('Sore #was I ere I saw Eros'));

function palen(str) {
  let reversed = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed === str;
}

console.log(palen('hello'));
