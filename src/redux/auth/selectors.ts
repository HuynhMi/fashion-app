import { RootState } from "../store";

const selectUserInfoState = (state: RootState) => state.auth.userInfo;

export { selectUserInfoState };

