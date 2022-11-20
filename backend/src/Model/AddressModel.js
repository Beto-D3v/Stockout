const Database = require('../db/config')
const AddressModel = {
   async getAll() {
      const db = await Database();
      const addresses = await db.all(`SELECT * FROM Addresses`)
      return addresses;
   },

   async createUser(address) {
      await Addresses.push(address)
   }
};

module.exports = AddressModel;