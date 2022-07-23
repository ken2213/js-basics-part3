/*  
NOTE: These are all of my answers from The Odin Project's 
Foundations Course which is JavaScript Basics 
Fundamentals Part 3

Just uncomment the block of code in order for you
to find the answers! 
*/


/* O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ */ 


//1.) Write a function called add7 that takes one number and returns that number + 7.


//-----TRADITIONAL METHOD-----
/*
    function add7(num1) {
      return num1 + 7;
    }
    alert( add7(10) )
*/

//-----ARROW FUNCTION METHOD-----    
/*
    let add7 = (num1) => num1 + 7;

    alert(add7(10));
*/


/* O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ */ 



//2.) Write a function called multiply that takes 2 numbers and returns their product.


//-----TRADITIONAL METHOD-----
/*
    function multiply(num1, num2) {
      return num1 * num2;
    }

    alert( multiply(6, 6) );
*/


//-----ARROW FUNCTION METHOD-----    
/*
    let multiply = (num1, num2) => num1 * num2;

    alert( multiply(6, 6) );
*/


/* O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ */ 



// 3.) Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.


//-----TRADITIONAL METHOD-----
/*    
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    alert( capitalize('kenneth') );
*/


//-----ARROW FUNCTION METHOD-----


    //-----STRING ONLY------
/*    
    let capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    alert( capitalize('akase') );
*/


    //-----FULL NAME-----
/*    
    let capitalize = (firstName, lastName) => {
      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
      lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
      return `${firstName} ${lastName}`;
    }

    alert( capitalize('akase', 'akari') );
*/


/* O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ O ~ */ 



// 4.) Write a function called lastLetter that takes a string and returns the very last letter of that string:

// For example: lastLetter("abcd") should return "d"
    
//-----TRADITIONAL METHOD-----
/*
    function lastLetter(string) {
      return string.slice(-1);
    }

    alert( lastLetter('Kenneth') );
*/

//-----ARROW FUNCTION METHOD-----
/*
    let lastLetter = (string) => string.slice(-1);

    alert( lastLetter('Kenneth') );
*/
