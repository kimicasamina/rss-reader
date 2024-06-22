import express from "express";
const router = express.Router();
import {
  addSub,
  getAllSub,
  getLatestSub,
} from "../controller/subscriptionController.js";

router.get("/", getAllSub);
router.post("/addsub", addSub);
router.put("/:id/latestsub", getLatestSub);
export default router;
