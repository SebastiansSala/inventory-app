import mongoose, { Schema, Document } from "mongoose";

interface Category extends Document {
  name: string;
  description: string;
  url: string;
}

const categorySchemma = new Schema<Category>({
  name: String,
  description: String,
});

categorySchemma.virtual("url").get(function (this: Category) {
  return `/category/${this._id}`;
});

export default mongoose.model<Category>("Category", categorySchemma);
