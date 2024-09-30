import InternalNode from './InternalNode'
import LeafNode from './LeafNode'

export interface Visitor {
  visitLeaf(node: LeafNode): void
  visitInternal(node: InternalNode): void
}

export interface Acceptor {
  accept(visitor: Visitor): void
}
