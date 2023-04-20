// given singly linked list, reverse order
// never negative nums, up to 5000
// return linked list



const reverseList = head => {
    let current = head;
    let prev = null;
    while (current) {
        let post = current.next;
        current.next = prev;
        prev = current;
        current = post;
    }
    return prev;
}














console.log(reverseList([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])