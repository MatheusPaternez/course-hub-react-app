import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    },[]);

    const signIn = (email,password)=>{
        const usersStorage = JSON.parse(localStorage.getItem("users_db"));

        // Check if exist some email like this registered 
        const hasUser = usersStorage?.filter((user)=>user.email===email);
        
        if(hasUser?.length){
            if(hasUser[0].email === email && hasUser[0].password === password){
                // Token for control
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({email,token}));
                setUser({email,password});
                return;
            } else{
                return "Email or Password Invalid";
            }
        } else{
            return "User not registered"
        }
    };

    return <AuthContext.Provider>{children}</AuthContext.Provider>
};