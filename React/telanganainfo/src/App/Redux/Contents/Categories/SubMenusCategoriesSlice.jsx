import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {SubMenuCategory: "InterNational" ,  SubMenu: "Politics"},
    {SubMenuCategory: "National" ,  SubMenu: "Politics"},
    {SubMenuCategory: "State", SubMenu: "Politics"},
    {SubMenuCategory: "Regional", SubMenu: "Politics"},
 
]

const SubMenusCategoriesSlice = createSlice ({
    name: 'SubMenusCategories',
    initialState,
    reducers: {}
})

export const selectAllSubMenusCategories = (state) => state.SubMenusCategories;

export default SubMenusCategoriesSlice.reducer; 