'use strict';

const LinkedList = require('./linkedlist');


// Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. 
// You will need your linked list class from previous lesson to
// create the list and use all of its supplemental functions to solve this problem.

let list = new LinkedList();
list.insertFirst(1);
list.insertLast(82);
list.insertLast(36);
list.insertLast(34);
list.insertLast(15);

//====================================================================================


// Write an O(n) algorithm to sort an array of integers, 
// where you know in advance what the lowest and highest values are. 
// You can't use arr.splice(), shift() or unshift() for this exercise.



let arr = [ 1, 6, 11, 13, 17, 26, 28];
bucketSort(arr, 1, 28);

function bucketSort(array, lowest, highest) {
  let difference= highest-lowest
  const sortedArray = new Array(difference); // create a new array with the length of the difference between highest and lowst
  

  for (let i = 0; i < array.length; i++) {
    sortedArray[array[i] - lowest] = array[i];
  }
  console.log(sortedArray)
  return sortedArray;
}

//====================================================================================

//  Sort in place
// Write an algorithm to shuffle an array into a random order in 
// place (i.e., without creating a new array).

//====================================================================================

// Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. 
// Express this as an algorithm and them implement your algorithm.