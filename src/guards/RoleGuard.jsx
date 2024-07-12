/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "../models/routes";

export const RoleGuard = ({ role }) => {
    console.log("rol ac", role)
    const userState = useSelector((store) => store.user);
    return userState.role === role ? <Outlet /> : <Navigate replace to={PrivateRoutes.PRIVATE} />;
}