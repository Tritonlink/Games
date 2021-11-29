import {createSlice} from "@reduxjs/toolkit"
import { RootState } from '../app/store';

interface state {
    isPrisoned: boolean,
    in? : 0 | 1 | 2 | 3
}

interface initialStateI {
    pos: null | number,
    state?:  state
}

const initialState: initialStateI = {
    pos: null,
    state: {
        isPrisoned: false,
    }
}

const changePosR = createSlice({
    name: "user",
    initialState,
    reducers: {
        changePos: function() {},
        empris: function() {},
        out: function() {},
        getFinished: function() {},
    }
})

export const selectCount = (state: RootState) => state.pos
export type stat = initialStateI
export const {changePos, empris, out, getFinished} = changePosR.caseReducers
export default changePosR.reducer