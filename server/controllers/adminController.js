const Client = require("../model/clientModel");
const Shopper = require("../model/shopperModel")
const bcrypt = require("bcrypt");


const addShopper = async (req, res, next) => {
    try {
        // console.log(req.body);
        const { name, email, prefix, phone, password } = req.body;
        const isExist = await Shopper.findOne({ email: email })
        if (isExist) throw createError.Conflict("This email already in use");

        const hash = await bcrypt.hash(password, 12);
        const shopperId = 'Htc' + Math.floor((1 + Math.random()) * 0x100000)

        const newShopper = new Shopper({
            name,
            email,
            shopperId,
            phone: prefix + phone,
            password: hash,
        });

        const shopper = await newShopper.save();
        res.send({ success: true, shopper });
    } catch (error) {
        next(error)
    }
}

const addClient = async (req, res, next) => {
    try {
        // console.log(req.body);
        const { name, email, prefix, phone, password } = req.body;
        const isExist = await Client.findOne({ email: email })
        if (isExist) throw createError.Conflict("This email already in use");

        const hash = await bcrypt.hash(password, 12);
        const clientId = 'Htc' + Math.floor((1 + Math.random()) * 0x10000)



        const newClient = new Client({
            name,
            email,
            clientId,
            phone: prefix + phone,
            password: hash,
        });

        const client = await newClient.save();
        res.send({ success: true, client });
    } catch (error) {
        next(error)
    }
}

const viewShopper = async (req, res, next) => {
    try {
        const shoppers = await Shopper.find()
        console.log(shoppers, '123');
        res.status(200).json({ success: true, shoppers, message: "all shoppers" });
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addShopper,
    addClient,
    viewShopper
}