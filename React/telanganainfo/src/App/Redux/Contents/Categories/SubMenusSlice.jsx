import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {SubMenu: "Politics" ,  Menu: "News"},
    {SubMenu: "Sports" ,  Menu: "News"},
    {SubMenu: "Business", Menu: "News"},
 
]

const SubMenusSlice = createSlice ({
    name: 'SubMenus',
    initialState,
    reducers: {}
})

export const selectAllSubMenus = (state) => state.SubMenus;

export default SubMenusSlice.reducer; 
