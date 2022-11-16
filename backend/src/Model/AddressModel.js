const Addresses = [];
const AddressModel = {
   getAll() {
      return Address;
   },

   createUser(address) {
      Addresses.push(address)
   }
};

module.exports = AddressModel;