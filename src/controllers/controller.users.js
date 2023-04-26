const Users = require('../database/orm/model/users.js')

const getAll = async (req, res) => {
    try {
        const getAll_Users = await Users.findAll()
        res.status(200).json({
            message: "http ok",
            data: getAll_Users
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: `Server error: \n (${err})` });
    }
}

const getOne = async (req, res) => {
    try {
        const getOneUsers = await Users.findOne({ where: { id: req.params.id } })
        if (!getOneUsers) return res.status(404).json({ message: "User not found", })
        res.status(200).json({
            message: "http ok",
            data: getOneUsers,
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: `Server error: \n (${err})` });
    }
}
const post = async (req, res) => {
    try {
        const { first_name, last_name, email, age, dni } = req.body
        const newUsers = await Users.create({ first_name, last_name, email, age, dni })
        res.status(201).json({
            message: "created user successfully",
            data: newUsers
        })
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: `Server error: \n (${err})` });
    }
}

const update = async (req, res) => {
    try {
        const { first_name, last_name, email, age, dni } = req.body;

        const updateUser = await Users.findByPk(req.params.id);
        if (!updateUser) {
            return res.status(404).json({ message: "User not found" });
        }

        await updateUser.update({ first_name, last_name, email, age, dni });

        res.status(201).json({
            message: "User updated successfully",
            data: updateUser,
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: `Server error: \n (${err})` });
    }
};

const Delete = async (req, res) => {
    try {
        const deleteUser = await Users.destroy({ where: { id: req.params.id } })
        if (!deleteUser) return res.status(404).json({ message: "User not found", })
        res.status(201).json({
            message: "delete user successfully"
        })

    } catch (err) {
        console.log(err)
        res.status(500).send({ message: `Server error: \n (${err})` });
    }
}


module.exports = {
    getAll,
    getOne,
    post,
    update,
    Delete

}