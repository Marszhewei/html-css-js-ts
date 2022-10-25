// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'FireFox';

let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc !== 'images/firefox.svg') {
        myImage.setAttribute('src', 'images/firefox.svg');
    } else {
        myImage.setAttribute('src', 'images/another-firefox.webp');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please input your name: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla that\'s so cool!，' + myName;
    }
}

myButton.onclick = () => {
    setUserName();
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla that\'s so cool! ' + storedName;
}


// variable: recommand let not var
let myVar = 'fetch';
myVar = 'mars';

v1 = 'nihao';
var v1;         // not recommand


// variable type
let s = 'this is a string';             // String
let n = 10;                             // Number
let b = true;                           // Boolean
let arr = [1, 2, 3];                    // Array
let obj = document.querySelector('h1'); // Object

// single-line
/* multi-line */

// operator
/* + - * / = === !== !*/


// if else
let iceCream = 'chocolate';
if (iceCream === 'chocolate') {
    alert('i like chocolate.');
} else {
    alert('i don\'t link chocolate.');
}


// function
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);


// 匿名函数
// document.querySelector('html').onclick = function () {
//     alert('Dont\'t clink.');
// }
// 匿名函数的箭头写法
// document.querySelector('html').addEventListener('click', () => {
//     alert('You clink me?');
// });
