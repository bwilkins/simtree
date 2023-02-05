import { Container } from 'pixijs'

import { Background } from '../components/Background'
import { Tree } from '../components/Tree'
import { screenDimensions } from '../config/config'
import { Menu } from './Menu'

    
export const Game = (app) => {
    const gameStage = app.stage;

    const backgroundContainer = new Container()
    gameStage.addChild(backgroundContainer)
    backgroundContainer.position = [0, 0]
    backgroundContainer.weight = 1024
    backgroundContainer.height = 768
    backgroundContainer.addChild(Background)
    console.log('background added')

    const treeContainer = new Container()
    gameStage.addChild(treeContainer)
    treeContainer.position = [0, 0]
    treeContainer.weight = 1024
    treeContainer.height = 768
    treeContainer.addChild(Tree)
    console.log('tree added')

    const menuContainer = new Container()
    gameStage.addChild(menuContainer)
    menuContainer.position = [screenDimensions.width - 192, 0]
    menuContainer.addChild(Menu)
    console.log('menu added')
}