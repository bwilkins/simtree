import { Root } from './Root'

import T1MB2LR_image from '../images/roots/T1MB2LR.png'
import T1MB1M_image from '../images/roots/T1MB1M.png'
import T1MR1M_image from '../images/roots/T1MR1M.png'
import T1ML1M_image from '../images/roots/T1ML1M.png'
import T2LRB1M_image from '../images/roots/T2LRB1M.png'
import L1MB1M_image from '../images/roots/L1MB1M.png'
import R1MB1M_image from '../images/roots/R1MB1M.png'

export const T1MB1M = new Root({
    image: T1MB1M_image,
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})

export const T1MB2LR = new Root({
    image: T1MB2LR_image,
    growsLeft: [],
    growsRight: [],
    growsDown: [T2LRB1M]
})

export const T2LRB1M = new Root({
    image: T2LRB1M_image,
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})

export const T1MR1M = new Root({
    image: T1MR1M_image,
    growsLeft: [],
    growsRight: [L1MB1M],
    growsDown: []
})

export const T1ML1M = new Root({
    image: T1ML1M_image,
    growsLeft: [R1MB1M],
    growsRight: [],
    growsDown: []
})

export const R1MB1M = new Root({
    image: R1MB1M_image,
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})

export const L1MB1M = new Root({
    image: L1MB1M_image,
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})