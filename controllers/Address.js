const Address = require("../models/Address");
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  get: async (req, res) => {
    const all = await Address.find({});
    if (!all) {
      return res.status(403).json("Error in Finding Addresss");
    }
    return res.status(200).json({ addresses: all, count: all.length });
  },
  create: async (req, res) => {
    const { ethereum } = req.body;

    const existingAddress = await Address.findOne({
      ethereum: ethereum,
    });
    if (existingAddress) {
      return res.status(401).json("Address with this ethereum already exists");
    }
    const newAddres = await Address.create({
      ethereum: ethereum,
    });
    if (!newAddres) {
      return res.status(500).json("Error in creating new Address");
    }
    return res.status(200).json("Address created");
  },
  update: async (req, res) => {
    const { id, ethereum } = req.body;
    const updateAddress = await Address.findByIdAndUpdate(id, {
      ethereum: ethereum,
    });
    if (!updateAddress) {
      return res.status(500).json("Error in updating new Address");
    }
    return res.status(200).json("Address Updated");
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const del = await Address.findByIdAndDelete(id);
    if (!del) {
      return res.status(500).json("Error in deleting Address");
    }
    return res.status(200).json("Address Deleted");
  },
  find: async (req, res) => {
    const { address } = req.query.address;
    const foundAddresses = await Address.findOne({ ethereum: address });
    if (!foundAddresses) {
      return res.status(404).send("No user found");
    }
    return res.status(200).json(foundAddresses);
  },
};
