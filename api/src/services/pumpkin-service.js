import Pumpkin from '../db/models/pumpkin';
import Rate from '../db/models/rate';

const getPumpkin = async (id) => await Pumpkin.query().where("id", id).first();
const getPumpkins = async () => await Pumpkin.query();
const getPumpkinByAuthor = async (authorId) => await Pumpkin.query().where("userId", authorId)

const addPumpkin = (name, authorId) => Pumpkin.query().insert({ name, userId: authorId });

const getPumpkinRate = async (pumpkinId) => {
    const pumpkinRates = await Rate.query().where("pumpkinId", pumpkinId);
    return pumpkinRates.length ? pumpkinRates.reduce((acc, curr) => curr.rate + acc, 0) / pumpkinRates.length : 0;
}

const ratePumpkin = async (pumpkinId, userId, rate) => {
    await Rate.query().insert({ pumpkinId, userId, rate });
}

const PumpkinService = {
    addPumpkin,
    getPumpkin,
    getPumpkins,
    getPumpkinByAuthor,
    getPumpkinRate,
    ratePumpkin,
};

export default PumpkinService;