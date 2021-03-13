
let marks = [10,20,30,40,50];
const fruits = ['orange', 'apple', 'mango', 'pineapple'];
const mixed = ['str', 90, [3, 5]];

const arr = new Array(20,30,40, 'banana');
console.log(arr);
console.log(mixed);
console.log(fruits[3]);

console.log(arr.length)
 
console.log(Array.isArray(arr));

arr[1] = 'umesh';
//console.log(arr);
let arrelement = arr[1];

let value = marks.indexOf(40);
console.log(value)

//mutating or modifying arrays
marks.push(12345);
//push karne par last me add ho jayega
console.log(marks)

marks.unshift(1001);
//unshift karne se y first m add ho jayega
console.log(marks)

marks.pop()
//end se ek element ko nikal lega 
console.log(marks);

marks.shift()
//ye first element ko nikal dega
console.log(marks);

marks.splice(1,2);
//kha se (1 se start kre) aur kitne element hatana chahte hai(2 elements ko hata de  )
console.log(marks);

marks.reverse()
console.log(marks);

let marks2 = [1,2,3,4]
marks = marks.concat(marks2);
//console.log(marks);
//marks me marks2 ko concat end me add kar dega

let myobj = {
    name : 'umesh',
    channel: 'code with umesh',
    isActive: true,
    marks: [5,6,7,8]
}
console.log(myobj)
console.log(myobj.isActive)
console.log(myobj.name)



