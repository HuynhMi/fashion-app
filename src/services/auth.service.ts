import { User, browserSessionPersistence, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../config/firebase";

const authService = {
    register: (email: string, password: string) =>
        createUserWithEmailAndPassword(auth, email, password),
    login: (email: string, password: string) =>
        signInWithEmailAndPassword(auth, email, password),
    logout: () => signOut(auth),
    setPersistence: () => setPersistence(auth, browserSessionPersistence),
    updateProfile: (displayName: string, photoURL: string) => updateProfile(auth.currentUser as User, { displayName, photoURL })
}

export default authService