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

  password: {
    type: String,
  },

  token: {
    type: String,
  },

  permission: {
    type: String,
    enum: ['admin', 'user', 'superadmin'],
    default: 'user',
  },
});

export const Customer = model('custormers', customerShema);
