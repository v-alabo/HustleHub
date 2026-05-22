import express from "express";
import { addBusiness, allBusiness, getBusiness, searchBusiness } from "../controllers/business.js";
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
router.get("/:id", getBusiness);
router.search("/search", searchBusiness)

export default router;
