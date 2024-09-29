import ExpressionTree from './ExpressionTree'
import InternalNode from './InternalNode'
import LeafNode from './LeafNode'

export default class App {
  constructor() {
    // Create the left subtree
    const leftBranch = (() => {
      const node4X = new LeafNode('*', '4', 'x') // Node representing 4x
      const node2X = new LeafNode('*', '2', 'x') // Node representing 2x
      const node2XPlusA = new InternalNode('+', node2X, 'a') // Node representing 2x + a
      return new InternalNode('*', node4X, node2XPlusA) // Node representing 4x * (2x + a)
    })()

    // Create an expression tree and output the expression
    const tree = new ExpressionTree(new InternalNode('-', leftBranch, 'c'))
    const expression = tree.traverse()
    console.log(expression) // => ((4 * x * (2 * x + a)) - c)
  }
}
