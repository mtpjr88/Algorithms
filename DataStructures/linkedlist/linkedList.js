class LinkedList {
    constructor(head,tail){
        this.head = head;
        this.tail = tail;
    }

    addToHead(value) {
        const newNode = new Node(value, this.head, null);
// if there is a head node
// make the newNode being created also its previous Node
       if(this.head) {
           this.head.prev = newNode;
       } else {
           // otherwise make the newNode also the the tail node since there is no other
           this.tail = newNode;
       }
       // regardless make the new node also the head node
        this.head = newNode;
    }

    addToTail(value) {
        const newNode = new Node(value, null, this.tail);
        if(this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

const linkedList = new LinkedList();
linkedList.addToHead(100);
linkedList.addToHead(200);
linkedList.addToTail(400);

console.log(linkedList);