import type { Visitor } from './types'
import InternalNode from './InternalNode'
import LeafNode from './LeafNode'

export default class ExpressionTreeVisitor implements Visitor {
  private expression = ''

  visitLeaf(node: LeafNode) {
    this.expression += `${node.leftOperand} ${node.operator} ${node.rightOperand}`
  }

  visitInternal(node: InternalNode) {
    // Enclose the left and right subtrees with parentheses
    this.expression += '('

    // Recursively process the left child node
    if (typeof node.left !== 'string') (node.left as InternalNode).accept(this)
    else this.expression += node.left

    // Add the operator to the result
    this.expression += ` ${node.operator} `

    // Recursively process the right child node
    if (typeof node.right !== 'string') (node.right as InternalNode).accept(this)
    else this.expression += node.right

    // Close the parentheses
    this.expression += ')'
  }

  getExpression() {
    return this.expression.trim()
  }
}
