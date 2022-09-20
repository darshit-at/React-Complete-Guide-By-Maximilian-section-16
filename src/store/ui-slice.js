import { createSlice } from "@reduxjs/toolkit";
const initalState = {
    isShowCart: false,
    notification : null
};

const uiSlice = createSlice({
    name: 'ui',
    initialState: initalState,
    reducers: {
     
        toggle(state) {
            state.isShowCart = !state.isShowCart
        },
        showNotification(state ,action) {
            state.notification = {
            status :action.payload.status,
            title  :action.payload.title,
            message :action.payload.message
           }
        }
    }
});
export const uiAction = uiSlice.actions
export default uiSlice.reducer