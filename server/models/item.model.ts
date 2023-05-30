import mongoose, {Schema, Document} from "mongoose";

interface Items extends Document {
    name: string,
    description: string,
    category: Schema.Types.ObjectId;
    price: number;
    stock: number;  
    url: string;
}

const itemsSchema = new Schema<Items>({
    name: String,
    description: String,
    category: {type: Schema.Types.ObjectId, ref: "Category"},
    price: Number,
    stock: {type: Number, default: 0},
})

itemsSchema.virtual("url").get(function (this: Items) {
    return `/category/items/${this._id}`
})

export default mongoose.model<Items>('Items', itemsSchema);
