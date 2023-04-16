import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = [];

export const fetchUsers = createAsyncThunk( 'Users/fetchUsers', async () => {
    try {
        const response = await axios.get( USERS_URL);
        return response.data;
    } catch( err) {
        return err.message;
    }
})

const UsersSlice = createSlice ({
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers( builder ){
        builder.addCase( fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        }
        )
    }

})

export const selectAllUsers = (state) => state.Users;

export default UsersSlice.reducer; 