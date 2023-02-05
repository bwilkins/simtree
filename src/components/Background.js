import { Assets, Sprite } from 'pixijs'
import {background} from '../images'

// export const BackgroundTexture = await Assets.load('background')
export const Background = Sprite.from(background)

console.log("Background", Background);