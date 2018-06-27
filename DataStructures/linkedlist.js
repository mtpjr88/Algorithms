	// Doubly Linked List

	// Constructor function or Class
	function LinkedList () {
		// set to null since when initially created
		// they don't have any nodes
		this.head = null;
		this.tail = null;
	}

	// Each Node has three properties {value, next, and prev}
	function Node (value, next, prev) {
	// the value of the Node
		this.value = value;
	// A pointer referencing to the next Node (if present) otherwise null
		this.next = next;
	// A pointer referencing the previous Node, otherwise null
		this.prev = prev;
	}

	LinkedList.prototype.addToHead = function(value) {
	// 1. Create a new Node (instance) that will be added to the `Head` of the LinkedList
	// 2. this Method will take a `value` parameter that will be the value of the new Node.	
		let newNode = new Node(value, this.head, null);
	// 3. the `next` parameter passed will be 'this.head' refering to the LinkedList object `this.head`
	// since we are adding a new Node, the Next in line would be the old head or initial `this.head`
	// 4. the prev param will be null since this will be the new Head Node, therefore there is not a prev in line
	// this.head is the Head

	// if there is a Node exists then set its prev pointer to reference a new Node 
		if (this.head) this.head.prev = newNode;
	// since this is the only Node, it will be both head Node and Tail
		else this.tail = newNode;
	// Now make newNode as the Head Node
		this.head = newNode;
	}

	let LL = new LinkedList();
	LL.addToHead(100);
	LL.addToHead(200);
	console.log(LL);




