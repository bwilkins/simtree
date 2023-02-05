import { Assets } from 'pixijs'

import background_image from './background.png'
import growButton_image from './button-grow.png'
import darkLeaf_image from './leaf-dark.png'
import lightLeaf_image from './leaf-light.png'

export * as roots from './roots'

export const background = window.location.href + background_image
export const growButton = window.location.href + growButton_image
export const darkLeaf = window.location.href + darkLeaf_image
export const lightLeaf = window.location.href + lightLeaf_image

Assets.add('background', background)
Assets.add('growButton', growButton)
Assets.add('darkLeaf', darkLeaf)
Assets.add('lightLeaf', lightLeaf)