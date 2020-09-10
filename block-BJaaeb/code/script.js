/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

function createInputElm(label, type = "text") {
  let myLabel = document.createElement("label");
  let myInput = document.createElement("input");
  let content = document.createTextNode(`${label}: `)
  myInput.type = type;
  document.body.append(myLabel);
  myLabel.append(content);
  myLabel.append(myInput);
  return myLabel;
}

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// function createInputElm(label, type = "text") {
//   let content = document.createTextNode(`${label}: `);
//   let myLabel = document.body.append(`<label>${content} <input type=${type}></label>`);
  
//   return myLabel;
// }

// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>

function createList(array) {
  let ul = document.createElement("ul");
  document.body.append(ul);
  array.forEach(element => {
    let item = document.createElement("li");
    item.append(`${element}`);
    ul.append(item);
  });
  return ul;
}

// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

function createTodoList(arr) {
  let ul = document.createElement("ul");
  document.body.append(ul);
  arr.forEach(element => {
    let item = document.createElement("li");
    let p = document.createElement("p");
    let input = document.createElement("input");
    let span = document.createElement("span");

    p.append(element.name);
    input.checked = element.isDone;
    input.type = "checkbox";
    input.name = "";
    input.id = "";
    span.append(`X`);
    
    item.append(p, input, span);
    ul.append(item);
  })
  return ul;
}

// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
