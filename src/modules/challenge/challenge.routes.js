import express from "express";
import { challengeController } from "./challenge.controller.js";

const challengeRoutes = express.Router();

challengeRoutes.get("/", challengeController.getAllChallengesFromService);

export default challengeRoutes;
