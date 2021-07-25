// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const compareArr = (arr1, arr2) =>{
  const result = JSON.stringify(arr1) == JSON.stringify(arr2)

  if(result){
    console.log("Both Array has same elements");
  }
  else {
    console.log("Both Array dont have same elements");
  }
}

const arr1 = [10, 20, 30, 40];
const arr2 = [10, 20, 30, 40];
const arr3 = [20, 30, 40, 50];

compareArr(arr2, arr1);