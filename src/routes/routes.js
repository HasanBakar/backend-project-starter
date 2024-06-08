import express from "express";
import challengeRoutes from "../modules/challenge/challenge.routes.js";

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: "/challenges",
    route: challengeRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
