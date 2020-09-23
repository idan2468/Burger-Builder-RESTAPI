const Customer = new require('../models/customer');

exports.getCustomers = async (req, res, next) => {
    try {
        const customers = await Customer.find();
        res.status(200).json(customers);
    }
    catch (e) {
        throw new Error(e);
    }
}