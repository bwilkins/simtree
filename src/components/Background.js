import { Sprite, Texture } from 'pixijs'

import background from '../images/background.png'

export const BackgroundTexture = Texture.from(background)
export const Background = new Sprite(BackgroundTexture)
Background.position = [0, 0]