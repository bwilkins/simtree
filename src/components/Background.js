import { Assets, Sprite } from 'pixijs'
import {background} from '../images'

// export const BackgroundTexture = await Assets.load('background')
export const Background = new Sprite(background)

console.log("Background", Background);