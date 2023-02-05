import { Container } from 'pixijs'
import { rootSystemContainer } from './RootSystem'

const treeContainer = new Container()
treeContainer.addChild(rootSystemContainer)
export const Tree = treeContainer