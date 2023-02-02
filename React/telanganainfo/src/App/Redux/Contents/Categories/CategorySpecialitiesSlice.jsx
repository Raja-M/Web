import { createSlice } from "@reduxjs/toolkit";

const initialState = [
 
    {CategorySpeciality: "GeneralSurgery" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "FamilyMedicine" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Cardiology" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Psychiatry" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Pediatrics" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Neurology" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Ophthamology" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Dermatology" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Nephrology" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Gastrology" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Gynaecology" ,  SubMenuCategory: "Doctors"},
    {CategorySpeciality: "Dental" ,  SubMenuCategory: "Doctors"},
    
    {CategorySpeciality: "Criminal" ,  SubMenuCategory: "Lawyers"},
    {CategorySpeciality: "Civil" ,  SubMenuCategory: "Lawyers"},
    {CategorySpeciality: "Actors" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Singers" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Dancers" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Anchors" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Writers" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Musicians" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Painting" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Tribal" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Sculpture" ,  SubMenuCategory: "Artists"},
    {CategorySpeciality: "Cinema" ,  SubMenuCategory: "Artists"},  
]

const CategorySpecialities = createSlice ({
    name: 'CategorySpecialities',
    initialState,
    reducers: {}
})

export const selectAllCategorySpecialities = (state) => state.CategorySpecialities;

export default CategorySpecialities.reducer;