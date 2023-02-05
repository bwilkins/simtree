import { Container } from 'pixijs'

import { Background } from '../components/Background'
import { Tree } from '../components/Tree'
import { screenDimensions } from '../config/config'
import { Menu } from './Menu'

    
export const Game = (app) => {
    const gameStage = app.stage;

    const backgroundContainer = new Container()
    backgroundContainer.position = [0, 0]
    backgroundContainer.weight = 1024
    backgroundContainer.height = 768
    backgroundContainer.addChild(Background)
    gameStage.addChild(backgroundContainer)

    const treeContainer = new Container()
    treeContainer.position = [0, 0]
    treeContainer.weight = 1024
    treeContainer.height = 768
    treeContainer.addChild(Tree)
    gameStage.addChild(treeContainer)

    const menuContainer = new Container()
    menuContainer.position = [screenDimensions.width - 192, 0]
    menuContainer.addChild(Menu)
    gameStage.addChild(menuContainer)
}