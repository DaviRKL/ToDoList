import Item from '../models/task.model.js'

//Create a new Item
export const createItem = async (req, res) => {
    try {
        const { text } = req.body;
        const newItem = new Item({ text });
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.json(items);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const { text, isCompleted } = req.body;
        const updatedItem = await Item.findByIdAndUpdate(
            id,
            { text, isCompleted },
            { new: true }
        )
        if (!updateItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json(updatedItem);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);
        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found" });
        }
        res.json({message: "Item deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAllItems  = async (req, res) => {
    try {
        await Item.deleteMany({});
        res.json({message: "All Items deleted successfully"});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};