import { Assets, Sprite } from 'pixijs'

import { RootSystem } from './RootSystem'

import '../images'

const buttonTexture = await Assets.load('growButton')
const button = new Sprite(buttonTexture)
button.interactive = true
button.onclick = () => RootSystem.growRoots()

export const GrowButton = button