var arr = [90,34,54,65,23,45,'hey', false, 12.56]

console.log(arr)

var a = arr[2]

console.log(a)

arr[3] = 345

console.log(arr)

console.log("The length of the array is ", arr.length)

// inbuilt Js array methods

var arr2 = [12,23,43,54,6]

// pop method - removes the last element

var c = arr2.pop()

console.log("The array is ",arr2," and the popped value is ",c)

// Pushmethod

arr2.push(34)

console.log(arr2)

// shift method

var d = arr2.shift()

console.log(d)
console.log("Sifted array ",arr2)

// unshift method

var e = arr2.unshift(109)

console.log(e)
console.log(arr2)