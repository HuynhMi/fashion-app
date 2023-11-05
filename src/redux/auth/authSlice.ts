import { PayloadAction, createSlice } from '@reduxjs/toolkit';
// Define a type for the slice state
interface UserInfoProp {
    email?: string | null;
    displayName?: string | null;
}

interface AuthState {
    userInfo: UserInfoProp | null
}

// Define the initial state using that type
const initialState: AuthState = {
    userInfo: null,
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<UserInfoProp>) => {
            state.userInfo = { ...state.userInfo, ...action.payload }
        }
    },
})

export const { setUserInfo } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default authSlice  