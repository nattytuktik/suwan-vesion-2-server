import { test } from "../../middlewares/test";
import { IRoute } from "../../../interfaces/IRoutes";

import createRoom from "./post/create";
import readNotFill from "./get/readNotFill";
import pushCustomerToRoom from "./put/pushCustomerToRoom";
import findHasCustomerInRoom from "../../middlewares/room/findHasCustomerRoom";
import filterNullRequest from "../../middlewares/room/filterNullAndObjectIdrequest";

export const roomRouting: Array<IRoute> = [
    {
        path: "/",
        controllers: [
            {
                method: "get",
                action: readNotFill,
                middlewares: [],
            },
            {
                method: "post",
                action: createRoom,
                middlewares: [],
            },
        ],
    },
    {
        path: "/customer-room",
        controllers: [
            {
                method: "put",
                action: pushCustomerToRoom,
                middlewares: [filterNullRequest, findHasCustomerInRoom],
            },
        ],
    },
];
