// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider";
// // import { AuthContext } from "../AuthProvider";


// const useAuth = () => {
//     const userInfo = useContext(AuthContext)

//     return userInfo
// };

// export default useAuth;

import { useContext } from "react";
import { AuthContext } from "../Authprovider";
// import { AuthContext } from "./Authprovider";

const useAuth = () => {
    const userInfo = useContext(AuthContext)

    return userInfo
};

export default useAuth;

