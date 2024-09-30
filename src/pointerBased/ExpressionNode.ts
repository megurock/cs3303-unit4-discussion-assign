import type { Acceptor, Visitor } from './types'

export default class ExpressionNode implements Acceptor {
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

  accept(visitor: Visitor): void {
    // Overridden by subclasses
  }
}
