import { Sprite, Texture } from 'pixijs'

import { RootSystem } from './RootSystem'

import GrowButton_image from '../images/button-grow.png'

const buttonTexture = new Texture.from(window.location.href + GrowButton_image)
const button = new Sprite(buttonTexture)
button.interactive = true
button.onclick = () => RootSystem.growRoots()

export const GrowButton = button