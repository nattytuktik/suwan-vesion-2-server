import express from "express";
import { Room } from "../../../models/room";
import { Mitor } from "../../../models/mitor";

export default async function readNotFill(
    req: express.Request,
    res: express.Response,
) {
    try {
        let sect1;
        let sect2;

        sect1 = await Room.find({ section: 1 })
            .sort({ room: 1, foor: 1 })
            .populate("mitor")
            .populate("customers");
        sect2 = await Room.find({ section: 2 })
            .sort({ room: 1, foor: 1 })
            .populate("mitor")
            .populate("customers");

        /**
         * custom result
         */
        const customerResultSect1 = await customResponse(sect1);
        const customerResultSect2 = await customResponse(sect2);

        // MAP
        const result = {
            sect1: customerResultSect1,
            sect2: customerResultSect2,
        };
        res.status(200).json(result);
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            msg: error.message,
        });
    }
}

//
const customResponse = async (
    rooms: Array<any>,
    queryMitor?: {} | undefined,
) => {
    const result = rooms.map(async (room) => {
        let validDatetimeMonth: boolean;
        const custom = {
            last_month: {
                num: 0,
                time_edit: new Date(),
            },
            current_month: {
                num: 0,
                time_edit: new Date(),
            },
            bill: {
                internet: 0,
                mitor: 0,
                maintenance: 0,
            },
        };
        const mitors = await Mitor.findOne(room.mitor);
        let findMitor;

        if (mitors) {
            const length_mitor = mitors.mitor.length;
            if (length_mitor > 2) {
                const Findlast_month = mitors.mitor[length_mitor - 2];
                const Findcurrent_month = mitors.mitor[length_mitor - 1];

                const { last_month, current_month, bill } = custom;

                // last month
                last_month.num = Findlast_month.num;
                last_month.time_edit = Findlast_month.time_edit;

                // current month
                current_month.time_edit = Findcurrent_month.time_edit;
                current_month.num = Findcurrent_month.num;

                // bill
                bill.internet = 110;
                bill.mitor =
                    (Findcurrent_month.num - Findcurrent_month.num) * 6;
                bill.maintenance = 20;
            } else {
                custom.current_month.num = 0;
            }
        }

        // return object
        return {
            _id: room._id,
            room: room.room,
            foor: room.foor,
            section: room.section,
            // ...custom,
        };
    });

    const re = Promise.all(result);

    return await re;
};
