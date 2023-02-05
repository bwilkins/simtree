import { Assets, Sprite } from 'pixijs'
import '../images'

export const BackgroundTexture = await Assets.load('background')
export const Background = new Sprite(BackgroundTexture)

console.log("Background", Background);