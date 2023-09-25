import express from "express";
import { getData, getDataByCountry } from "../controller/locationController.js";
const router = express.Router();

router.get("/getData", getData);
router.get("/getData/:country", getDataByCountry);

export default router;
