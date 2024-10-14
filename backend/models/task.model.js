import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps:true,
})

const Item = mongoose.model("Item", ItemSchema);
export default Item;