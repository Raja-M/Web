import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {SubMenu: "Politics" ,  Menu: "News"},
    {SubMenu: "Sports" ,  Menu: "News"},
    {SubMenu: "Business", Menu: "News"},
    {SubMenu: "Places" ,  Menu: "Info"},
    {SubMenu: "Person" ,  Menu: "Info"},
    {SubMenu: "Products", Menu: "Info"},
 
]

const SubMenusSlice = createSlice ({
    name: 'SubMenus',
    initialState,
    reducers: {}
})

export const selectAllSubMenus = (state) => state.SubMenus;

export default SubMenusSlice.reducer; 
