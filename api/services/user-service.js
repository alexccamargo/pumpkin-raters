const users = [
    { id: 1, email: 'alex@something.com' },
    { id: 2, email: 'debs@something.com' },
    { id: 3, email: 'melhor.dog.ever@something.com' },
    { id: 4, email: 'voter1@something.com' },
    { id: 5, email: 'voter2@something.com' },
];

const getUser = (id) => users.find(user => user.id === id);

const UserService = {
    getUser,
};

module.exports = UserService;