import { Container } from 'pixijs'
import { GrowButton } from '../components/GrowButton'

const menuContainer = new Container()
menuContainer.addChild(GrowButton)

export const Menu = menuContainer