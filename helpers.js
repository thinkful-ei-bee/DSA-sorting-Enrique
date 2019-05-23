const helpers={


    // other linked list functions
     display(ll){
        let currNode = ll.head;
        let output = 'head->';
        while (currNode !== null){
          output += `${currNode.value}->`;
          currNode = currNode.next;
        }
        output += 'null';
        console.log(output);
        return output;
      },
      
       size(ll){
        let currNode = ll.head;
        let size = 0;
        if (currNode===null){
          return size;
        }
        while (currNode !== null){
          currNode = currNode.next;
          size++;
        }
        return size;
      },
      
       isEmpty(ll){
        return ll.head === null;
      },
      
       findPrevious(ll,item){
        let prevNode = ll.head;
        let currNode = ll.head;
        if (currNode === null){
          return null;
        }
        while (currNode!== null && currNode.value !== item){
          prevNode = currNode;
          currNode = currNode.next;
        }
        if (currNode===null){
          return null;
        }
        return prevNode;
      },
      
       findLast(ll){
        let currNode = ll.head;
        let prevNode = ll.head;
        if (currNode === null){
          return null;
        }
        while (currNode!== null){
          prevNode = currNode;
          currNode = currNode.next;
        }
      
        return prevNode;
      },
      
       clear(ll){
        ll.head = null;
      },
      
       findMiddle(ll){
        if (isEmpty(ll)){
          return null;
        }
        const middle = Math.floor(size(ll)/2);
        let curr = ll.head;
        let counter = 0;
        while(counter < middle){
          curr = curr.next;
          counter++;
        }
        return curr;
      }
    }
    module.exports = helpers;