import {Navigate} from "react-router-dom";
export default function protectedRoute({children}){
    const isAuthenticated = localstorage.getItem(token);
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }
    return children;
}