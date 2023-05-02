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
        ref: "Mitor",
        required: true,
    },
});

export const Room = model("rooms", roomShema);
