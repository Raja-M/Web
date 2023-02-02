import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {Menu: "Home"  },
    {Menu: "News"  },
    {Menu: "Info"  },
]

const MenusSlice = createSlice ({
    name: 'Menus',
    initialState,
    reducers: {}
})

export const selectAllMenus = (state) => state.Menus;

export default MenusSlice.reducer; 
