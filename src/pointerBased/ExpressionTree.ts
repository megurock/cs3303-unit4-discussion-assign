import ExpressionNode from './ExpressionNode'
import InternalNode from './InternalNode'
import LeafNode from './LeafNode'

export default class ExpressionTree {
  constructor(private root: InternalNode) {}

  // Inorder traversal
  // 1. Visit left child
  // 2. Visit parent node (operator)
  // 3. Visit right child
  traverse(root: ExpressionNode = this.root): string {
    // Base case (In the case of a leaf node)
    if (root.isLeaf) {
      const leaf = root as LeafNode
      return `${leaf.leftOperand} ${leaf.operator} ${leaf.rightOperand}`
    }
    // In the case of an internal node
    else {
      const internal = root as InternalNode
      const left = typeof internal.left === 'string' ? internal.left : this.traverse(internal.left)
      // prettier-ignore
      const right = typeof internal.right === 'string' ? internal.right : this.traverse(internal.right)
      return `(${left} ${internal.operator} ${right})`
    }
  }
}
