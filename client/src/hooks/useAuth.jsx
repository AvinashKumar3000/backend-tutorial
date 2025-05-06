import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function useAuth() {
    const context = useContext(AuthContext);
    if(context === undefined) {
        console.log("context is not declared inside PROVIDER"); 
        return null;
    }
    return context;
}