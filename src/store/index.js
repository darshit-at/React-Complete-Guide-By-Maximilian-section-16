import uiSlice from './ui-slice'
import cardSlice from './card-slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer : {
        ui :uiSlice,
        cart : cardSlice
    }
});

export default store