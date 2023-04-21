class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(data) {
        const newNode = new ListNode(data, this.head);
        this.head = newNode;
        this.length++;
    }
}

class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

let ll = new LinkedList();
ll.insert(5);
ll.insert(4);
ll.insert(3);
ll.insert(2);
ll.insert(1);

const reverseList = (head) => {
    let current = head;
    let prev = null;
    while (current) {
        let post = current.next;
        current.next = prev;
        prev = current;
        current = post;
    }
    return prev;
};

console.log(ll);
let result = reverseList(ll.head);
console.log(result);

// console.log(ll)
