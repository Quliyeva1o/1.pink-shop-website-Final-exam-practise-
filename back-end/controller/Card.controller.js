const { cardModel } = require('../model/Card.model')
const cardController = {
    getAll: async (req, res) => {
        try {
            const item = await cardModel.find()
            res.status(200).send(item)
        } catch (error) {
            res.status(404).send('An occures while getting items')
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await cardModel.findById(id)
            res.status(200).send(item)
        } catch (error) {
            res.status(404).send('an occures while getting by ID item')
        }
    },
    post: async (req, res) => {
        try {
            const item = new cardModel(req.body)
            await item.save()
            res.status(200).send(item)

        }
        catch (error) {
            res.status(404).send({
                message: "error",
                response: error
            })
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const item = await cardModel.findByIdAndDelete(id)
            res.status(200).send(item)
        }
        catch (error) {
            res.status(404).send("item can not be deleted")
        }
    },
    patch: async (req, res) => {
        try {
            const { id } = req.params;
            await cardModel.findByIdAndUpdate(id,req.body);
            const pat= await cardModel.findById(id)
            res.status(200).send(pat);
        } catch (error) {
            res.status(500).send("Item could not be updated");
        }
    },
}
module.exports = { cardController }