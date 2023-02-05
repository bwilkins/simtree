import { Assets, Container } from 'pixijs'

import { Background } from '../components/Background'
import { Tree } from '../components/Tree'
import { screenDimensions } from '../config/config'
import { Menu } from './Menu'
import { PixiApp } from './PixiApp'
import '../images'
    
export const Game = async (app = PixiApp) => {
    const gameStage = app.stage;

    // await Assets.load(['background', 'T1MB1M', 'T1MR1M', 'T1ML1M', 'T1MB2LR', 'T2LRB1M', 'L1MB1M', 'R1MB1M', 'growButton'])

    const backgroundContainer = new Container()
    gameStage.addChild(backgroundContainer)
    backgroundContainer.position = [0, 0]
    backgroundContainer.width = 1024
    backgroundContainer.height = 768
    backgroundContainer.addChild(Background)
    console.log('background added')

    const treeContainer = new Container()
    gameStage.addChild(treeContainer)
    treeContainer.position = [0, 0]
    treeContainer.width = 1024
    treeContainer.height = 768
    treeContainer.addChild(Tree)
    console.log('tree added')

    const menuContainer = new Container()
    gameStage.addChild(menuContainer)
    menuContainer.position = [screenDimensions.width - 192, 0]
    menuContainer.width = 192
    menuContainer.height = 32
    menuContainer.addChild(Menu)
    console.log('menu added')
}