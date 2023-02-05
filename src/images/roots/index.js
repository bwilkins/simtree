import { Assets } from 'pixijs'

import T1MB1M_image from './T1MB1M.png'
import T1ML1M_image from './T1ML1M.png'
import T1MR1M_image from './T1MR1M.png'
import T1MB2LR_image from './T1MB2LR.png'
import T2LRB1M_image from './T2LRB1M.png'
import L1MB1M_image from './L1MB1M.png'
import R1MB1M_image from './R1MB1M.png'

export const T1MB1M = window.location.href + T1MB1M_image
export const T1ML1M = window.location.href + T1ML1M_image
export const T1MR1M = window.location.href + T1MR1M_image
export const T1MB2LR = window.location.href + T1MB2LR_image
export const T2LRB1M = window.location.href + T2LRB1M_image
export const L1MB1M = window.location.href + L1MB1M_image
export const R1MB1M = window.location.href + R1MB1M_image

Assets.add('T1MB1M', T1MB1M)
Assets.add('T1ML1M', T1ML1M)
Assets.add('T1MR1M', T1MR1M)
Assets.add('T1MB2LR', T1MB2LR)
Assets.add('T2LRB1M', T2LRB1M)
Assets.add('L1MB1M', L1MB1M)
Assets.add('R1MB1M', R1MB1M)