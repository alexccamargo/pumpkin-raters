import User from '../db/models/user';

const getUser = (id) => User.query().where('id', id).first();
    
const UserService = {
    getUser,
};

export default UserService;