// find max depth of binary tree, further point from root node to leaf node
// binary tree, always contains root node
// return num


const maxDepth = node => (!node) ? 0 : 1 + Math.max(maxDepth(node.left), maxDepth(node.right));



const maxDepth2 = root => {
    let max = 0;

    const dfs = (node, level) => {
        if (!node) return;
        if (level > max) max = level;

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    dfs(root, 1)
    return max;
}