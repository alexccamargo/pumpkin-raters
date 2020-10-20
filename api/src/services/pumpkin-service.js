const pumpkins = [
    { id: 1, name: 'Super Lazy Bastard', authorId: 1 },
    { id: 2, name: 'The biggus dikus', authorId: 1 },
    { id: 3, name: 'Chris Watts', authorId: 2 },
    { id: 4, name: 'Shanan Watts', authorId: 2 },
    { id: 5, name: 'O canto que eu vou fazer xixi', authorId: 3 },
    { id: 6, name: 'Inspirado no Pereio', authorId: 3 },
    { id: 7, name: 'O canto do sofa', authorId: 3 }
]

const rates = [
    { voterId: 4, pumpkinId: 1, rate: 4 },
    { voterId: 4, pumpkinId: 3, rate: 5 },
    { voterId: 4, pumpkinId: 7, rate: 5 },
    { voterId: 5, pumpkinId: 1, rate: 5 },
    { voterId: 5, pumpkinId: 4, rate: 3 },
    { voterId: 5, pumpkinId: 6, rate: 1 },
];

const getPumpkin = (id) => pumpkins.find(pumpkin => pumpkin.id === id);
const getPumpkins = () => pumpkins;
const getPumpkinByAuthor = (authorId) => pumpkins.filter(pumpkin => pumpkin.authorId === authorId);

const addPumpkin = (name, authorId) => {
    const pumpkin = { id: pumpkins.length + 1, name, authorId }
    pumpkins.push(pumpkin)
    return pumpkin
}

const getPumpkinRate = (pumpkinId) => {
    const pumpkinRates = rates.filter(rate => rate.pumpkinId === pumpkinId);
    return pumpkinRates.length ? pumpkinRates.reduce((acc, curr) => acc + curr.rate, 0) / pumpkinRates.length : 0;
}

const PumpkinService = {
    addPumpkin,
    getPumpkin,
    getPumpkins,
    getPumpkinByAuthor,
    getPumpkinRate,
};

export default PumpkinService;