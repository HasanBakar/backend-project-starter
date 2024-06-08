import mongoose from "mongoose";
const { Schema } = mongoose;

const challengeSchema = new Schema({
  challenge_id: { type: String, required: true },
  challenge_name: { type: String, required: true },
  account_size: { type: Number, required: true },
  challenge_price: { type: Number, required: true },
  max_daily_drawdown: { type: Number, required: true },
  max_drawdown: { type: Number, required: true },
  profit_target: { type: Number, required: true },
  max_trading_days: { type: Number, required: true },
  consistency_rule: { type: Boolean, required: true },
  min_trading_days: { type: Number, required: true },
  leverage: { type: Number, required: true },
  profit_split: { type: String, required: true },
});

const MChallenge = mongoose.model("Challenges", challengeSchema);

export default MChallenge;
