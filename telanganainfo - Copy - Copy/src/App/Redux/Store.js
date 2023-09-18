import   { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import NewReducers from './Contents/News/NewsSlice';
import MenusReducers from './Contents/Categories/MenusSlice';
import SubMenusReducers from './Contents/Categories/SubMenusSlice';
import SubMenusCategoriesReducers from "./Contents/Categories/SubMenusCategoriesSlice";
import CategorySpecialitiesReducer from "./Contents/Categories/CategorySpecialitiesSlice";
import StatesReducers from './Contents/Categories/StatesSlice';
import DistrictsReducers from "./Contents/Categories/DistrictsSlice";
import CitiesReducers from "./Contents/Categories/CitiesSlice";
import UsersReducers from "./Contents/Users/UsersSlice";
 


const reducer = {
    Menus: MenusReducers,
    SubMenus: SubMenusReducers,
    SubMenusCategories: SubMenusCategoriesReducers,
    CategorySpecialities: CategorySpecialitiesReducer,
    States: StatesReducers,
    Districts: DistrictsReducers,
    Cities: CitiesReducers,
    News: NewReducers,
    Users: UsersReducers
}
export const Store = configureStore({
    reducer : reducer,
    devTools: process.env.NODE_ENV !== 'production',             
}

);