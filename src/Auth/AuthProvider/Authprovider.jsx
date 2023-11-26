
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


import auth from "../Friebase/firebae.config";

export const AuthContext = createContext()

const Authprovider = ( {children}) => {

    const [user, setuser] = useState(null)
    const [loding, setloding] = useState(true)
    // const axiosPublic = UseAxiosPublic()
    const provider = new GoogleAuthProvider();

    const googlelogin = () => {
        return signInWithPopup(auth, provider)
    }


    const singup = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    const update = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }

    useEffect(() => {
        const unsubscrib = onAuthStateChanged(auth, currentuser => {



            setuser(currentuser);
            setloding(false)
            // if (currentuser) {

            //     // console.log(currentuser)
            //     const info = { email: currentuser.email }
            //     axiosPublic.post("/jwt", info)
            //         .then(res => {
            //             // console.log(res)
            //             if (res.data) {
            //                 // console.log(res.data)
            //                 localStorage.setItem('token', res.data)
            //             }

            //         })
            // } else {
            //     //  todo:remove token
            //     localStorage.removeItem('token')
            // }
        });
        return unsubscrib;
    }, [])

    const info = {
        user,
        loding,
        singup,
        login,
        logout,
        googlelogin,
        update

    }




    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;