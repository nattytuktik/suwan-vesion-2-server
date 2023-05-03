import { Schema, model } from "mongoose";

const suwanSchema = new Schema(
    {
        room: {
            type: Schema.Types.ObjectId,
            ref: "rooms",
        },
        customers: [
            {
                _id: false,
                customerId: Schema.Types.ObjectId,
                ref: "customers",
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
    },
    { timestamps: true },
);

export const Suwan = model("suwans", suwanSchema);
