import { Sprite, Texture } from 'pixijs'
import { screenDimensions } from '../config/config'

import background from '../images/background.png'

export const BackgroundTexture = Texture.from(background)
export const Background = new Sprite(BackgroundTexture)
Background.position = [0, 0]
Background.width = screenDimensions.width
Background.height = screenDimensions.height

console.log("Background", background);