console.log("-----This is JavaScript Practice-----");
let radius = 1;
let x = 1;
let y = 1;

const circle = {
    radius: 1,
    color: 'red',
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function () {
        //This function is called a Method if its inside an object
        console.log('draw1');
    }
};

//Factory Function
function createCircle(radius) {
    return {
        radius, //if we are using parameter then we can simply use this
        draw() {
            console.log('draw2');
        }
    };
}

// const circle1 = createCircle(1);
// console.log(circle1);

//Constructor Function
function Circle() {
    //first letter will always be capital in constructor
    this.radius = radius;
    this.draw = function () {
        console.log('draw3');
    }
}

// const circle2 = new Circle(1);
// console.log(circle2.draw());

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]); //if we want to call argument of an array we will use apply method
const circle3 = new Circle(1);
// console.log(circle3.draw());

//Primitives are copied by their value
//Objects are copied by their reference
let i = { value: 10 };
let j = i;
i.value = 20;
//Another example
let obj = { value: 10 };
function increase(obj) {
    obj.value++;
}
increase(obj);
// console.log(obj);

// for (let key in circle)
//     console.log('1st For', key, circle[key]);

// for (let key of Object.keys(circle))
//     console.log('2nd For', key);

// for (let entry of Object.entries(circle))
//     console.log('3rd For', entry);

// if ('color' in circle)
//     console.log('yes'); // to check if key exist in object


// trying spread operator using loop
const anotherCircle = {};

for (let key in circle)
    anotherCircle[key] = circle[key];

// console.log('anotherCircle', anotherCircle);

// simple spread operator, it will give the same result
const anotherCircle1 = { ...circle };
// console.log('anotherCircle1', anotherCircle1);

// object.assing method
const anotherCircle2 = Object.assign({
    size: 'L'
}, circle);
// console.log('anotherCircle2', anotherCircle2);


//String Primitive
const message = "this\'s my first message";

//String Object
const anotherMessage = new String('hi');

//Template Literals ` ` backtick
const anotherMessage1 =
    `Hi John ${2 + 3},

Thank you for joining my mailing list.

Your's Sincere
Asfand
`;
// console.log(anotherMessage1);

//Date Object and its methods
const now = new Date();
now.getDate();

//1.Object's Excercise
// Create an address object with 3 properties
// street
// city
// zipcode
// then create function showAddress that show all the object values

const address = {
    street: 'number 3',
    city: 'Quetta',
    zipCode: '87300'
}

function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}
// console.log(showAddress(address));

//2.Object's Excercise
//Same excercise with factory function and constructor function
function showAddressFactory(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}
let addressFactory = showAddressFactory('number 3', 'Quetta', '87300')
console.log(addressFactory);

//and with Constructor Function
function ShowAddressConstructor() {
    this.street = 'number 3',
        this.city = 'Quetta',
        this.zipCode = '87300'
}
const showAddressConstructor = new ShowAddressConstructor();
console.log(showAddressConstructor);
