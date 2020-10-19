const authors = [
    { id: 1, name: 'Alex', userId: 1 },
    { id: 2, name: 'Debora linda', userId: 2 },
    { id: 3, name: 'Google the best mordedor', userId: 3 }
]

const getAuthor = (id) => authors.find(author => author.id === id);
const getAuthorByUserId = (userId) => authors.find(author => author.userId === userId);
const getAuthors = () => authors;

const addAuthor = (name, userId) => {
    const author = { id: authors.length + 1, name, userId }
    authors.push(author)
    return author
}

const AuthorService = {
    addAuthor,
    getAuthor,
    getAuthorByUserId,
    getAuthors,
};

module.exports = AuthorService;