import { Assets } from 'pixijs'

import { Root } from './Root'

import '../images'

export const T1MB1M = new Root({
    texture: await Assets.load('T1MB1M'),
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})

export const T1MB2LR = new Root({
    texture: await Assets.load('T1MB2LR'),
    growsLeft: [],
    growsRight: [],
    growsDown: [T2LRB1M]
})

export const T2LRB1M = new Root({
    texture: await Assets.load('T2LRB1M'),
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})

export const T1MR1M = new Root({
    texture: await Assets.load('T1MR1M'),
    growsLeft: [],
    growsRight: [L1MB1M],
    growsDown: []
})

export const T1ML1M = new Root({
    texture: await Assets.load('T1ML1M'),
    growsLeft: [R1MB1M],
    growsRight: [],
    growsDown: []
})

export const R1MB1M = new Root({
    texture: await Assets.load('R1MB1M'),
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})

export const L1MB1M = new Root({
    texture: await Assets.load('L1MB1M'),
    growsLeft: [],
    growsRight: [],
    growsDown: [T1MB1M, T1MB2LR, T1MR1M, T1ML1M]
})

export const Roots = {
    T1MB1M,
    T1ML1M,
    T1MR1M,
    T1MB2LR,
    L1MB1M,
    R1MB1M,
    T2LRB1M
}