import { challengeServices } from "./challenge.services.js";

const getAllChallengesFromService = async (req, res) => {
  try {
    const challenges = await challengeServices.getAllChallengesFromDB();
    res.json(challenges);
  } catch (error) {
    console.log(error);
  }
};

export const challengeController = {
  getAllChallengesFromService,
};
