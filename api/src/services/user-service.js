import User from '../db/models/user';

const getUser = (id) => User.query().where('id', id).first();
const getUsers = () => User.query();
const addUser = (username, email) => User.query().insert({ username, email});
    
const UserService = {
    getUser,
    getUsers,
    addUser,
};

export default UserService;