import User from "../models/UserModel.js";

export const getUser = async (req, res) => {
    try {
        const user = await User.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.json(user);  // Make sure to send the response back to the client
    }
    catch (err) {
        console.error(err.message);
    }
}

export const getUserByID = async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.params.id

            }
            // attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.json(user);  // Make sure to send the response back to the client
    }
    catch (err) {
        console.error(err.message);
    }
}

export const createNewUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.status(201).json({msg: "Created"});
        // res.json(user);  // Make sure to send the response back to the client
    }
    catch (err) {
        console.error(err.message);
    }
}

export const updateUser = async (req, res) => {
    try {
        await User.update(req.body,{
            where: { id: req.params.id }
        });
        res.status(201).json({msg: "Updated"});
        // res.json(user);  // Make sure to send the response back to the client
    }
    catch (err) {
        console.error(err.message);
    }
}

export const deleteId = async (req, res) => {
    try {
        const deletedCount = await User.destroy({
            where: { id: req.params.id }
        });

        if (deletedCount === 0) {
            return res.status(404).json({ msg: "User not found" });
        }

        res.status(200).json({ msg: "Deleted" });
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "An error occurred" });
    }
}
