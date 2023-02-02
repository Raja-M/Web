import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {SubMenuCategory: "InterNational" ,  SubMenu: "Politics"},
    {SubMenuCategory: "National" ,  SubMenu: "Politics"},
    {SubMenuCategory: "State", SubMenu: "Politics"},
    {SubMenuCategory: "Regional", SubMenu: "Politics"},
    {SubMenuCategory: "Cricket" ,  SubMenu: "Sports"},
    {SubMenuCategory: "Soccer" ,  SubMenu: "Sports"},
    {SubMenuCategory: "Tennis", SubMenu: "Sports"},
    {SubMenuCategory: "Hockey", SubMenu: "Sports"},
    {SubMenuCategory: "BasketBall", SubMenu: "Sports"},
    {SubMenuCategory: "VolleyBall", SubMenu: "Sports"},
    {SubMenuCategory: "Badminton", SubMenu: "Sports"},
    {SubMenuCategory: "Track", SubMenu: "Sports"},
    {SubMenuCategory: "Doctors", SubMenu: "Person"},
    {SubMenuCategory: "Politicians", SubMenu: "Sports"},
    {SubMenuCategory: "Lawyers", SubMenu: "Sports"},
    {SubMenuCategory: "Artists", SubMenu: "Sports"},

    
]

const SubMenusCategoriesSlice = createSlice ({
    name: 'SubMenusCategories',
    initialState,
    reducers: {}
})

export const selectAllSubMenusCategories = (state) => state.SubMenusCategories;

export default SubMenusCategoriesSlice.reducer;