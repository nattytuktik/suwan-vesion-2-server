import { model, Schema } from "mongoose";

const roomShema = new Schema({
    room: {
        type: Number,
        required: true,
        max: 6,
    },

    foor: {
        type: Number,
        max: 3,
        required: true,
    },

    section: {
        type: Number,
        required: true,
    },

    mitor: {
        type: Schema.Types.ObjectId,
        ref: "mitors",
    },

    customers: [
        {
            _id: false,
            customerId: {
                type: Schema.Types.ObjectId,
                ref: "Customer",
            },
            time_alive: {
                type: Date,
                default: Date.now(),
            },
            time_leave: {
                type: Date,
            },
            status: {
                type: String,
                enum: ["alive", "leave"],
                default: "alive",
            },
        },
    ],
});

export const Room = model("rooms", roomShema);
