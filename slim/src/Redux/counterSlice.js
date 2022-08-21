import { createSlice } from '@reduxjs/toolkit'
//  const counterReducer = (state = 
//     { count: 0}
// , action) => {

//     switch (action.type) {
//         case INCREMENT:
//             return   {...state,count:state.count + 1}
//         case DECREMENT:
//             return  {...state,count:state.count - 1}
//         default:
//             return state
//     }

// }
// export default counterReducer;

// export default combineReducers({
//  count:counterReducer
//   })

const initialState = {
    value: 0,
  }
  
  export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrement: (state) => {
        state.value -= 1
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
  export default counterSlice.reducer