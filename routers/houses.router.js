import express from "express";

import { getAllHouses, getSingleHouse } from "../controllers/houses.controller.js";

const router = express.Router();

router.get("/houses", getAllHouses);
router.get("/houses/:id", getSingleHouse);

export default router;
