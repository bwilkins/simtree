import { Sprite } from 'pixijs'
import GrowButton_image from '../images/button-grow.png'

const buttonTexture = new Texture.from(GrowButton_image)
const button = new Sprite(buttonTexture)
button.interactive = true


export const GrowButton = button