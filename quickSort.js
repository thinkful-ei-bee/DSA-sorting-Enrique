// Understanding quicksort
// 1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in 
// ascending order. After the first partition step has been completed, the contents of the array is in 
// the following order: 3 9 1 14 17 24 22 20. Which of the following statements is correct about the 
// partition step? Explain your answer.

        //
        // The pivot could have been either 14 or 17 because they are greater than all values to their left 
        //and less than all values to their right
        //



// 2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 show the resulting 
// list after the second partitioning according to the quicksort algorithm.

// When using the last item on the list as a pivot
        // first partition == 10, 3, 9, 12, 19, 14, 17, 16, 13, 15
        // second partition ==  3, 9, 10, 12, 19, 14, 17, 16, 13, 15    
// When using the first item on the list as a pivot


let arr=[14, 17, 13, 15, 19, 10, 3, 16, 9, 12 ]





function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);// partition the array and return its pivot value
   
    array = quickSort(array, start, middle); //recurse quickSort for first half of partitioned array 
    array = quickSort(array, middle + 1, end);// recurse quickSort for second half of partitioned array with new pivot
    console.log(array)
    return array;
};



function partition(array, start, end) { 
    
    const pivot = array[end - 1]; // choose the last element as the pivot
   
    let j = start; // set j to first item in array
    for (let i = start; i < end - 1; i++) { // set i to equal first item in array
        if (array[i] <= pivot) {    // for every item in the array, if i is less than pivot,
            swap(array, i, j);      // then swap i.value and j.value and increment j index
            j++;
        }
    }
    swap(array, end-1, j); // when i index reaches end, swap pivot value and j value then return j(pivot value)
   
    return j;
};






function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }





let data=[ 89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,6,39,42,51,54,84,34,53,78,40,14,5 ]


quickSort(data)
