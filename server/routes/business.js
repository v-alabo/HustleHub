import express from "express";
import { addBusiness, allBusiness, getBusiness, searchBusiness, saveReview, getReview } from "../controllers/business.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
    "/add",
    upload.fields([
      { name: "businessImg", maxCount: 1 },
      { name: "ownerImg", maxCount: 1 },
    ]),
    addBusiness
  );
router.get("/all", allBusiness);
router.get("/search", searchBusiness)
router.post("/save-reviews", upload.single("img"), saveReview);
router.get("/reviews", getReview);

router.get("/:id", getBusiness);

export default router;
