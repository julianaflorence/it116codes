console.dir(document);
//gives the domian of the webpage//
console.log(document.domain);
//gives the url of the webpage//
console.log(document.URL);
//access the title element
//the document attribute can access different elements in the console, below is title-head//
console.log(document.title);

console.log(document.doctype);

console.log(document.head);

console.log(document.body);
// below will access all the elements in the tree//
console.log(document.all);
//the document attribute can access the tree, find any element, and change it //
document.all [10] .textContent = "I just changed the header";
// we check the actual dom, we find the actual element //
console.log(document.forms);
// do we have any links or images? we can find it on the console//
console.log(document.links);
console.log(document.images);
///////////////////////
//now, we get the element by the id////
console.log(document.getElementById('header-title'));
//declare the varible with let or var to pass the object into the arugment parameter
let headerTitle = document.getElementById('header-id');
console.log(headerTitle);

//now we can change the header title by tect content//
headerTitle.textContent = "Change the Title Again."
//this will do the same thing//
headerTitle.innerText = "hello, changed you again"
//now that we have the varible, we can change anything//
headerTitle.style.color = "blue";
//now, lets get the element by referencing the class name//

var items = document.getElementsByClassName('list-group');
console.log(items);
//now we refernece the index//
items[0].style.backgroundColor = 'red' ;
items[0].style.fontWeight = 'bold' ;
items[0].textContent= 'summer time!!!' ;
items[0].style.color = 'blue' ,


items[1].style.backgroundColor = 'yellow' ;
items[1].style.fontWeight = 'bold' ;
items[1].textContent= 'hey girl' ;
items[1].style.color = 'green' ;

//for (let i = 1; <=10 i++ ) {
    console.log (i);
}

//count by 2 to 20 by fixed value of increment//
for (let i = 1; i <=20; i+=2) {
    console.log(i);

}
for (let i = 100; i>= 0; i=2) {
    console.log(i);
}
//create an array, for loop will go through it//

const myPearls = ['Bloom', 'Petal', 'Lily', 'Sage' , 'Cafe' , 'Pen', 'Poster' ];
for (let i =0; i < myPearls.length; i++ ) {
    console.log(i, myPearls[i]); 
} //

// for (let i = 0; i < myPearls.length; i++) {
//     console.log(i, myPearls[i]);
// }

// for(var i = 0; i < items.length; i++) {

//     items[i].style.backgroundColor = 'grey';
//     items[i].textContent = "Changing the List Items";
//     items[i].style.color = 'white';

// }

/////GetElementByTagName

// 
// var li = document.getElementsByTagName('li');

// console.log(li); 
// console.log(li[1]);

// li[1].textContent = "Hello 2 Now"; 
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'green';
// li[1].style.color = 'white'; 

// for(var i = 0; i < li.length; i++) {

//     li[i].style.backgroundColor = 'lightgrey';
//     li[i].textContent = "i changed the items from the DOM";
//     li[i].style.color = 'white'; 

// }

//Query Selector:

// 
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px hotpink'; 

//var input = document.querySelector('input');
//input.value = "I just changed the text value in the input box."


//var submit = document.querySelector('input [type="submit"]');
//submit.value = "Hello button";
//here we practice the last child//
//var lastItem = document.querySelector(  '.list-group-item-last-child');
//lastItem.style.color ="pink";
//we are selecting every other item in the list//
//var otherItem = document.querySelector('.list-group-item-child(2)');
//otherItem.style.color = "green";
/////

var titles = document.querySelectorAll('.title');

console.log(titles); 

titles(0).textContent ="hello, i changed the title again";

var odd = document.querySelectorAll('linth-child(odd)')
var even = document.querySelectorAll('linth-child(even)')

for (var i =0, i < odd.length; i++) {
// for loop is changing the style based on odds and evens// 
    odd [i].style.backgroundColor = "grey";
    even[i].style.backgroundColor = "blue";
    even[i].style.color = "whitesmoke";
    odd[i].style.color = "whitesmoke" ;

}
