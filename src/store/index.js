import { configureStore } from "@reduxjs/toolkit";
import {listItems} from "./list-items";
const store = configureStore({
    reducer: {
        listItems: listItems.reducer,
    },
});
export default store;