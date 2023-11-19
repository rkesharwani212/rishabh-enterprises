import { createSlice } from "@reduxjs/toolkit";

const userDetail = createSlice({
    name: 'userDetail',
    initialState: [],
    reducers: {
        addUserDetail(state,action){},
        updateUserDetail(state,action){},
        deleteUserDetail(state,action){},
        getUserDetail(state,action){}

    }
}) 

export default userDetail;