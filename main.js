// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                               Explorer Mode                               //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:
function sum(a,b) {
  return a+b;
}

// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('****  (1) sum ****');
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,3)===5);
console.assert(sum(1,0)===1);
console.assert(sum(-48,5)===-43);

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg(a,b,c) {
  return (a+b+c)/3;
}

// write your console.log/asserts here:
console.log('****  (2) avg ****');
console.log('average of 1, 2, and 3 is ', avg(1,2,3));
console.assert(avg(1,2,3)===2);
console.assert(avg(1,1,1)===1);
console.assert(avg(4,4,1)===3);
console.assert(avg(1,0,0)===1/3);

// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(aString) {
  return aString.length;
}

// write your console.log/asserts here:
console.log('****  (3) getLength ****');
console.log('The length of "was" is: ', getLength('was'));
console.assert(getLength('help me')===7);
console.assert(getLength('I like to write code')===20);
console.assert(getLength('I can count !@#$%^&*()')===22);

// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(a,b) {
  return b > a;
}

// write your console.log/asserts here:
console.log('****  (4) greaterThan ****');
console.log('8 is greater than 9: ' + greaterThan(8,9));
console.assert(greaterThan(2,1)===false);
console.assert(greaterThan(4,4)===false);
console.assert(greaterThan(100,101)===true);

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formatted like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name) {
  return `Hello, ${name}!`;
}
// write your console.log/asserts here:
console.log('****  (5) greet ****');
console.log(`Message printed: ${greet('Bob')}`);
console.assert(greet('Bob') === 'Hello, Bob!');
console.assert(greet('Mike') === 'Hello, Mike!');
console.assert(greet('Sally') === 'Hello, Sally!');
console.assert(greet('') === 'Hello, !');


// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib(w1,w2,w3,w4) {
  return `The ${w1} ate my ${w2} with ${w3} great ${w4}.`
}
// write your console.log/asserts here:
console.log('****  (6) madlib ****');
console.log(madlib('fox', 'homework', 'the', 'panda'));
console.assert(madlib('fox', 'homework', 'the', 'panda')==='The fox ate my homework with the great panda.');
console.assert(madlib('chicken', 'notebook', 'a', 'mustang')==='The chicken ate my notebook with a great mustang.');
console.assert(madlib('dog', 'desk', 'it', 'kitten')==='The dog ate my desk with it great kitten.');


// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(a,b) {
  return Math.max(a,b);
}
// write your console.log/asserts here:
console.log('****  (7) max ****');
console.log(`Max of 2 and 3 is ${max(2,3)}`);
console.assert(max(2,3)===3);
console.assert(max(-3,3)===3);
console.assert(max(0,0)===0);

// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(a,b,c) {
  return Math.max(a,b,c);
}
// write your console.log/asserts here:
console.log('****  (8) maxOfThree ****');
console.log(`Max of 1, 2, 3 is ${maxOfThree(1,2,3)}`);
console.assert(maxOfThree(1,2,3)===3);
console.assert(maxOfThree(11,23,101)===101);
console.assert(maxOfThree(-34,0,89)===89);


// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel(char) {
  return (['a','e','i','o','u'].indexOf(char)>-1);
}

// write your console.log/asserts here:
console.log('****  (9) isVowel ****');
console.log(`a is a vowel: ${isVowel('a')}`);
console.assert(isVowel('a')===true);
console.assert(isVowel('e')===true);
console.assert(isVowel('i')===true);
console.assert(isVowel('o')===true);
console.assert(isVowel('u')===true);
console.assert(isVowel('f')===false);

// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function translate(aString) {
  let vowels = ['a','e','i','o','u'];

  return aString.split('').map( (char) => {
    // if char is a space or a vowel, just return it
    if( char === ' ' || vowels.indexOf(char) >= 0 ) {
      return char;
    } else { // otherwise, return the consonant doubled with 'o' in between.
      return char + 'o' + char;
    }
  }).join('');

}

// write your console.log/asserts here:
console.log('****  (10) translate ****');
console.log(`this is fun translated is ${translate('this is fun')}`);

// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse(aString) {
  aString = aString.split('');
  reversedString = '';
  while( aString.length > 0 ) {
    reversedString += aString.pop();
  }
  return reversedString;
}
// write your console.log/asserts here:
console.log('****  (11) reverse ****');
console.log(`jag testar reversed is ${reverse('jag testar')}`);

// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
function largest(arr) {
  return Math.max.apply(null, arr);
}

// write your console.log/asserts here:
console.log('****  (12) largest ****');
console.log('the largest number in the `numbers` array is ', largest(numbers));
console.assert(largest(numbers)===101);
console.assert(largest([-1,20,100,99])===100);
console.assert(largest([81,82,93,100])===100);

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:
function longest(arr) {
  let maxLength = '';
  arr.forEach( (string) => {
    if( string.length > maxLength.length ) {
      maxLength = string;
    }
  });
  return maxLength;
}
// write your console.log/asserts here:
console.log('****  (13) longest ****');
console.log(`longest of ['one', 'two', 'three'] is ${longest(['one', 'two', 'three'])}`);
console.assert(longest(['one', 'two', 'three']) === 'three');
console.assert(longest(strings) === 'collection');

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:
function getEvens(arr) {
  return arr.filter((e)=> {
    if(e%2 === 0) {
      return true;
    }
    return false;
  })
}

// write your console.log/asserts here:
console.log('****  (14) getEvens ****');
console.log(`Evens of numbers is: ${getEvens(numbers)}`);

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
function getOdds(arr) {
  return arr.filter((e)=> {
    if(e%2 != 0) {
      return true;
    }
    return false;
  })
}

// write your console.log/asserts here:
console.log('****  (15) getOdds ****');
console.log(`Odds of numbers is: ${getOdds(numbers)}`);

// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
function containsIs(arr) {
  return arr.filter((e) => {
    if(e.indexOf('is') >= 0) {
      return true;
    }
    return false;
  });
}

// write your console.log/asserts here:
console.log('****  (16) containsIs ****');
console.log(`strings that contain 'is': ${containsIs(strings)}`);


///////////////////////////////////////////////////////////////////////////////
//                               Adventurer Mode                             //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:
function contains(aString, arr) {
  return arr.filter((e) => {
    if(e.indexOf(aString) >= 0) {
      return true;
    }
  })
}
// write your console.log/asserts here:
console.log('****  ADVENTURER ****');
console.log('****  (17) contains ****');
console.log(`strings that contains 'is': ${contains('is', strings)}`);
console.assert(compareArrays( contains('abcd', ['abcdef', 'dkriabcdjkshdu', 'judiso']) , ["abcdef", "dkriabcdjkshdu"]));

// Implement comparison of two arrays for equality?
function compareArrays(arr1, arr2) {
  // check that their lengths are the same, that's quick to do
  if( arr1.length != arr2.length ) {
    return false;
  }
  // sort the arrays in place
  arr1.sort();
  arr2.sort();

  // go element by element and make sure the strings match.
  for( let i=0; i< arr1.length; i++ ) {
    if( arr1[i] != arr2[i] ) {
      return false;
    }
  }
  return true;
}


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:
function teachersOf(subject, teachers) {
  return teachers.filter((teacher) => {
    console.log(teacher);
    if(teacher.teaches === subject) {
      return true;
    }
    return false;
  })
}
// write your console.log/asserts here:
console.log('****  (18) teachersOf ****');
console.log(`Instructors of Javascript: ${teachersOf('JavaScript', instructors)}`);

// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:
function objectMatches(subject, key, objs) {
  return objs.filter((obj) => {
    if(obj[key] === subject) {
      return true;
    }
    return false;
  })
}

// write your console.log/asserts here:
console.log('****  (19) objectMatches ****');
console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                 Epic Mode                                 //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:
function getAge(aString) {
  let patt1 = new RegExp('\\d{1,2}-\\d{1,2}-\\d{4}');
  let patt2 = new RegExp('\\d{1,2}/\\d{1,2}/\\d{4}');

  // check that the input in valid format
  if( patt1.test(aString) || patt2.test(aString) ) {
    // we have a valid pattern
    let today = new Date();
    let testDate = new Date(aString);
    // test to make sure the date isn't after today's date
    if( testDate > today ) {
      throw 'Date is in the future!';
    } else {
      // compute the difference in years
      let ageDiff = today - testDate.getTime();
      let ageDate = new Date(ageDiff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
  else {
    // we don't have a valid pattern, throw an error
    throw 'Invalid date format!';
  }
}


// write your console.log/asserts here:
console.log('****  EPIC ****');
console.log('****  (20) getAge ****');
try {
  console.log(`${getAge('12-25-2020')}`);
} catch (e) {
  console.log(e);
}

try {
  console.log(`12-25-2000 is ${getAge('12-25-2000')} years ago.`);
} catch (e) {
  console.log(e);
}

// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:
function isValidPassword(aString) {
  let c1 = new RegExp('\\S{8,}');
  let c2 = new RegExp('\\d{1,}');
  let c3 = new RegExp('[.,!$&]{1}');
  let c4 = new RegExp('[A-Z]{1}');
  let c5 = new RegExp('[a-z]{1}');
  if( c1.test(aString)
      && c2.test(aString)
      && c3.test(aString)
      && c4.test(aString)
      && c5.test(aString) ) {
    // valid password
    return true;
  }
  return false;
}
// write your console.log/asserts here:
console.log('****  (21) isValidPassword ****');
console.log(`Is 'hello$A1' a valid password: ${isValidPassword('hello$A1')}`);
console.log(`Is 'hello$A1' a valid password: ${isValidPassword('hello$A')}`);
console.log(`Is '1234567890' a valid password: ${isValidPassword('1234567890')}`);
console.log(`Is 'Hh12345678' a valid password: ${isValidPassword('Hh12345678')}`);
console.log(`Is 'hello$a1' a valid password: ${isValidPassword('hello$a1')}`);
console.log(`Is 'Aabcdefg$' a valid password: ${isValidPassword('Aabcdefg$')}`);
