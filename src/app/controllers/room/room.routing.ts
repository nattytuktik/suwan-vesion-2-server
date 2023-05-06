import { test } from "../../middlewares/test";
import { IRoute } from "../../../interfaces/IRoutes";

import createRoom from "./post/create";
import readNotFill from "./get/readNotFill";
import pushCustomerToRoom from "./put/pushCustomerToRoom";
import findHasCustomerInRoom from "../../middlewares/room/findHasCustomerRoom";
import filterNullRequest from "../../middlewares/filterNullAndObjectIdrequest";
import isOldRoom from "../../middlewares/room/isOldRoom";
import validSpecialRoom from "../../middlewares/room/validSpecialRoom";
import validRoomRequest from "../../middlewares/room/validRoomRequest";

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
                middlewares: [validRoomRequest, isOldRoom, validSpecialRoom],
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
