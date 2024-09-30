import ExpressionNode from './ExpressionNode'
import type { Visitor } from './types'

export default class InternalNode extends ExpressionNode {
  // prettier-ignore
  constructor(operator: string,
    private _left: ExpressionNode | string,
    private _right: ExpressionNode | string
  ) {
    super(operator, false);
  }

  get left() {
    return this._left
  }
  get right() {
    return this._right
  }

  accept(visitor: Visitor): void {
    visitor.visitInternal(this)
  }
}
