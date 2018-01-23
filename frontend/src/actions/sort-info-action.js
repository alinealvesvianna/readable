import * as types from './actions-types'


export const sortUp = (typeOrder) => ({
    type: types.SORTUP,
    typeOrder
})

export const sortDown = (typeOrder) => ({
    type: types.SORTDOWN,
    typeOrder
})  