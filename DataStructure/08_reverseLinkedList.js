// Define the ListNode class
class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

// Helper function to create a linked list from an array
const createLinkedList = (arr) => {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
};

// Function to reverse a linked list
const reverselinkedList = (head) => {
    let curr = head;
    let prev = null;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

// Helper function to convert a linked list to an array (for easy logging)
const linkedListToArray = (head) => {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.value);
        current = current.next;
    }
    return arr;
};

// Create a linked list and reverse it
const head = createLinkedList([1, 2, 3, 4, 5]);
const reversedHead = reverselinkedList(head);

// Convert the reversed linked list to an array and log it
console.log(linkedListToArray(reversedHead));
