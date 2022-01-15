//create an empty object where the count will be stored
let count = {};
const array = ['a', 'b', 'c','b', 'b','b','a','a','c','a','c'];

//use forEach method to iterate over the array
array.forEach(x => { count[x] = (count[x] || 0) + 1 });
console.log(count);
//returns { a: 4, b: 4, c: 3 }

//creates an associative array object called count that will have a key value pair for each unique element in the array, where the key is the unique element value and the value is the count. He iterates over the array and for each value either increments the value or creates the key value pair (the value of the non-existent key evaluates to undefined so the || or operator takes a zero instead and adds the 1)

count['hello'] = (count['hello'] || 0) + 1;
console.log(count['hello'])
