import express from "express";
const router = express.Router();
import {
  addSub,
  getAllSub,
  getLatestSub,
  deleteSub,
} from "../controller/subscriptionController.js";

router.get("/", getAllSub);
router.post("/addsub", addSub);
router.put("/:id/latestsub", getLatestSub);
router.delete("/:id/delete", deleteSub);
export default router;
