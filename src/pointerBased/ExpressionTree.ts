import ExpressionTreeVisitor from './ExpressionTreeVisitor'
import InternalNode from './InternalNode'

export default class ExpressionTree {
  constructor(private root: InternalNode) {}

  traverse(visitor: ExpressionTreeVisitor): string {
    this.root.accept(visitor)
    return visitor.getExpression()
  }
}
