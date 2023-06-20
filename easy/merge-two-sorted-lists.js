// merge two Linked lists into a new sorted Linked List
// 2 linked lists, can be empty, can have same nums
// return linked list
// L1 [1, 2, 4] L2 [1, 3 ,4] -> result [1, 1, 2 ,3, 4, 4]

const mergeTwoLists = function (l1, l2) {
    // while loop, if l1.val < l2.val add l1.val to newList, else l2.val, keeps going next
    // if any nodes left add to newList. 
    // return newList.next
	let newList = new ListNode(0);
	let headOfNewList = newList;

	while ((l1 !== null) & (l2 !== null)) {
		if (l1.val < l2.val) {
			newList.next = l1;
			l1 = l1.next;
		} else {
			newList.next = l2;
			l2 = l2.next;
		}
		newList = newList.next;
	}
	if (l1 == null) {
		newList.next = l2;
	} else {
		newList.next = l1;
	}
	return headOfNewList.next;
};
