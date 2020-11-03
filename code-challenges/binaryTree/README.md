## Challenge
Without utilizing any of the built-in methods available to your language, return the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

## Approach & Efficiency
My approach was to create a class that extended from the BinarySearchTree and used the add function to create a new tree. 
Then using the findMaxValue function to traverse to the farthest right of the tree, which will end at the max value node. 

## API
add method (creates a new node or root node, if not already containing a root. Then adding more nodes to specified tree.)

findMaxValue method (traverses from the root to root.right, until there is not more right nodes to traverse thru. The last node it lands on will be the max value node.)

whiteboard-uml(./uml/tree.jpeg);