import { model, Schema } from 'mongoose';

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
    enum: ['admin', 'user', 'superadmin'],
    default: 'user',
  },
});

export const Custormer = model('custormers', customerShema);
