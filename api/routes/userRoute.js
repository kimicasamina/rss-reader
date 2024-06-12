import express from "express";
const router = express.Router();
import {
  signup,
  login,
  logout,
  getUser,
  getAllUsers,
  updateCategory,
} from "../controller/userController.js";
import verifyToken from "../middleware/verifyToken.js";

router.get("/", getAllUsers);
router.post("/signup", signup);
router.post("/login", login);
router.delete("/logout", logout);
router.get("/getuser", verifyToken, getUser);
router.put("/:id/updatecategory", updateCategory);
export default router;
