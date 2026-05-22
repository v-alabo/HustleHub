import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {

img: {
    type: String
},

slug: {
    type: String
},

name: {
    type: String
},

message: {
    type: String
},
},

{
    timestamps: true,
  }
);

export default model("Review", reviewSchema);
