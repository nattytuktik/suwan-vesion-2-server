import { model, Schema } from 'mongoose';

const mitorSchema = new Schema({
  mitor: [
    {
      _id: false,
      num: {
        type: Number,
        max: 9999,
        required: true,
      },
      time_stamp: {
        type: Date,
        default: Date.now(),
      },
      status: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
  ],
});

export const Mitor = model('mitors', mitorSchema);
