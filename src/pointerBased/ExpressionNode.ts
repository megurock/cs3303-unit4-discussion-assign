export default class ExpressionNode {
  // prettier-ignore
  constructor(
    protected _operator: string,
    protected _isLeaf: boolean) {}

  get operator() {
    return this._operator
  }
  get isLeaf() {
    return this._isLeaf
  }
}
