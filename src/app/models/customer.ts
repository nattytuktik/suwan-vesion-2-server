import { model, Schema } from "mongoose";

const customerShema = new Schema({
    first_name: {
        type: String,
        required: true,
    },

    last_name: {
        type: String,
        required: true,
    },

    chaya: {
        type: String,
        required: false,
    },

    internet: {
        type: Boolean,
        default: false,
    },

    phone: {
        type: String,
        required: false,
    },

    permission: {
        type: String,
        enum: ["admin", "user", "superadmin"],
        default: "user",
    },

    time_alive: {
        type: Date,
        default: Date.now(),
    },

    status: {
        type: String,
        enum: ["alive", "leave"],
        default: "alive",
    },

    time_leave: {
        type: Date,
    },
});

export const Customer = model("customers", customerShema);
