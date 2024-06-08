import MChallenge from "./challenge.model.js";

const getAllChallengesFromDB = async () => {
  try {
    const result = await MChallenge.find();

    return result;
  } catch (error) {
    console.log(error);
  }
};

export const challengeServices = {
  getAllChallengesFromDB,
};
