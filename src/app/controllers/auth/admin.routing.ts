import { IRoute } from "../../../interfaces/IRoutes";

// import routes
import newAdmin from "./post/newAdmin";
import login from "./post/login";
import updateAdmin from "./post/updateAdmin";

// import middlewares
import chekHadAdmin from "../../middlewares/admin/checkHadAdmin";
import validToken from "../../middlewares/auth/validtoken";
import filterNullRequest from "../../middlewares/filterNullAndObjectIdrequest";

export const adminRouting: Array<IRoute> = [
    {
        path: "/newAdmin",
        controllers: [
            {
                method: "post",
                action: newAdmin,
                middlewares: [chekHadAdmin],
            },
        ],
    },
    {
        path: "/switch",
        controllers: [
            {
                method: "put",
                action: updateAdmin,
                middlewares: [validToken],
            },
        ],
    },
    {
        path: "/login",
        controllers: [
            {
                method: "post",
                action: login,
                middlewares: [],
            },
        ],
    },
];