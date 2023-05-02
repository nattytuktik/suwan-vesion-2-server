import { IRoute } from "../../../interfaces/IRoutes";
import readManyCustoemer from "./get/readManyCustomer";
import newCustomer from "./post/newCustomer";

export const customerRouting: Array<IRoute> = [
    {
        path: "/",
        controllers: [
            {
                method: "post",
                action: newCustomer,
                middlewares: [],
            },
            {
                method: "get",
                action: readManyCustoemer,
                middlewares: [],
            },
        ],
    },
];
