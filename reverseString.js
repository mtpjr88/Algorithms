// Reverse a String

    function reverseString(string) {
        let newString = '';
        for(let i = string.length-1; i >= 0; i--) {
            newString += string[i];
        }
        console.log(newString);
    }

// reverseString('hello');

//  Using native Javascript methods
        function revString(string) {
          let newString =  string.split('').reverse().join('');

            console.log(newString);
        }

       // revString('hello');


// reverse a string and store chars as indexed in array
       function rev(string) {
           let arr = [];
        let stringArray = string.split('');
        for(let i = stringArray.length-1; i  >= 0; i--) {
            arr.push(stringArray[i]);
        }
        console.log(arr);
       }

      // rev('hello');