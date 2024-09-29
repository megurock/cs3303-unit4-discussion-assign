import ExpressionNode from './ExpressionNode'

export default class LeafNode extends ExpressionNode {
  // prettier-ignore
  constructor(
    operator: string,
    private _leftOperand: string,
    private _rightOperand: string
  ) {
    super(operator, true);
  }

  get leftOperand() {
    return this._leftOperand
  }
  get rightOperand() {
    return this._rightOperand
  }
}
