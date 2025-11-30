// server/models/Registration.js
const mongoose = require('mongoose');

const RegistrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    college: { type: String, required: true },
    branch: { type: String, required: true },
    year: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        // keep both camelCase and snake_case timestamps for compatibility
        ret.id = ret._id ? ret._id.toString() : ret.id;
        if (ret.createdAt) {
          // iso string camelCase
          ret.createdAt = new Date(ret.createdAt).toISOString();
          // snake_case (for older clients)
          ret.created_at = ret.createdAt;
        } else if (ret.created_at) {
          // ensure createdAt exists if only created_at present
          ret.createdAt = new Date(ret.created_at).toISOString();
        }

        if (ret.updatedAt) {
          ret.updatedAt = new Date(ret.updatedAt).toISOString();
          ret.updated_at = ret.updatedAt;
        } else if (ret.updated_at) {
          ret.updatedAt = new Date(ret.updated_at).toISOString();
        }

        // keep id fields for convenience, but still remove Mongo internals
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model('Registration', RegistrationSchema);
