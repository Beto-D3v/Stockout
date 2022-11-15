const Users = [];
const UserModel = {
   getAll() {
      return Users;
   },

   createUser(user) {
      Users.push(user)
   }
};

module.exports = UserModel;