import express from "express";
const router = express.Router();
import { addSub, getAllSub } from "../controller/subscriptionController.js";

router.get("/", getAllSub);
router.post("/addsub", addSub);

export default router;
