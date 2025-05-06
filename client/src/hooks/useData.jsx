import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function useData() {
    const obj = useContext(DataContext);
    if (obj === undefined) {
        {
            console.log("current component is not under Provider");
            throw new Error('current component is not under Provider')
        }
    }
    return obj;
}