import dataPenghuni from "../models/dataPenghuni.js";

export const getPenghuni = async (req,res) => {
    try {
        const data_penghuni = await dataPenghuni.findAll({
            attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.json(data_penghuni);  // Make sure to send the response back to the client
    }
    catch (err) {
        console.error(err.message);
    }
}

export const getPenghuniByID = async (req, res) => {
    try {
        const data_penghuni = await dataPenghuni.findOne({
            where: { id: req.params.id

            }
            // attributes: { exclude: ['createdAt', 'updatedAt'] }
        });
        res.json(data_penghuni);  // Make sure to send the response back to the client
    }
    catch (err) {
        console.error(err.message);
    }
}

export const createNewPenghuni = async (req, res) => {
    try {
        await dataPenghuni.create(req.body);
        res.status(201).json({msg: "Created"});
        // res.json(user);  // Make sure to send the response back to the client
    }
    catch (err) {
        console.error(err.message);
    }
}