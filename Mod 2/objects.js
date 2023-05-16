var Steve = {
    name: 'Mkala',
    age: 23,
    home: 'Mombasa',
    millionaire: true
}

// console.log(Steve)

// //dot notation

// console.log(Steve.age)

// // bracket notation

// console.log(Steve['name'])

var cap= {
    fname: 'Steve',
    lname: 'Rogers',
    age: 103,

    friends: ['Bucky', 'Stark', 'Widow', 'Hawkeye'],

    isAvenger: true,

    address: {
        box: 1700,
        city:{
            name: 'Brooklyn',
            postal: 12345
        }
    }
}

console.log(cap.friends)

cap.isAvenger = false

console.log(cap.address.city.name)

cap.movies = ['Captain America 1, 2 & 3', 'Age of Ultron', 'Endgame', 'Infinity War']

delete cap.age

console.log(cap)