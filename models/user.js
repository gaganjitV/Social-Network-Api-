const { Schema, model } = require('mongoose');

// Schema to create a users model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], //Match email address format or give error message
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'users',
      },
        {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
    ],
  },
);

usersSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const Users = model('users', usersSchema);

module.exports = Users;