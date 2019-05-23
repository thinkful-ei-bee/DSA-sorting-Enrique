'use strict';

const LinkedList = require('./linkedlist');
const helpers = require('./helpers')


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

helpers.display(list)
console.log(list)


function mergeSortLinkedList(list){
  if (size(list)<= 1){
    return list;
  }
  const middle = findMiddle(list);
  let left = new LinkedList();
  // loop through 0 - middle, insertLast on the list
  let curr = list.head;
  while (curr !== middle){
    left.insertFirst(curr.value);
    curr = curr.next;
  }
  let right = new LinkedList();
  while (curr !== null){
    right.insertFirst(curr.value);
    curr = curr.next;
  }
  let newList = new LinkedList();

  left = mergeSortLinkedList(left);
  right = mergeSortLinkedList(right);

  return mergeLinkedList(newList,left,right);

}

function mergeLinkedList(list,left,right){

  let currLeft = left.head;
  let currRight = right.head;
  while (left.head !== null && right.head!== null){
    if (left.head.value < right.head.value){
      list.insertLast(left.head.value);
      left.remove(currLeft.value);
      currLeft = left.head;
    }else{
      list.insertLast(right.head.value);
      right.remove(currRight.value);
      currRight = right.head;
    }
  }
  while (currLeft !== null){
    list.insertLast(currLeft.value);
    left.remove(currLeft.value);
    currLeft = left.head;
  }
  while (currRight !== null){
    list.insertLast(currRight.value);
    right.remove(currRight.value);
    currRight = right.head;
  }
  return list;
}

helpers.display(mergeSortLinkedList(list));

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
 
  return sortedArray;
}

//====================================================================================

//  Sort in place
// Write an algorithm to shuffle an array into a random order in 
// place (i.e., without creating a new array).


function unSort(array){
  let randomIndex = 0;
  const max = array.length -1;
  for (let i =0;i<array.length;i++){
    randomIndex = Math.floor(Math.random()*(max));
    swap(array,i,randomIndex);
  }
  return array;
}

const arr = [1,2,3,4,5,6,7,8];
console.log(unSort(arr));

//====================================================================================

// Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. 
// Express this as an algorithm and them implement your algorithm.