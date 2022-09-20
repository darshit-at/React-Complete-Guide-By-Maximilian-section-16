import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        totalQuantity : 0
    },
    reducers : {
        addItemTocart(state ,action){

            const newItem = action.payload
            state.totalQuantity+=1
            const existingItem = state.items.find(items => items.id===newItem.id);

            if(!existingItem) {
          state.items.push({
            id :newItem.id,
            price :newItem.price,
            quantity : 1 ,
            totaPrice : newItem.price,
            name : newItem.title
          });
            }
            else {
                existingItem.quantity++
                existingItem.totaPrice = existingItem.price * existingItem.quantity
                //  state.items[existingIndex] = existingItem
            }
        },
        removeItemFromCart(state ,action) {
            const id = action.payload;
            state.totalQuantity--
            const existingItem = state.items.find(items => items.id===id);
            if(existingItem.quantity===1) {
                state.items = state.items.filter(items => items.id!== id)
            }
            else {
                existingItem.quantity--;
                existingItem.totaPrice = existingItem.totaPrice - existingItem.price
            }
        }
    }
});

export const cartAction = cardSlice.actions
export default cardSlice.reducer