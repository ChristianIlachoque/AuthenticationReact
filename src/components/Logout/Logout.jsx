import { useNavigate } from "react-router-dom";
import { resetUser, UserKey } from "../../redux/states/user"
import { clearLocalStorage } from "../../utilities/LocalStorageUtility"
import { PublicRoutes } from "../../models/routes";
import { useDispatch } from "react-redux";

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        clearLocalStorage(UserKey);
        dispatch(resetUser());
        navigate(PublicRoutes.LOGIN, { replace: true });
    }
    return (
        <button onClick={logOut}>Log out</button>
    )
}