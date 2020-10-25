import User from '../db/models/user';

const getAuthorByUserId = async (id) => mapUserToAuthor(await User.query().where('id', id).first());
const getAuthors = async () => (await User.query().whereExists(User.relatedQuery('pumpkins'))).map(mapUserToAuthor);
const isAuthors = async (id) => !!(await User.query().where('id', id).whereExists(User.relatedQuery('pumpkins').where('userId', id)).first());
    
const mapUserToAuthor = (user) => {
    return user ? ({id: user.id, name: user.username}) : undefined;
}

const AuthorService = {
    isAuthors,
    getAuthorByUserId,
    getAuthors,
};

export default AuthorService;