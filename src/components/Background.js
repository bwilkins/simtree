import { Assets, Sprite } from 'pixijs'
import '../images'

export const BackgroundTexture = await Assets.load('background')
export const Background = Sprite.from(BackgroundTexture)

console.log("Background", Background);