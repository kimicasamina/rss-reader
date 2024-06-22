import express from "express";
const router = express.Router();
import {
  signup,
  login,
  logout,
  getUser,
  getAllUsers,
  updateCategory,
  getAllSubs,
  addSub,
  getAllLatestSubs,
} from "../controller/userController.js";
import verifyToken from "../middleware/verifyToken.js";

router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);
router.delete("/logout", logout);
router.get("/getuser", verifyToken, getUser);
router.put("/:id/updatecategory", updateCategory);

router.get("/:id/subs", getAllSubs);
router.put("/:id/addsub", addSub);
router.put("/:id/latestsubs", getAllLatestSubs);
export default router;
