class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}



class BST {
    constructor(val) {
        this.root = new Node(val);
        this.count = 1;
    }

    size() {
        return this.count;
    }

    insert(val) {
        this.count++;

        const newNode = new Node(val);

        const searchTree = node => {
            // move left if val is < parent
            if (val < node.val) {
                // if no left node, create one
                if (!node.left) {
                    node.left = newNode;
                // else search left again
                } else {
                    searchTree(node.left)
                }
            }

            if (val > node.val) {
                // if no right node, create one
                if (!node.right) {
                    node.right = newNode;
                // else search right again
                } else {
                    searchTree(node.right)
                }
            }

        }
        
        searchTree(this.root);
    }


    min() {
        currentNode = this.root;

        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode;
    }

    max() {
        currentNode = this.root;

        while (currentNode.right) {
            currentNode = currentNode.right;
        }

        return currentNode;
    }

    contains(val) {
        let currentNode = this.root;

        while(currentNode) {
            if (currentNode.val === val) {
                return true;
            } 
            if (val < currentNode) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right;
            }
        }
    }

}