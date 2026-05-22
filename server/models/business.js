import { Schema, model } from "mongoose";

const businessSchema = new Schema(
  {
    businessImg: {
      type: String,
    },
    
    ownerImg: {
      type: String,
    },
    
    businessName: {
      type: String,
      required: true,
      trim: true,
    },

    ownerName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    whatsapp: {
      type: String,
      required: true,
    },

    instagram: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    lga: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 500,
    },

    businessHours: [
      {
        weekday: String,
        weekend: String,
        pholiday: String,
      },
    ],

    keywords: {
      type: [String],
      default: [],
    },
    
    services: [
      {
        service: String,
        price: String,
      },
    ],

    agree: {
      type: Boolean,
      required: true,
    },

    upvotes: {
      type: Number,
      default: 0,
    },

    downvotes: { 
      type: Number, 
      default: 0,
    },
    
  },
  {
    timestamps: true,
  }
);

export default model("Business", businessSchema);
