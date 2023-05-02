import { model, Schema } from "mongoose";

const adminSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "customers",
            required: true,
        },

        password: {
            type: String,
            required: true,
        },

        token: {
            type: String,
        },
    },
    { timestamps: true },
);

export const Admin = model("admins", adminSchema);
