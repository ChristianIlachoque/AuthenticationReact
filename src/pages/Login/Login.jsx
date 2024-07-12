/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { getMorty } from "../../services/userService"
import { createUser, resetUser, UserKey } from "../../redux/states/user";
import { useNavigate } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../../models/routes";
import { useEffect } from "react";
import { clearLocalStorage } from "../../utilities/LocalStorageUtility";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        clearLocalStorage(UserKey);
        dispatch(resetUser());
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
    }, []);
    const login = async () => {
        try {
            const result = await getMorty();
            dispatch(createUser({ ...result, rol: 'admin' }));
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        } catch (error) {
            console.log("error getMorty in login")
        }
    }
    return (
        <div>
            <h1>Login page</h1>
            <button onClick={login}>login</button>
        </div>
    )
}